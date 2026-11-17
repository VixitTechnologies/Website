import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const solutions = [
  {
    number: "01",
    title: "Business Websites",
    description: "Responsive websites and digital experiences for businesses.",
    service: "Web Development",
    accent: "bg-brand",
    image: "/images/services/web_development.png",
  },
  {
    number: "02",
    title: "Custom Business Software",
    description:
      "Internal tools and applications built around business workflows.",
    service: "Custom Software",
    accent: "bg-accent",
    image: "/images/services/custom_software.png",
  },
  {
    number: "03",
    title: "Dashboards & Reporting",
    description:
      "Interactive dashboards and reporting systems for business data.",
    service: "Data & BI",
    accent: "bg-cyan-500",
    image: "/images/services/data_and_bi.png",
  },
  {
    number: "04",
    title: "Workflow Automation",
    description:
      "Automate repetitive processes, reports, and operational tasks.",
    service: "Automation",
    accent: "bg-brand",
    image: "/images/services/automation.png",
  },
  {
    number: "05",
    title: "System Integrations",
    description:
      "Connect APIs, business platforms, databases, and third-party services.",
    service: "Cloud & Integrations",
    accent: "bg-accent",
    image: "/images/services/cloud_and_integrations.png",
  },
  {
    number: "06",
    title: "Ongoing Technology Support",
    description:
      "Maintenance, improvements, troubleshooting, and technical support.",
    service: "Support & Maintenance",
    accent: "bg-cyan-500",
    image: "/images/services/support_and_maintenance.png",
  },
];

const OurWork = () => {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-border bg-[#F1F5FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12 lg:py-20">
            <div className="max-w-4xl">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                WHAT WE BUILD
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
                Practical Technology.
                <br />
                <span className="text-brand">Business-Focused Solutions.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-muted lg:text-base">
                Our work is currently focused on building practical digital
                solutions across web, software, data, and automation. Here are
                the types of systems and platforms we design and build for
                growing businesses.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            {/* HEADER */}
            <div className="mb-12">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                OUR CAPABILITIES
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                What We Build for
                <span className="text-brand"> Growing Businesses.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                Explore the types of digital solutions we can develop to address
                business needs, improve workflows, and support growth.
              </p>
            </div>

            {/* SOLUTION CARDS */}
            <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
              {solutions.map((solution) => (
                <article
                  key={solution.number}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md lg:p-7"
                >
                  {/* BACKGROUND IMAGE */}
                  <img
                    src={solution.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-25 transition-all duration-500 group-hover:scale-105 group-hover:opacity-35"
                  />

                  {/* LIGHT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/65 to-white/55" />
                  {/* CARD CONTENT */}
                  <div className="relative">
                    {/* TOP */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold tracking-[0.15em] text-subtle">
                        {solution.number}
                      </span>

                      <span className="rounded-full border border-border bg-white/80 px-3 py-1.5 text-[9px] font-semibold tracking-[0.1em] text-muted">
                        SOLUTION AREA
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-7">
                      <div
                        className={`mb-4 h-1 w-9 rounded-full ${solution.accent}`}
                      />

                      <h3 className="text-lg font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand">
                        {solution.title}
                      </h3>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-muted">
                        {solution.description}
                      </p>
                    </div>

                    {/* BOTTOM */}
                    <div className="mt-6 border-t border-border pt-4">
                      <p className="text-[10px] font-semibold tracking-[0.12em] text-subtle">
                        SERVICE
                      </p>

                      <p className="mt-1 text-xs font-medium text-ink">
                        {solution.service}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="border-y border-border bg-[#F5F7FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-14 lg:px-12">
            <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  ABOUT THIS PAGE
                </p>

                <div className="mt-4 h-1 w-10 rounded-full bg-brand" />
              </div>

              <p className="max-w-2xl text-sm leading-7 text-muted">
                These are the solution areas Vixit designs and builds — not
                completed client projects. As we deliver real client work, this
                page will grow to include detailed case studies.
              </p>
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
                  HAVE A PROJECT IN MIND?
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight lg:text-4xl">
                  Let&apos;s build your next solution.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[#CBD5E1]">
                  Tell us about your business challenge, idea, or project and
                  let&apos;s explore what we can build together.
                </p>

                <div className="mt-7">
                  <Button href="/contact">
                    Start a Project
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

export default OurWork;
