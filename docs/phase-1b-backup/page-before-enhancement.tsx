const categories = [
  "Corporate Uniforms",
  "School Uniforms",
  "Hospitality Uniforms",
  "Healthcare Uniforms",
  "Industrial Uniforms",
  "Custom Uniforms",
  "Other Products & Accessories",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-[#28251f]">
      <header className="border-b border-[#e9e2d7] bg-[#faf8f3]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="/" className="text-3xl font-bold tracking-[0.22em]">
            DIVOK
          </a>

          <nav className="hidden items-center gap-9 text-sm md:flex">
            <a href="#home" className="hover:text-[#a47d43]">Home</a>
            <a href="#about" className="hover:text-[#a47d43]">About</a>
            <a href="#products" className="hover:text-[#a47d43]">Products</a>
            <a href="#contact" className="hover:text-[#a47d43]">Contact</a>
          </nav>

          <a
            href="https://wa.me/917559819011"
            className="rounded-full bg-[#292820] px-5 py-3 text-sm text-white transition hover:bg-[#a47d43]"
          >
            Enquire Now
          </a>
        </div>
      </header>

      <section id="home" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#a47d43]">
            Uniform Solutions · Established 2025
          </p>

          <h1 className="max-w-2xl text-5xl font-medium leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Designed to
            <span className="block italic text-[#a47d43]">Represent You.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#777166]">
            Discover professional uniform solutions designed to bring
            identity, confidence and a sense of belonging to every team.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-[#292820] px-7 py-4 text-sm text-white hover:bg-[#a47d43]"
            >
              Explore Products
            </a>
            <a
              href="https://wa.me/917559819011"
              className="rounded-full border border-[#cfc5b7] px-7 py-4 text-sm hover:border-[#a47d43]"
            >
              Talk to Our Team
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#e9e0d2]">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-[#92744b]">
              DIVOK
            </span>
            <p className="mt-5 max-w-sm text-3xl font-medium leading-relaxed text-[#514638]">
              Every uniform tells a story of identity.
            </p>
            <span className="mt-5 text-sm text-[#85745e]">
              Professional Uniform Solutions
            </span>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#e9e2d7] bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a47d43]">
            About DIVOK
          </p>
          <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
            Identity Begins With What We Wear.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#777166]">
            DIVOK provides uniform solutions for individuals, institutions
            and businesses. Our focus is on quality, affordability,
            customization and professional identity.
          </p>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a47d43]">
              Our Collection
            </p>
            <h2 className="mt-4 text-4xl font-medium">Explore Our Products</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#777166]">
            Explore uniform collections for different professions and
            institutions.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <article
              key={category}
              className="group flex min-h-48 flex-col justify-between rounded-2xl border border-[#e9e2d7] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c5a77b] hover:shadow-lg"
            >
              <span className="text-xs tracking-[0.2em] text-[#a47d43]">
                COLLECTION 0{index + 1}
              </span>
              <div>
                <h3 className="text-xl font-medium">{category}</h3>
                <p className="mt-3 text-sm text-[#82796d]">
                  Discover our uniform solutions.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#292820] px-6 py-20 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4b78c]">
              Let's Connect
            </p>
            <h2 className="mt-5 text-4xl font-medium sm:text-5xl">
              Let's find your uniform solution.
            </h2>
            <p className="mt-5 text-sm text-[#c8c2b7]">
              Perinthalmanna, Malappuram, Kerala.
            </p>
          </div>
          <a
            href="https://wa.me/917559819011"
            className="rounded-full bg-[#d4b78c] px-8 py-4 text-sm font-semibold text-[#292820] hover:bg-white"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-[#211f1a] px-6 py-8 text-center text-xs text-[#b8b1a5]">
        © 2026 DIVOK. All rights reserved.
      </footer>
    </main>
  );
}
