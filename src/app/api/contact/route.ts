import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";
import { siteConfig } from "@/content/site-config";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const data = parsed.data;
  console.log("[contact-form] Yêu cầu tư vấn mới:", data);

  if (resend) {
    try {
      await resend.emails.send({
        from: "Website Huấn Luyện An Toàn 1 <onboarding@resend.dev>",
        to: siteConfig.email,
        replyTo: data.email || undefined,
        subject: `Yêu cầu tư vấn mới từ ${data.name}`,
        html: `
          <h2>Yêu cầu tư vấn mới từ website</h2>
          <p><strong>Họ tên:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Số điện thoại:</strong> ${escapeHtml(data.phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email || "(không có)")}</p>
          <p><strong>Công ty:</strong> ${escapeHtml(data.company || "(không có)")}</p>
          <p><strong>Dịch vụ quan tâm:</strong> ${escapeHtml(data.service || "(không có)")}</p>
          <p><strong>Nội dung:</strong></p>
          <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
        `,
      });
    } catch (error) {
      console.error("[contact-form] Gửi email thất bại:", error);
    }
  } else {
    console.warn("[contact-form] RESEND_API_KEY chưa được cấu hình — bỏ qua gửi email.");
  }

  return NextResponse.json({ success: true });
}
