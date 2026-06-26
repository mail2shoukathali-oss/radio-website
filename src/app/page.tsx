const whatsappLink =
  "https://wa.me/971509031312?text=Hello%20Radio%20POS%2C%20I%20need%20a%20POS%20system%20for%20my%20business.%20Please%20contact%20me.";

const services = [
  {
    title: "POS Hardware & Setup",
    text: "Touch screen POS machines, barcode scanners, receipt printers, cash drawers and full counter setup.",
  },
  {
    title: "Billing & Business Software",
    text: "Easy billing, product management, customer records, sales tracking and daily business reports.",
  },
  {
    title: "Inventory & Barcode Management",
    text: "Barcode setup, item preloading, stock control, low-stock tracking and category-wise product management.",
  },
  {
    title: "Cloud & Reporting Support",
    text: "Cloud access, full business reports, staff control, branch monitoring and remote business visibility.",
  },
  {
    title: "Installation & Training",
    text: "On-site installation, software setup, staff training and daily-use guidance.",
  },
  {
    title: "Maintenance & After-Sales Support",
    text: "System maintenance, troubleshooting, software updates and ongoing support.",
  },
];

const industries = [
  "Groceries",
  "Supermarkets",
  "Mini marts",
  "Restaurants",
  "Cafes",
  "Bakeries",
  "Cafeterias",
  "Pharmacies",
  "Cosmetic shops",
  "Mobile shops",
  "Electronics shops",
  "Gift shops",
  "Stationery shops",
  "Garments & textiles",
  "Hardware shops",
  "Spare parts shops",
  "Pet shops",
  "Laundry shops",
  "Salons",
  "General trading outlets",
];

const whyChoose = [
  "Fast billing",
  "Easy-to-use software",
  "Reliable POS hardware",
  "Barcode and item setup",
  "Inventory control",
  "Staff access control",
  "Cloud reporting options",
  "On-site installation",
  "Staff training",
  "After-sales support",
  "Custom setup for each business",
];

