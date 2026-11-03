const whatsapp = "https://wa.me/917559819011";

const categories = [
  {
    number: "01",
    name: "Corporate Uniforms",
    description: "Professional apparel for modern workplaces.",
    image: "https://static.wixstatic.com/media/ae0409_8a26653e74a04abb969184f26cc82e79~mv2.jpg/v1/fill/w_711%2Ch_467%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/ae0409_8a26653e74a04abb969184f26cc82e79~mv2.jpg"
  },
  {
    number: "02",
    name: "School Uniforms",
    description: "Uniform solutions for educational institutions.",
    image: "https://gentwith.com/cdn/shop/articles/Uniforms-Ties-For-Schools_e5286b3a-0572-4b37-897f-783ca95d7abe.jpg?v=1768709180"
  },
  {
    number: "03",
    name: "Hospitality Uniforms",
    description: "Professional clothing for hospitality teams.",
    image: "https://3shospitalitymanagement.com/static/images/service_staffing.webp"
  },
  {
    number: "04",
    name: "Healthcare Uniforms",
    description: "Professional workwear for healthcare teams.",
    image: "https://meduniformsupply.com/cdn/shop/files/BUT16723XXS_3741fe42-9dfb-41f9-a5bd-abe955e60503.jpg?v=1754921850&width=1946"
  },
  {
    number: "05",
    name: "Industrial Uniforms",
    description: "Practical workwear for industrial environments.",
    image: "https://www.comfortuniforms.ae/assets/images/uniforms.webp"
  },
  {
    number: "06",
    name: "Custom Uniforms",
    description: "Customized apparel that reflects your identity.",
    image: "https://i.etsystatic.com/31411722/r/il/92a305/6779229024/il_fullxfull.6779229024_1ntf.jpg"
  },
  {
    number: "07",
    name: "Other Products & Accessories",
    description: "Explore complementary products and accessories.",
    image: "https://www.knotsonline.com/assets/cat-accessories-800w-CDEubbOL.webp"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf8f3] text-[#28251f]">

      <header className="absolute left-0 top-0 z-50 w-full border-b border-[#e9e2d7] bg-[#faf8f3]/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#home" className="text-3xl font-black tracking-[0.24em] text-[#28251f]">
            DIVOK<span className="text-[#a47d43]">.</span>
          </a>

          <nav className="hidden items-center gap-9 text-sm text-[#28251f]/80 md:flex">
            <a href="#home" className="transition hover:text-[#a47d43]">Home</a>
            <a href="#about" className="transition hover:text-[#a47d43]">About</a>
            <a href="#products" className="transition hover:text-[#a47d43]">Products</a>
            <a href="#process" className="transition hover:text-[#a47d43]">Our Approach</a>
            <a href="#contact" className="transition hover:text-[#a47d43]">Contact</a>
          </nav>

          <a href={whatsapp} className="rounded-sm border border-[#a47d43] bg-[#a47d43] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#faf8f3] transition hover:bg-transparent hover:text-[#a47d43]">
            Enquire Now
          </a>
        </div>

        <nav className="flex justify-center gap-6 border-t border-[#e9e2d7] px-3 py-3 text-xs text-[#28251f]/75 md:hidden">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#process">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="relative flex min-h-[760px] items-center bg-[#eee7dc] pt-32">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=2000&q=90"
          alt="Professional industrial work environment"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f3] via-[#faf8f3]/85 to-[#faf8f3]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f3] via-transparent to-[#faf8f3]/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <p className="mb-7 text-xs font-bold uppercase tracking-[0.35em] text-[#a47d43]">
            Uniform Solutions · Established 2025
          </p>

          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl">
            Your Identity.
            <span className="block text-[#a47d43]">Your Uniform.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#28251f]/75 sm:text-lg">
            Professional uniform solutions designed to strengthen identity,
            confidence and professionalism across industries.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#products" className="bg-[#a47d43] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#faf8f3] transition hover:bg-white">
              Explore Collections
            </a>
            <a href={whatsapp} className="border border-[#cfc5b7] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#28251f] transition hover:border-[#a47d43] hover:text-[#a47d43]">
              Contact DIVOK
            </a>
          </div>

          <div className="mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-[#e9e2d7] pt-7">
            <div>
              <p className="text-2xl font-bold text-[#a47d43]">2025</p>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-[#28251f]/60">Established</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#a47d43]">Kerala</p>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-[#28251f]/60">Service Coverage</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#a47d43]">Custom</p>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-[#28251f]/60">Solutions</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-10 hidden text-[10px] uppercase tracking-[0.35em] text-[#28251f]/50 lg:block">
          DIVOK — Professional Uniform Solutions
        </div>
      </section>

      <section id="about" className="border-y border-[#e9e2d7] bg-[#ffffff] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#a47d43]">Who We Are</p>
            <h2 className="mt-6 text-4xl font-bold uppercase leading-tight sm:text-5xl">
              Uniforms That
              <span className="block text-[#a47d43]">Build Identity.</span>
            </h2>
            <p className="mt-8 text-base leading-8 text-[#28251f]/65">
              DIVOK is a uniform solutions company based in Perinthalmanna,
              Kerala. We focus on providing high-quality, affordable and
              customized uniform solutions for individuals, institutions
              and businesses.
            </p>
            <p className="mt-5 text-base leading-8 text-[#28251f]/65">
              Our goal is to help every organization express its identity
              through professional clothing.
            </p>
            <a href="#contact" className="mt-9 inline-block border-b border-[#a47d43] pb-2 text-xs font-bold uppercase tracking-widest text-[#a47d43]">
              Connect With DIVOK →
            </a>
          </div>

          <div className="relative">
            <img
              src="https://static.wixstatic.com/media/eb2ac7_aebada0e26cc4433b8b5a11ef8b34606~mv2.png/v1/fill/w_980%2Ch_980%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/eb2ac7_aebada0e26cc4433b8b5a11ef8b34606~mv2.png"
              alt="Professionals showcasing different uniform styles"
              className="h-[430px] w-full object-cover"
            />
            <div className="absolute -bottom-5 -left-5 h-full w-full border border-[#a47d43]/50" />
          </div>
        </div>
      </section>

      <section id="divok-strength" className="overflow-hidden bg-[#f5f0e7] px-6 py-24 text-[#28251f] md:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#a47d43]">
                The DIVOK Difference
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                Empowering Every Industry,
                <span className="block bg-gradient-to-r from-[#a47d43] via-[#b89561] to-[#6f5430] bg-clip-text text-transparent">
                  One Uniform at a Time.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-[#716b62] md:text-lg">
                DIVOK provides customized uniform solutions for individuals,
                institutions and businesses. From professional workwear to
                everyday uniforms, we help organizations express their identity
                with confidence.
              </p>

              <a href="#products" className="mt-9 inline-flex items-center gap-3 border-b border-[#58b9e8] pb-2 text-sm font-bold uppercase tracking-widest text-[#a47d43] transition hover:text-[#28251f]">
                Explore our collections <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="grid grid-cols-2 items-center gap-4">
              <div className="h-64 -skew-x-6 overflow-hidden border border-[#d9cdbb] sm:h-80 lg:h-[390px]">
                <img
                  src="https://images.squarespace-cdn.com/content/66955f997a7c721c3d7c268b/9290162e-ef48-4d1b-b6c7-4ea0d04cd097/ChatGPT%2BImage%2BMay%2B12%2C%2B2026%2C%2B09_24_21%2BPM.png?content-type=image%2Fpng"
                  alt="Professional working in an industrial environment"
                  className="h-full w-full skew-x-6 scale-110 object-cover"
                />
              </div>
              <div className="mt-12 h-64 -skew-x-6 overflow-hidden border border-[#d9cdbb] sm:h-80 lg:mt-20 lg:h-[390px]">
                <img
                  src="https://static.fibre2fashion.com/Newsresource/images/302/shutterstock-2505613129_313861.jpg"
                  alt="Workers collaborating in a production environment"
                  className="h-full w-full skew-x-6 scale-110 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-[#ded5c8] pt-12 lg:grid-cols-4">
            <div>
              <p className="text-5xl font-bold tracking-tight text-[#a47d43] sm:text-6xl">2025</p>
              <p className="mt-4 max-w-[180px] text-base leading-7 text-[#716b62]">Year DIVOK was established</p>
            </div>
            <div>
              <p className="text-5xl font-bold tracking-tight text-[#a47d43] sm:text-6xl">∞</p>
              <p className="mt-4 max-w-[180px] text-base leading-7 text-[#716b62]">A growing range of uniform categories</p>
            </div>
            <div>
              <p className="text-5xl font-bold tracking-tight text-[#a47d43] sm:text-6xl">Kerala</p>
              <p className="mt-4 max-w-[180px] text-base leading-7 text-[#716b62]">Service coverage across the state</p>
            </div>
            <div>
              <p className="text-5xl font-bold tracking-tight text-[#a47d43] sm:text-6xl">Custom</p>
              <p className="mt-4 max-w-[180px] text-base leading-7 text-[#716b62]">Solutions for different identity needs</p>
            </div>
          </div>
        </div>
      </section>
      <section id="products" className="bg-[#faf8f3] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#a47d43]">What We Offer</p>
              <h2 className="mt-5 text-4xl font-bold uppercase sm:text-5xl">Our Collections</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#28251f]/55">
              Explore uniform categories designed for different industries,
              workplaces and professional identities.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article key={category.number} className="group relative overflow-hidden border border-[#e9e2d7] bg-[#eee7dc]">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f3] via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 border border-[#a47d43]/60 bg-[#faf8f3]/70 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-[#a47d43]">
                    COLLECTION {category.number}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold uppercase">{category.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#28251f]/55">{category.description}</p>
                  <a href={whatsapp} className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#a47d43]">
                    Enquire Now <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-[#e9e2d7] bg-[#ffffff] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#a47d43]">Working With DIVOK</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Your Uniform Journey Starts Here.
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <div className="border-t border-[#a47d43] pt-7">
              <p className="text-4xl font-black text-[#a47d43]">01</p>
              <h3 className="mt-6 text-xl font-bold uppercase">Share Your Requirement</h3>
              <p className="mt-4 text-sm leading-7 text-[#28251f]/55">Tell us about your organization, uniform needs and preferences.</p>
            </div>
            <div className="border-t border-[#a47d43] pt-7">
              <p className="text-4xl font-black text-[#a47d43]">02</p>
              <h3 className="mt-6 text-xl font-bold uppercase">Discuss Customization</h3>
              <p className="mt-4 text-sm leading-7 text-[#28251f]/55">Discuss suitable styles, customization requirements and details with our team.</p>
            </div>
            <div className="border-t border-[#a47d43] pt-7">
              <p className="text-4xl font-black text-[#a47d43]">03</p>
              <h3 className="mt-6 text-xl font-bold uppercase">Connect With DIVOK</h3>
              <p className="mt-4 text-sm leading-7 text-[#28251f]/55">Contact our team directly to discuss the next steps for your requirement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#a47d43] px-6 py-20 text-[#faf8f3]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em]">Let's Work Together</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-black uppercase leading-tight sm:text-5xl">
              Let's Find Your Uniform Solution.
            </h2>
          </div>
          <a href={whatsapp} className="shrink-0 border border-[#faf8f3] px-8 py-5 text-xs font-black uppercase tracking-wider transition hover:bg-[#faf8f3] hover:text-[#28251f]">
            Enquire on WhatsApp →
          </a>
        </div>
      </section>

      <footer id="contact" className="border-t border-[#e5dac9] bg-[#f5f0e7] px-6 py-16 text-[#28251f] lg:px-10">
  <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">

    <div>
      <a href="#home" className="text-3xl font-black tracking-[0.24em]">
        DIVOK<span className="text-[#a47d43]">.</span>
      </a>
      <p className="mt-5 max-w-xs text-sm leading-7 text-[#716b62]">
        Professional uniform solutions for individuals, institutions and businesses.
      </p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[#a47d43]">
        Your Identity. Your Uniform.
      </p>
    </div>

    <div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-[#a47d43]">Quick Links</h3>
      <div className="mt-6 flex flex-col items-start gap-4 text-sm text-[#514a40]">
        <a href="#home" className="hover:text-[#a47d43]">Home</a>
        <a href="#about" className="hover:text-[#a47d43]">About DIVOK</a>
        <a href="#products" className="hover:text-[#a47d43]">Our Collections</a>
        <a href="#process" className="hover:text-[#a47d43]">Our Approach</a>
      </div>
    </div>

    <div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-[#a47d43]">Contact Us</h3>
      <div className="mt-6 flex flex-col gap-4 text-sm leading-6 text-[#514a40]">
        <p>Perinthalmanna, Malappuram, Kerala, India</p>
        <a href="tel:+917559819011" className="hover:text-[#a47d43]">+91 75598 19011</a>
        <a href="mailto:divokofficial755@gmail.com" className="break-all hover:text-[#a47d43]">divokofficial755@gmail.com</a>
      </div>
    </div>

    <div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-[#a47d43]">Connect With DIVOK</h3>
      <p className="mt-6 text-sm leading-7 text-[#716b62]">
        Have a uniform requirement? Talk directly with our team.
      </p>
      <div className="mt-5 flex flex-col items-start gap-4 text-sm font-semibold">
        <a href={whatsapp} target="_blank" rel="noreferrer" className="text-[#a47d43] hover:text-[#6f5430]">WhatsApp Enquiry ↗</a>
        <a href="https://www.instagram.com/di__vok/" target="_blank" rel="noreferrer" className="text-[#a47d43] hover:text-[#6f5430]">Instagram ↗</a>
      </div>
    </div>

  </div>

  <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-4 border-t border-[#ded5c8] pt-7 text-xs text-[#81796e] sm:flex-row">
    <p>© 2026 DIVOK. All rights reserved.</p>
    <p>Professional Uniform Solutions · Kerala, India</p>
  </div>
</footer>

          <a
        href="https://wa.me/917559819011?text=Hello%20DIVOK%2C%20I%20am%20interested%20in%20your%20uniform%20solutions.%20Please%20share%20more%20details."
        target="_blank"
        rel="noreferrer"
        aria-label="Enquire with DIVOK on WhatsApp"
        className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-bold text-white shadow-xl transition hover:scale-105 hover:bg-[#1ebe5d]"
      >
        <span className="text-xl">✆</span>
        WhatsApp Enquiry
      </a>
</main>
  );
}








