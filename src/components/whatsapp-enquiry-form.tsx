"use client";

import { FormEvent } from "react";

type WhatsAppEnquiryFormProps = {
  language?: "en" | "ar";
};

export default function WhatsAppEnquiryForm({
  language = "en",
}: WhatsAppEnquiryFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "").trim();
    const business = String(form.get("business") || "").trim();
    const type = String(form.get("type") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const message = String(form.get("message") || "").trim();

    const text =
      language === "ar"
        ? [
            "مرحبا Radio POS، أحتاج نظام نقاط بيع لعملي.",
            "",
            `الاسم: ${name || "-"}`,
            `اسم النشاط: ${business || "-"}`,
            `نوع النشاط: ${type || "-"}`,
            `رقم الهاتف: ${phone || "-"}`,
            `المتطلبات: ${message || "-"}`,
          ].join("\n")
        : [
            "Hello Radio POS, I need a POS system for my business.",
            "",
            `Name: ${name || "-"}`,
            `Business name: ${business || "-"}`,
            `Business type: ${type || "-"}`,
            `Phone: ${phone || "-"}`,
            `Requirement: ${message || "-"}`,
          ].join("\n");

    const url = `https://wa.me/971509031312?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const isArabic = language === "ar";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8"
    >
      <h3 className="text-2xl font-black">
        {isArabic ? "استفسار سريع" : "Quick Enquiry"}
      </h3>
      <p className="mt-2 text-sm text-white/55">
        {isArabic
          ? "املأ هذه البيانات قبل التواصل معنا."
          : "Fill these details before contacting us."}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input
          className="rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none ring-red-500/40 placeholder:text-white/35 focus:ring-4"
          placeholder={isArabic ? "الاسم" : "Your name"}
          name="name"
          required
        />
        <input
          className="rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none ring-red-500/40 placeholder:text-white/35 focus:ring-4"
          placeholder={isArabic ? "اسم النشاط" : "Business name"}
          name="business"
          required
        />
        <input
          className="rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none ring-red-500/40 placeholder:text-white/35 focus:ring-4"
          placeholder={isArabic ? "نوع النشاط" : "Business type"}
          name="type"
          required
        />
        <input
          className="rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none ring-red-500/40 placeholder:text-white/35 focus:ring-4"
          placeholder={isArabic ? "رقم الهاتف" : "Phone number"}
          name="phone"
          required
        />
      </div>

      <textarea
        className="mt-4 min-h-28 w-full rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none ring-red-500/40 placeholder:text-white/35 focus:ring-4"
        placeholder={
          isArabic
            ? "اكتب ما تحتاجه: جهاز POS، قارئ باركود، طابعة، برنامج، إعداد باركود، تقارير، دعم سحابي..."
            : "Tell us what you need: POS machine, scanner, printer, software, barcode setup, reports, cloud support..."
        }
        name="message"
      />

      <button
        type="submit"
        className="mt-5 inline-flex w-full justify-center rounded-full bg-red-600 px-7 py-4 text-center font-black shadow-lg shadow-red-600/25 transition hover:bg-red-500"
      >
        {isArabic ? "إرسال الاستفسار عبر واتساب" : "Send Enquiry on WhatsApp"}
      </button>
    </form>
  );
}
