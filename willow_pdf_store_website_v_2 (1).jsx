"use client";

import { useMemo, useState } from "react";

export default function WillowPdfStore() {
  const pillars = [
    {
      name: "Nest",
      tagline: "For home, rhythm, and restoration",
      description:
        "PDF guides, checklists, and thoughtful resources for creating spaces that feel habitable, calming, and real.",
      items: ["Home Reset Guides", "Room-by-Room PDFs", "Gentle Systems"],
    },
    {
      name: "Academy",
      tagline: "For learning with depth",
      description:
        "Structured digital resources, essays, frameworks, and educational PDFs designed to clarify complex ideas without flattening them.",
      items: ["Teaching PDFs", "Deep-Dive Workbooks", "Research Packs"],
    },
    {
      name: "Workshop",
      tagline: "For making, building, and refining",
      description:
        "Hands-on templates, practical toolkits, process documents, and creative working files for people shaping something tangible.",
      items: ["Templates", "Toolkits", "Build Sheets"],
    },
    {
      name: "Wayfinder",
      tagline: "For orientation in nonlinear seasons",
      description:
        "Reflective PDFs, decision frameworks, and guided resources for periods of transition, uncertainty, reinvention, and recalibration.",
      items: ["Reflection Guides", "Decision Maps", "Reset PDFs"],
    },
    {
      name: "Studio",
      tagline: "For brand, language, and creative direction",
      description:
        "Editorial resources, brand tools, writing packs, and strategic PDFs for people shaping a body of work with emotional precision.",
      items: ["Brand Guides", "Writing Packs", "Strategy PDFs"],
    },
  ];

  const featured = [
    {
      title: "Nest Reset",
      price: 28,
      meta: "Space + routine guide",
      pillar: "Nest",
      description: "A practical PDF for softening friction at home and rebuilding daily rhythm.",
    },
    {
      title: "Wayfinder Notes",
      price: 24,
      meta: "Transition workbook",
      pillar: "Wayfinder",
      description: "A guided resource for seasons that do not move in straight lines.",
    },
    {
      title: "Studio Language Pack",
      price: 36,
      meta: "Brand voice toolkit",
      pillar: "Studio",
      description: "Messaging prompts, language structures, and tone-setting tools for thoughtful brands.",
    },
  ];

  const products = [
    {
      title: "The Nest Edit",
      pillar: "Nest",
      price: 32,
      format: "PDF Bundle",
      tag: "Bestseller",
      description: "A layered set of home reset documents for atmosphere, order, and lived-in ease.",
    },
    {
      title: "Academy Reader Vol. 1",
      pillar: "Academy",
      price: 22,
      format: "PDF Reader",
      tag: "New",
      description: "A compact digital reader for people who want depth without academic drag.",
    },
    {
      title: "Workshop Toolkit",
      pillar: "Workshop",
      price: 29,
      format: "Toolkit",
      tag: "Popular",
      description: "Templates and working pages that help ideas leave the fog and take form.",
    },
    {
      title: "Wayfinder Reset",
      pillar: "Wayfinder",
      price: 26,
      format: "Workbook",
      tag: "Essential",
      description: "A recalibration PDF for moments of uncertainty, transition, and emotional static.",
    },
    {
      title: "Studio Messaging Maps",
      pillar: "Studio",
      price: 34,
      format: "Strategy PDF",
      tag: "Editor’s pick",
      description: "Frameworks for shaping voice, positioning, and emotional clarity across your work.",
    },
    {
      title: "Nest Room Notes",
      pillar: "Nest",
      price: 18,
      format: "Mini Guide",
      tag: "Small format",
      description: "A focused guide for adjusting one room at a time without overhauling everything.",
    },
    {
      title: "Workshop Build Sheets",
      pillar: "Workshop",
      price: 16,
      format: "Template Set",
      tag: "Utility",
      description: "Simple working sheets for sketching, organizing, and refining active projects.",
    },
    {
      title: "Wayfinder Decision Maps",
      pillar: "Wayfinder",
      price: 20,
      format: "Decision PDF",
      tag: "Clarity",
      description: "A gentle framework for navigating choices when energy and certainty are both limited.",
    },
  ];

  const [activePillar, setActivePillar] = useState("All");

  const visibleProducts = useMemo(() => {
    if (activePillar === "All") return products;
    return products.filter((product) => product.pillar === activePillar);
  }, [activePillar]);

  const cartCount = 3;
  const cartTotal = 86;

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent)]" />

      <header className="relative border-b border-stone-800/80 bg-stone-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Willow</p>
            <h1 className="mt-1 text-lg font-light tracking-wide">PDF Store</h1>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-stone-300 md:flex">
            <a href="#pillars" className="transition-colors hover:text-white">Pillars</a>
            <a href="#featured" className="transition-colors hover:text-white">Featured</a>
            <a href="#shop" className="transition-colors hover:text-white">Shop</a>
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <button className="rounded-full border border-stone-700 px-4 py-2 transition-colors hover:bg-stone-900">
              Cart ({cartCount})
            </button>
          </nav>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-stone-500">
                A storefront shaped around five pillars
              </p>
              <h2 className="max-w-5xl text-5xl font-light leading-[1.02] tracking-tight md:text-7xl text-balance">
                A quiet digital store for PDFs that help people build, learn, orient, restore, and create.
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-8 text-stone-300 md:text-lg">
                Willow organizes its digital resources into five distinct pillars: Nest, Academy,
                Workshop, Wayfinder, and Studio. Each one holds a different kind of usefulness,
                but all of them are designed with clarity, structure, and emotional precision.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#pillars"
                  className="rounded-full bg-stone-100 px-6 py-3 text-sm font-medium text-stone-950 transition-transform hover:-translate-y-0.5"
                >
                  Explore the pillars
                </a>
                <a
                  href="#shop"
                  className="rounded-full border border-stone-700 px-6 py-3 text-sm font-medium text-stone-100 transition-colors hover:bg-stone-900"
                >
                  Browse the shop
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-800 bg-stone-900/70 p-8 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Cart preview</p>
              <h3 className="mt-4 text-2xl font-light tracking-tight md:text-3xl">A storefront with a living center.</h3>
              <div className="mt-6 space-y-4 text-sm text-stone-300">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <span>Nest Reset</span>
                  <span>$28</span>
                </div>
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <span>Workshop Toolkit</span>
                  <span>$29</span>
                </div>
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <span>Wayfinder Notes</span>
                  <span>$24</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-stone-200">
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
              <button className="mt-6 w-full rounded-full bg-stone-100 px-5 py-3 text-sm font-medium text-stone-950 transition-transform hover:-translate-y-0.5">
                Proceed to checkout
              </button>
            </div>
          </div>
        </section>

        <section id="pillars" className="mx-auto max-w-7xl px-6 py-10 md:py-16">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">The five pillars</p>
            <h3 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">
              A structure that gives the store depth instead of clutter.
            </h3>
            <p className="mt-4 leading-7 text-stone-300">
              Rather than stacking everything onto one shelf, the store is divided into five clear
              territories. Each pillar gives the customer a different entry point depending on what
              they need.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
            {pillars.map((pillar) => (
              <article
                key={pillar.name}
                className="group rounded-3xl border border-stone-800 bg-stone-900/70 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-stone-700 hover:bg-stone-900"
              >
                <div className="flex min-h-[300px] flex-col">
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-500">{pillar.name}</p>
                  <h4 className="mt-3 text-2xl font-light tracking-tight text-white">{pillar.tagline}</h4>
                  <p className="mt-4 text-sm leading-7 text-stone-300">{pillar.description}</p>
                  <div className="mt-auto pt-8">
                    <p className="mb-3 text-xs uppercase tracking-[0.28em] text-stone-500">Inside</p>
                    <ul className="space-y-2 text-sm text-stone-200">
                      {pillar.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <button className="mt-6 rounded-full border border-stone-700 px-4 py-2 text-sm transition-colors hover:bg-stone-950">
                      Enter {pillar.name}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="featured" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-[2rem] border border-stone-800 bg-stone-900 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Featured collection</p>
              <h3 className="mt-4 text-3xl font-light tracking-tight md:text-5xl">
                Start with the PDFs people return to.
              </h3>
              <p className="mt-6 max-w-2xl leading-8 text-stone-300">
                Use this section for bestselling downloads, new releases, or the clearest entry
                points into the Willow store. It gives the page a heartbeat and a commercial anchor.
              </p>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {featured.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-stone-800 bg-stone-950 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-stone-500">{item.pillar}</p>
                    <h4 className="mt-3 text-xl font-light text-white">{item.title}</h4>
                    <p className="mt-2 text-sm text-stone-400">{item.meta}</p>
                    <p className="mt-4 text-sm leading-7 text-stone-300">{item.description}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm text-stone-200">${item.price}</p>
                      <button className="rounded-full border border-stone-700 px-4 py-2 text-sm transition-colors hover:bg-stone-900">
                        View PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] border border-stone-800 bg-stone-900/70 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Store logic</p>
              <h3 className="mt-4 text-2xl font-light tracking-tight md:text-3xl">
                Five pillars. One coherent storefront.
              </h3>
              <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
                <p>
                  <span className="text-white">Nest</span> holds resources for the home, daily rhythm,
                  and soft restoration.
                </p>
                <p>
                  <span className="text-white">Academy</span> holds teaching, learning, and deepening.
                </p>
                <p>
                  <span className="text-white">Workshop</span> holds tools, templates, and active making.
                </p>
                <p>
                  <span className="text-white">Wayfinder</span> holds orientation for transition, uncertainty,
                  and recalibration.
                </p>
                <p>
                  <span className="text-white">Studio</span> holds brand, language, and creative direction.
                </p>
              </div>
              <div className="mt-8 rounded-2xl border border-stone-800 bg-stone-950 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Collections</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {["All PDFs", "Bundles", "Workbooks", "Mini Guides", "Templates"].map((item) => (
                    <button
                      key={item}
                      className="rounded-full border border-stone-700 px-4 py-2 text-sm text-stone-200 transition-colors hover:bg-stone-900"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-6 py-10 md:py-16">
          <div className="rounded-[2rem] border border-stone-800 bg-gradient-to-b from-stone-900 to-stone-950 p-8 md:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Storefront section</p>
                <h3 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">
                  Browse by pillar, then move inward.
                </h3>
                <p className="mt-5 leading-8 text-stone-300">
                  This version includes a simple filter state so the storefront feels active. Use it as
                  the base for category pages, bundles, memberships, or future product families.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["All", ...pillars.map((pillar) => pillar.name)].map((pillar) => {
                  const isActive = activePillar === pillar;
                  return (
                    <button
                      key={pillar}
                      onClick={() => setActivePillar(pillar)}
                      className={`rounded-full px-4 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-stone-100 text-stone-950"
                          : "border border-stone-700 text-stone-200 hover:bg-stone-900"
                      }`}
                    >
                      {pillar}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {visibleProducts.map((product) => (
                <div key={product.title} className="rounded-2xl border border-stone-800 bg-stone-900/70 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-stone-500">{product.pillar}</p>
                      <h4 className="mt-3 text-xl font-light text-white">{product.title}</h4>
                    </div>
                    <span className="rounded-full border border-stone-700 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-stone-300">
                      {product.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-stone-400">{product.format}</p>
                  <p className="mt-3 text-sm leading-7 text-stone-300">{product.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-stone-200">${product.price}</span>
                    <button className="rounded-full border border-stone-700 px-4 py-2 text-sm transition-colors hover:bg-stone-950">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">About the concept</p>
              <h3 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">
                Not a generic download shop. A store with a spine.
              </h3>
            </div>
            <div className="space-y-6 leading-8 text-stone-300">
              <p>
                The five-pillar system gives the brand a clear internal architecture. It lets the
                customer understand the difference between restoring, learning, making, orienting,
                and shaping a body of work.
              </p>
              <p>
                That structure also gives you room to grow. New PDFs, bundles, memberships, courses,
                or even physical products can be added later without the store losing coherence.
              </p>
              <p>
                The result is a storefront that feels curated, legible, and expandable rather than
                crowded or improvised.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-[2rem] border border-stone-800 bg-stone-900/80 p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Final section</p>
            <h3 className="mt-4 max-w-3xl text-3xl font-light tracking-tight md:text-5xl">
              A storefront that can grow without losing its shape.
            </h3>
            <p className="mt-6 max-w-2xl leading-8 text-stone-300">
              Use this page as the front door to the Willow PDF store, then connect each pillar to
              its own dedicated category page, collection, or sales flow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#shop"
                className="rounded-full bg-stone-100 px-6 py-3 text-sm font-medium text-stone-950 transition-transform hover:-translate-y-0.5"
              >
                Open the shop
              </a>
              <a
                href="#pillars"
                className="rounded-full border border-stone-700 px-6 py-3 text-sm font-medium transition-colors hover:bg-stone-950"
              >
                Revisit the pillars
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-stone-200">Willow PDF Store</p>
            <p className="mt-1">Nest, Academy, Workshop, Wayfinder, Studio.</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#pillars" className="transition-colors hover:text-white">Pillars</a>
            <a href="#featured" className="transition-colors hover:text-white">Featured</a>
            <a href="#shop" className="transition-colors hover:text-white">Shop</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
