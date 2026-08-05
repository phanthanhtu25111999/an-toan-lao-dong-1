import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ tên").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^(0|\+84)[0-9]{9,10}$/, "Số điện thoại không hợp lệ"),
  email: z.string().trim().email("Email không hợp lệ").optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Vui lòng nhập nội dung cần tư vấn").max(2000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
