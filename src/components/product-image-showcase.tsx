import Image from "next/image";

type Language = "en" | "ar";

const content = {
  en: {
    badge: "Real POS Hardware",
    title: "Everything your counter needs",
    subtitle:
      "A complete POS setup with touch screen billing, receipt printing, barcode scanning and cash drawer support.",
    mainTitle: "Complete Radio POS Setup",
    mainText: "POS terminal, printer, scanner and cash drawer working together.",
    items: [
      {
        title: "Touch Screen POS",
        text: "Fast billing screen for retail, food and service businesses.",
        image: "/images/radio-pos-terminal.png",
        alt: "Radio POS touch screen terminal",
      },
      {
        title: "Receipt Printer",
        text: "Thermal receipt printing for daily sales and customer bills.",
        image: "/images/radio-pos-printer.png",
        alt: "Radio POS thermal receipt printer",
      },
      {
        title: "Barcode Scanner",
        text: "Quick item scanning for faster checkout and fewer mistakes.",
        image: "/images/radio-pos-scanner.png",
        alt: "Radio POS barcode scanner",
      },
      {
        title: "Cash Drawer",
        text: "Cash drawer support for organized counter operations.",
        image: "/images/radio-pos-cash-drawer.png",
        alt: "Radio POS cash drawer",
      },
    ],
  },
  ar: {
    badge: "أجهزة نقاط بيع حقيقية",
    title: "كل ما يحتاجه كاونتر البيع",
    subtitle:
      "نظام كامل يشمل شاشة لمس للفوترة، طابعة فواتير، قارئ باركود، ودعم درج النقد.",
    mainTitle: "تجهيز كامل من Radio POS",
    mainText: "شاشة نقاط بيع، طابعة، قارئ باركود ودرج نقد تعمل معًا.",
    items: [
      {
        title: "شاشة لمس POS",
        text: "شاشة فوترة سريعة للمحلات، المطاعم، والأنشطة الخدمية.",
        image: "/images/radio-pos-terminal.png",
        alt: "شاشة لمس Radio POS",
      },
      {
        title: "طابعة فواتير",
        text: "طباعة فواتير حرارية للمبيعات اليومية وفواتير العملاء.",
        image: "/images/radio-pos-printer.png",
        alt: "طابعة فواتير Radio POS",
      },
      {
        title: "قارئ باركود",
        text: "مسح سريع للأصناف لتسريع البيع وتقليل الأخطاء.",
        image: "/images/radio-pos-scanner.png",
        alt: "قارئ باركود Radio POS",
      },
      {
        title: "درج نقد",
        text: "دعم درج النقد لتنظيم عمليات الكاونتر.",
        image: "/images/radio-pos-cash-drawer.png",
        alt: "درج نقد Radio POS",
      },
    ],
  },
};

export default function ProductImageShowcase({
  language = "en",
}: {
  language?: Language;
}) {
  const copy = content[language];

  return (
    <section className="scroll-mt-28 border-t border-white/10 bg-black py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-red-400">
            {copy.badge}
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">{copy.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-red-950/30">
            <Image
              src="/images/radio-pos-full-setup.png"
              alt={copy.mainTitle}
              width={1448}
              height={1086}
              className="aspect-[4/3] w-full rounded-[1.5rem] bg-white object-contain"
              priority
            />
            <div className="p-5">
              <h3 className="text-2xl font-black text-white">{copy.mainTitle}</h3>
              <p className="mt-2 text-white/60">{copy.mainText}</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {copy.items.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1448}
                  height={1086}
                  className="aspect-[4/3] w-full rounded-[1.5rem] bg-white object-contain"
                />
                <div className="p-4">
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
