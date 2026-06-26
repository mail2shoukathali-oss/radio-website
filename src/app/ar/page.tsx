import type { Metadata } from "next";
import WhatsAppEnquiryForm from "@/components/whatsapp-enquiry-form";
import Link from "next/link";
import ProductImageShowcase from "@/components/product-image-showcase";
export const metadata: Metadata = {
  title: "Radio POS | حلول نقاط البيع وبرامج الفوترة",
  description:
    "Radio POS تقدم أجهزة نقاط البيع، برامج الفوترة، إعداد الباركود، إدارة المخزون، التقارير السحابية، التركيب، التدريب والدعم للمحلات والمطاعم والأنشطة التجارية في الشرق الأوسط.",
};

const whatsappLink =
  "https://wa.me/971504417226?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20Radio%20POS%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%86%D8%B8%D8%A7%D9%85%20%D9%86%D9%82%D8%A7%D8%B7%20%D8%A8%D9%8A%D8%B9%20%D9%84%D8%B9%D9%85%D9%84%D9%8A.%20%D9%8A%D8%B1%D8%AC%D9%89%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%8A.";

const services = [
  {
    title: "أجهزة ونظام نقاط البيع",
    text: "أجهزة لمس، قارئ باركود، طابعة فواتير، درج كاش، وتجهيز كامل لكاونتر البيع.",
  },
  {
    title: "برنامج الفوترة وإدارة الأعمال",
    text: "فواتير سهلة، إدارة المنتجات، بيانات العملاء، متابعة المبيعات، وتقارير يومية للأعمال.",
  },
  {
    title: "إدارة المخزون والباركود",
    text: "إعداد الباركود، إدخال الأصناف، متابعة المخزون، تنبيهات النقص، وتنظيم المنتجات حسب الأقسام.",
  },
  {
    title: "الدعم السحابي والتقارير",
    text: "وصول سحابي، تقارير كاملة، تحكم بالموظفين، متابعة الفروع، ورؤية واضحة للأعمال عن بعد.",
  },
  {
    title: "التركيب والتدريب",
    text: "تركيب في الموقع، إعداد البرنامج، تدريب الموظفين، وشرح طريقة الاستخدام اليومي.",
  },
  {
    title: "الصيانة والدعم بعد البيع",
    text: "صيانة النظام، حل المشاكل، تحديثات البرنامج، ودعم مستمر عند الحاجة.",
  },
];

const industries = [
  "البقالات",
  "السوبرماركت",
  "الميني مارت",
  "المطاعم",
  "الكافيهات",
  "المخابز",
  "الكافتيريات",
  "الصيدليات",
  "محلات التجميل",
  "محلات الموبايل",
  "محلات الإلكترونيات",
  "محلات الهدايا",
  "المكتبات والقرطاسية",
  "محلات الملابس والأقمشة",
  "محلات الأدوات",
  "محلات قطع الغيار",
  "محلات الحيوانات الأليفة",
  "المغاسل",
  "الصالونات",
  "منافذ التجارة العامة",
];

const whyChoose = [
  "فوترة سريعة",
  "برنامج سهل الاستخدام",
  "أجهزة POS موثوقة",
  "إعداد الأصناف والباركود",
  "إدارة المخزون",
  "تحكم بصلاحيات الموظفين",
  "تقارير وخيارات سحابية",
  "تركيب في الموقع",
  "تدريب الموظفين",
  "دعم ما بعد البيع",
  "إعداد مخصص حسب نوع النشاط",
];

const steps = [
  ["الاستشارة", "نفهم نوع نشاطك واحتياجاتك الأساسية."],
  ["اقتراح النظام المناسب", "نقترح جهاز POS والبرنامج والإعداد المناسب لعملك."],
  ["التركيب", "نقوم بتركيب الأجهزة والبرنامج في موقعك."],
  ["إعداد الأصناف والباركود", "نقوم بإدخال الأصناف، الباركود، الأقسام والبيانات الأساسية."],
  ["التدريب", "نقوم بتدريب الموظفين على استخدام النظام بثقة."],
  ["الدعم", "نوفر الصيانة والدعم الفني بعد البيع."],
];