const steps = [
  ["Consultation", "We understand your business type and requirements."],
  ["System Recommendation", "We suggest the right POS machine, software and setup."],
  ["Installation", "We install the POS hardware and software at your location."],
  ["Item & Barcode Setup", "We preload items, barcodes, categories and basic business data."],
  ["Training", "We train your staff to use the system confidently."],
  ["Support", "We provide maintenance and after-sales support."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-red-600 text-2xl font-black shadow-lg shadow-red-600/30">
              R
            </div>
            <div>
              <p className="text-xl font-black tracking-tight">
                Radio <span className="text-red-500">POS</span>
              </p>
              <p className="text-xs text-white/55">Reliable POS Solutions</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#why" className="hover:text-white">Why Us</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            className="rounded-full bg-red-600 px-5 py-3 text-sm font-bold shadow-lg shadow-red-600/30 transition hover:bg-red-500"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute right-[-120px] top-[-120px] h-96 w-96 rounded-full bg-red-600/30 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[-120px] h-96 w-96 rounded-full bg-red-700/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center lg:py-28">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200">
              POS Machines • Software • Support
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Complete POS Solutions for{" "}
              <span className="text-red-500">Your Business</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              POS machines, billing software, barcode setup, inventory control,
              staff management, cloud reports, installation, training and support
              for retail, food and service businesses.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                className="rounded-full bg-red-600 px-7 py-4 text-center font-bold shadow-xl shadow-red-600/30 transition hover:bg-red-500"
              >
                Get Quote on WhatsApp
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-4 text-center font-bold text-white/90 transition hover:border-red-400 hover:text-white"
              >
                Book Free Consultation
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-red-600/30 blur-3xl" />
            <div className="relative rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
              <div className="mx-auto max-w-xl rounded-[1.8rem] border-[10px] border-zinc-800 bg-zinc-950 p-5 shadow-2xl shadow-red-950/30">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="font-black">Radio POS</p>
                    <p className="text-xs text-white/45">Fast billing screen</p>
                  </div>
                  <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold">
                    NEW SALE
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {["Fruits", "Drinks", "Bakery", "Dairy", "Snacks", "Items"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white p-4 text-center text-sm font-bold text-zinc-900 shadow-inner"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-white p-4 text-zinc-900">
                  <div className="mb-3 flex justify-between text-sm">
                    <span>Total</span>
                    <strong>AED --</strong>
                  </div>
                  <div className="rounded-xl bg-red-600 py-3 text-center font-black text-white">
                    BILL / PAY
                  </div>
                </div>
              </div>

              <div className="mx-auto h-10 w-32 rounded-b-3xl bg-zinc-800" />
              <div className="mx-auto h-5 w-52 rounded-t-2xl bg-zinc-900" />

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4 text-center">
                  <div className="mx-auto mb-3 h-10 w-14 rounded-lg border-2 border-red-500" />
                  <p className="text-sm font-bold">Touch Screen POS</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4 text-center">
                  <div className="mx-auto mb-3 h-10 w-16 rounded-lg border-2 border-red-500">
                    <div className="mx-auto mt-4 h-1 w-10 bg-red-500" />
                  </div>
                  <p className="text-sm font-bold">Barcode Scanner</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4 text-center">
                  <div className="mx-auto mb-3 h-10 w-16 rounded-lg border-2 border-red-500">
                    <div className="mx-auto -mt-3 h-5 w-10 rounded-t bg-white" />
                  </div>
                  <p className="text-sm font-bold">Receipt Printer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="What We Provide" title="POS hardware, software and complete setup" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-red-500/50">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-red-600 font-black">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Industries" title="Suitable for many business types" />
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
          <SectionTitle eyebrow="Why Choose Radio POS" title="Built for daily business operations" />
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
          <SectionTitle eyebrow="How We Work" title="From consultation to support" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map(([title, text], index) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-black p-6">
                <div className="mb-4 text-4xl font-black text-red-500">0{index + 1}</div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-red-500/40 bg-gradient-to-br from-red-600 to-red-900 p-8 shadow-2xl shadow-red-600/25 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-100">
              Free Consultation
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Need a POS system for your business?
            </h2>
            <p className="mt-4 leading-8 text-white/80">
              Tell us your business type and required setup. Radio POS will suggest
              the right POS machine, software and support plan for your operation.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-black text-red-700 transition hover:bg-red-50"
            >
              WhatsApp Radio POS
            </a>
          </div>

          <form
            action="https://wa.me/971509031312"
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8"
          >
            <h3 className="text-2xl font-black">Quick Enquiry</h3>
            <p className="mt-2 text-sm text-white/55">
              Fill these details before contacting us.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none ring-red-500/40 placeholder:text-white/35 focus:ring-4"
                placeholder="Your name"
                name="name"
              />
              <input
                className="rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none ring-red-500/40 placeholder:text-white/35 focus:ring-4"
                placeholder="Business name"
                name="business"
              />
              <input
                className="rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none ring-red-500/40 placeholder:text-white/35 focus:ring-4"
                placeholder="Business type"
                name="type"
              />
              <input
                className="rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none ring-red-500/40 placeholder:text-white/35 focus:ring-4"
                placeholder="Phone number"
                name="phone"
              />
            </div>

            <textarea
              className="mt-4 min-h-28 w-full rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none ring-red-500/40 placeholder:text-white/35 focus:ring-4"
              placeholder="Tell us what you need: POS machine, scanner, printer, software, barcode setup, reports, cloud support..."
              name="message"
            />

            <a
              href={whatsappLink}
              target="_blank"
              className="mt-5 inline-flex w-full justify-center rounded-full bg-red-600 px-7 py-4 text-center font-black shadow-lg shadow-red-600/25 transition hover:bg-red-500"
            >
              Send Enquiry on WhatsApp
            </a>
          </form>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-black py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">Contact Radio POS</h2>
            <p className="mt-4 text-white/60">
              Complete POS solutions for retail, food and service businesses.
            </p>
          </div>
          <div className="space-y-3 text-lg">
            <p><strong>Location:</strong> Butina, Sharjah, UAE</p>
            <p><strong>Email:</strong> <a className="text-red-400" href="mailto:mail2radiopos@gmail.com">mail2radiopos@gmail.com</a></p>
            <p><strong>Phone / WhatsApp:</strong> +971 50 903 1312 / +971 50 441 7226</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-8 text-center text-sm text-white/50">
        © Radio POS. All rights reserved.
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        aria-label="Contact Radio POS on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 font-black text-white shadow-2xl shadow-green-500/30 transition hover:bg-green-400"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-lg text-green-600">
          ☎
        </span>
        <span className="hidden sm:inline">WhatsApp Now</span>
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
