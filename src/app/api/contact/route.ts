import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // TODO: cắm dịch vụ gửi email thật (Resend/Nodemailer) hoặc lưu vào CRM khi có.
  console.log("[contact-form] Yêu cầu tư vấn mới:", parsed.data);

  return NextResponse.json({ success: true });
}