export default function ArabicHome() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#070707] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/ar" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-red-600 text-2xl font-black shadow-lg shadow-red-600/30">
              R
            </div>
            <div>
              <p className="text-xl font-black tracking-tight">
                Radio <span className="text-red-500">POS</span>
              </p>
              <p className="text-xs text-white/55">حلول نقاط بيع موثوقة</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <a href="#services" className="hover:text-white">الخدمات</a>
            <a href="#industries" className="hover:text-white">الأنشطة</a>
            <a href="#why" className="hover:text-white">لماذا نحن</a>
            <a href="#contact" className="hover:text-white">تواصل معنا</a>
          </nav>

          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 text-xs font-bold sm:text-sm">
            <Link href="/" className="rounded-full px-3 py-2 text-white/70 hover:text-white">
              EN
            </Link>
            <Link href="/ar" className="rounded-full bg-red-600 px-3 py-2 text-white">
              عربي
            </Link>
          </div>

        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-red-600/30 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-120px] h-96 w-96 rounded-full bg-red-700/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center lg:py-28">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200">
              أجهزة POS • برنامج مبيعات • دعم فني
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              حلول نقاط بيع متكاملة{" "}
              <span className="text-red-500">لجميع الأعمال</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/70">
              أجهزة نقاط البيع، برامج الفوترة، إعداد الباركود، إدارة المخزون،
              التحكم بالموظفين، التقارير السحابية، التركيب، التدريب والدعم
              للمحلات التجارية، المطاعم، الكافيهات، الصيدليات، الصالونات وجميع
              الأنشطة المشابهة.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                className="rounded-full bg-red-600 px-7 py-4 text-center font-bold shadow-xl shadow-red-600/30 transition hover:bg-red-500"
              >
                اطلب عرض عبر واتساب
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-4 text-center font-bold text-white/90 transition hover:border-red-400 hover:text-white"
              >
                احجز استشارة مجانية
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-red-950/30">
              <img
                src="/images/radio-pos-human-using-pos.png"
                alt="صاحب متجر يستخدم نظام Radio POS للفوترة"
                className="aspect-[4/3] w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["نخدم الشرق الأوسط", "الإمارات، دول الخليج، وأسواق الشرق الأوسط"],
            ["تركيب في الموقع", "تركيب النظام وتدريب الموظفين في موقع العمل"],
            ["دعم الباركود", "إعداد الأصناف، الباركود، وإدارة المنتجات"],
            ["دعم ما بعد البيع", "صيانة، تحديثات، ومساعدة فنية عند الحاجة"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-lg font-black text-red-400">{title}</p>
              <p className="mt-2 text-sm leading-7 text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <ProductImageShowcase language="ar" />

      <section id="services" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="خدماتنا" title="أجهزة وبرامج وإعداد كامل لنقاط البيع" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-red-500/50">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-red-600 font-black">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 leading-8 text-white/65">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="الأنشطة المناسبة" title="مناسب للعديد من أنواع الأعمال" />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((industry) => (
              <div key={industry} className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-center text-sm font-semibold text-white/80">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="لماذا Radio POS" title="مصمم للأعمال اليومية" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-red-600 text-sm font-black">✓</span>
                <span className="font-semibold text-white/85">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="طريقة العمل" title="من الاستشارة إلى الدعم" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map(([title, text], index) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-black p-6">
                <div className="mb-4 text-4xl font-black text-red-500">0{index + 1}</div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-8 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-red-500/40 bg-gradient-to-br from-red-600 to-red-900 p-8 shadow-2xl shadow-red-600/25 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-100">
              استشارة مجانية
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              هل تحتاج نظام POS لعملك؟
            </h2>
            <p className="mt-4 leading-8 text-white/80">
              أخبرنا بنوع نشاطك ومتطلباتك، وسنقترح لك جهاز POS والبرنامج والإعداد
              المناسب لعملك.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-black text-red-700 transition hover:bg-red-50"
            >
              تواصل عبر واتساب
            </a>
          </div>

          <WhatsAppEnquiryForm language="ar" />
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-black py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">تواصل مع Radio POS</h2>
            <p className="mt-4 text-white/60">
              حلول نقاط بيع متكاملة للمحلات، المطاعم، الخدمات، والأنشطة التجارية.
            </p>
          </div>
          <div className="space-y-3 text-lg">
            <p><strong>الموقع:</strong> بوطينة، الشارقة، الإمارات</p>
            <p><strong>البريد الإلكتروني:</strong> <a className="text-red-400" href="mailto:mail2radiopos@gmail.com">mail2radiopos@gmail.com</a></p>
            <p>
              <strong>الهاتف:</strong>{" "}
              <span dir="ltr" className="inline-block">+971 50 903 1312</span>
              {" / "}
              <span dir="ltr" className="inline-block">+971 50 441 7226</span>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-8 text-center text-sm text-white/50">
        © Radio POS. جميع الحقوق محفوظة.
      </footer>

      <a
        href="tel:+971509031312"
        className="fixed bottom-24 left-5 z-50 flex items-center gap-3 rounded-full border border-white/15 bg-white px-5 py-4 font-black text-black shadow-2xl transition hover:bg-white/90"
        aria-label="اتصال مباشر برقم Radio POS الأساسي"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-red-600 text-white">☎</span>
        <span className="hidden sm:inline">اتصل الآن</span>
      </a>


      <a
        href={whatsappLink}
        target="_blank"
        aria-label="Contact Radio POS on WhatsApp"
        className="fixed bottom-5 left-5 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 font-black text-white shadow-2xl shadow-green-500/30 transition hover:bg-green-400"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-green-600">
          <svg
            viewBox="0 0 32 32"
            className="h-5 w-5"
            aria-hidden="true"
            fill="currentColor"
          >
            <path d="M16.01 3.2c-7.05 0-12.78 5.73-12.78 12.78 0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.58-1.73a12.7 12.7 0 0 0 6.23 1.59c7.05 0 12.78-5.73 12.78-12.78S23.06 3.2 16.01 3.2Zm0 23.28c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.5 10.5 0 0 1-1.62-5.59c0-5.85 4.76-10.6 10.6-10.6 5.85 0 10.6 4.75 10.6 10.6s-4.75 10.5-10.6 10.5Zm5.82-7.93c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.21.32-.85 1.05-1.04 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.15.32-.38.49-.57.16-.19.21-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.71s1.17 3.15 1.33 3.37c.16.22 2.3 3.52 5.58 4.93.78.34 1.39.54 1.87.69.79.25 1.5.21 2.06.13.63-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.14-.29-.22-.61-.38Z" />
          </svg>
        </span>
        <span className="hidden sm:inline">واتساب الآن</span>
      </a>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{title}</h2>
    </div>
  );
}
