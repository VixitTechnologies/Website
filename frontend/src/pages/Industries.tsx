import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const industries = [
  {
    number: "01",
    title: "Startups & SMEs",
    description:
      "Practical technology solutions for growing businesses building their digital operations.",
    solutions: ["Websites", "Business Software", "Automation", "Dashboards"],
    accent: "bg-brand",
  },
  {
    number: "02",
    title: "Travel & Hospitality",
    description:
      "Digital solutions that support customer experiences and day-to-day hospitality operations.",
    solutions: ["Websites", "Booking Systems", "Integrations", "Reporting"],
    accent: "bg-accent",
  },
  {
    number: "03",
    title: "Retail & E-commerce",
    description:
      "Technology for online stores, business operations, customer journeys, and data.",
    solutions: ["E-commerce", "Integrations", "Business Systems", "Analytics"],
    accent: "bg-cyan-500",
  },
  {
    number: "04",
    title: "Education",
    description:
      "Digital platforms and business systems that simplify administration, reporting, and workflows.",
    solutions: ["Web Platforms", "Internal Tools", "Reporting", "Automation"],
    accent: "bg-brand",
  },
  {
    number: "05",
    title: "Professional Services",
    description:
      "Technology that helps service businesses manage clients, processes, information, and operations.",
    solutions: ["Websites", "CRM Systems", "Automation", "Dashboards"],
    accent: "bg-accent",
  },
  {
    number: "06",
    title: "Healthcare",
    description:
      "Business-focused technology for digital presence, internal processes, information, and reporting.",
    solutions: ["Websites", "Internal Systems", "Reporting", "Automation"],
    accent: "bg-cyan-500",
  },
  {
    number: "07",
    title: "Telecommunications",
    description:
      "Digital systems that support operational workflows, reporting, integrations, and business processes.",
    solutions: ["Business Software", "Integrations", "Reporting", "Automation"],
    accent: "bg-brand",
  },
];

const Industries = () => {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-border bg-[#F1F5FF]">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-8 py-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">
            {/* HERO CONTENT */}
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                INDUSTRIES
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
                Technology Built Around
                <br />
                <span className="text-brand">Your Business.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-muted lg:text-base">
                Different industries have different processes, customers, and
                operational needs. We build practical digital solutions around
                the way your business works.
              </p>

              <div className="mt-8">
                <Button href="/contact">
                  Discuss Your Business
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Button>
              </div>
            </div>

            {/* FLOATING IMAGE */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Background accent */}
              <div className="absolute h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

              {/* Floating card */}
              <div className="group relative w-full max-w-[520px] rotate-1 rounded-[28px] border border-white/80 bg-white/60 p-3 shadow-[0_30px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_35px_80px_rgba(124,58,237,0.20)]">
                <div className="overflow-hidden rounded-[20px]">
                  <img
                    src="/images/services/industries.png"
                    alt="Technology solutions across different industries"
                    className="h-[280px] w-full object-contain transition-transform duration-700 group-hover:scale-105 lg:h-[340px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="mb-10 max-w-2xl">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                SOLUTIONS BY INDUSTRY
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                Technology shaped around
                <span className="text-brand"> real business needs.</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                From digital presence to internal systems and automation, our
                solutions can be adapted to different business environments.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {industries.map((industry) => (
                <article
                  key={industry.number}
                  className="group relative min-h-[310px] overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-md lg:p-7"
                >
                  <div
                    className={`absolute left-0 top-0 h-1 w-0 ${industry.accent} transition-all duration-300 group-hover:w-full`}
                  />

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-subtle">
                      {industry.number}
                    </span>

                    <span
                      className={`h-2 w-2 rounded-full ${industry.accent}`}
                    />
                  </div>

                  <div className="mt-10">
                    <h2 className="text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand">
                      {industry.title}
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-muted">
                      {industry.description}
                    </p>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 border-t border-border pt-4 lg:left-7 lg:right-7">
                    <p className="mb-3 text-[9px] font-semibold tracking-[0.15em] text-subtle">
                      SOLUTION AREAS
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {industry.solutions.map((solution) => (
                        <span
                          key={solution}
                          className="rounded-full border border-border bg-white px-3 py-1.5 text-[9px] font-medium text-muted"
                        >
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="border-y border-border bg-[#F5F7FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  BUSINESS-FIRST
                </p>

                <h2 className="mt-4 max-w-md text-2xl font-semibold leading-tight tracking-tight text-ink lg:text-3xl">
                  We start with the problem,
                  <span className="text-brand"> not the technology.</span>
                </h2>

                <div className="mt-6 h-1 w-10 rounded-full bg-brand" />
              </div>

              <div>
                <p className="max-w-2xl text-sm leading-7 text-muted">
                  Whether you need a new website, an internal business
                  application, better reporting, or an automated workflow, we
                  first understand what your business needs to achieve.
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
                  We then design the solution around your requirements,
                  processes, and goals instead of forcing your business into a
                  predefined technology stack or workflow.
                </p>
              </div>
            </div>

            {/* Process */}
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-border bg-white p-5">
                <span className="text-[10px] font-semibold tracking-[0.15em] text-brand">
                  01
                </span>
                <h3 className="mt-4 text-sm font-semibold text-ink">
                  Understand
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted">
                  Understand your business and the problem to solve.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5">
                <span className="text-[10px] font-semibold tracking-[0.15em] text-accent">
                  02
                </span>
                <h3 className="mt-4 text-sm font-semibold text-ink">Design</h3>
                <p className="mt-2 text-xs leading-5 text-muted">
                  Define a practical solution around your requirements.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5">
                <span className="text-[10px] font-semibold tracking-[0.15em] text-cyan-600">
                  03
                </span>
                <h3 className="mt-4 text-sm font-semibold text-ink">Build</h3>
                <p className="mt-2 text-xs leading-5 text-muted">
                  Develop and integrate the technology needed.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5">
                <span className="text-[10px] font-semibold tracking-[0.15em] text-brand">
                  04
                </span>
                <h3 className="mt-4 text-sm font-semibold text-ink">Improve</h3>
                <p className="mt-2 text-xs leading-5 text-muted">
                  Continue improving the solution as your business evolves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Not Your Industry */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12">
            <div className="grid gap-8 rounded-3xl border border-border bg-surface p-7 md:grid-cols-[1fr_auto] md:items-center lg:p-10">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  SOMETHING DIFFERENT?
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                  Don&apos;t see your industry?
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                  Your business doesn&apos;t have to fit into a predefined
                  category. If you have a digital, operational, data, or
                  automation challenge, let&apos;s discuss it.
                </p>
              </div>

              <Button href="/contact">
                Discuss Your Requirement
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#EEF4FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-12 text-white lg:px-12 lg:py-14">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />

              <div className="relative">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#94A3B8]">
                  WORKING ON A BUSINESS CHALLENGE?
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight lg:text-4xl">
                  Let&apos;s find the right technology for it.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[#CBD5E1]">
                  Tell us about your business, your challenge, or what you want
                  to improve, and let&apos;s explore the right solution.
                </p>

                <div className="mt-7">
                  <Button href="/contact">
                    Talk to Us
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Industries;
