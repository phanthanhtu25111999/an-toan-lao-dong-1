"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      service: defaultService ?? "",
      message: defaultService ? `Tôi cần tư vấn về dịch vụ: ${defaultService}` : "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset({ ...values, name: "", phone: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FieldGroup>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field data-invalid={!!errors.name}>
            <FieldLabel htmlFor="name">Họ và tên *</FieldLabel>
            <Input id="name" placeholder="Nguyễn Văn A" {...register("name")} />
            <FieldError errors={[errors.name]} />
          </Field>
          <Field data-invalid={!!errors.phone}>
            <FieldLabel htmlFor="phone">Số điện thoại *</FieldLabel>
            <Input id="phone" placeholder="09xxxxxxxx" {...register("phone")} />
            <FieldError errors={[errors.phone]} />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" placeholder="email@congty.com" {...register("email")} />
            <FieldError errors={[errors.email]} />
          </Field>
          <Field data-invalid={!!errors.company}>
            <FieldLabel htmlFor="company">Công ty</FieldLabel>
            <Input id="company" placeholder="Tên công ty" {...register("company")} />
            <FieldError errors={[errors.company]} />
          </Field>
        </div>
        <Field data-invalid={!!errors.service}>
          <FieldLabel htmlFor="service">Dịch vụ quan tâm</FieldLabel>
          <Input id="service" placeholder="VD: Huấn luyện an toàn vệ sinh lao động" {...register("service")} />
          <FieldError errors={[errors.service]} />
        </Field>
        <Field data-invalid={!!errors.message}>
          <FieldLabel htmlFor="message">Nội dung cần tư vấn *</FieldLabel>
          <Textarea id="message" rows={4} placeholder="Mô tả nhu cầu của doanh nghiệp bạn..." {...register("message")} />
          <FieldError errors={[errors.message]} />
        </Field>

        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-fit">
          {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
          Gửi yêu cầu tư vấn
        </Button>

        {status === "success" && (
          <p className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="size-4" />
            Đã gửi thành công! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm font-medium text-destructive">
            <XCircle className="size-4" />
            Có lỗi xảy ra, vui lòng thử lại hoặc gọi trực tiếp hotline.
          </p>
        )}
      </FieldGroup>
    </form>
  );
}
