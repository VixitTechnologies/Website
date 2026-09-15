import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const industries = [
  {
    number: "01",
    title: "Startups & SMEs",
    description:
      "Technology solutions that help growing businesses establish digital operations, automate processes, and scale efficiently.",
    accent: "bg-brand",
  },
  {
    number: "02",
    title: "Travel & Hospitality",
    description:
      "Websites, booking systems, dashboards, and digital workflows designed for travel and hospitality businesses.",
    accent: "bg-accent",
  },
  {
    number: "03",
    title: "Retail & E-commerce",
    description:
      "Digital storefronts, business systems, integrations, and analytics that support online and retail operations.",
    accent: "bg-cyan-500",
  },
  {
    number: "04",
    title: "Education",
    description:
      "Web platforms, internal systems, reporting tools, and automation for educational organizations and businesses.",
    accent: "bg-brand",
  },
  {
    number: "05",
    title: "Professional Services",
    description:
      "Custom applications and digital workflows that help service-based businesses manage clients, operations, and data.",
    accent: "bg-accent",
  },
  {
    number: "06",
    title: "Healthcare",
    description:
      "General business technology, websites, internal systems, and data solutions for healthcare organizations.",
    accent: "bg-cyan-500",
  },
  {
    number: "07",
    title: "Telecommunications",
    description:
      "Business applications, reporting, integrations, and automation to support operational and customer-facing processes.",
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
          <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12 lg:py-20">
            <div className="max-w-4xl">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                INDUSTRIES
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
                Technology Adapted to
                <br />
                <span className="text-brand">Your Industry.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-muted lg:text-base">
                Every business has different processes, customers, and
                challenges. We build technology around the way your industry
                operates.
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
          </div>
        </section>

        {/* Industries */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="grid gap-5 md:grid-cols-2">
              {industries.map((industry) => (
                <article
                  key={industry.number}
                  className="group relative min-h-[270px] overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-md lg:p-7"
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

                  <div className="mt-12">
                    <h2 className="text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand">
                      {industry.title}
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-muted">
                      {industry.description}
                    </p>
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
                  The technology is then selected and designed around those
                  requirements rather than forcing your business to adapt to an
                  off-the-shelf solution.
                </p>
              </div>
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
