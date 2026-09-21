import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const CustomSoftware = () => {
  const solutions = [
    {
      number: "01",
      title: "Business Management Systems",
      description:
        "Centralized systems to manage business operations, information, and workflows.",
      accent: "bg-brand",
    },
    {
      number: "02",
      title: "CRM & Lead Management",
      description:
        "Manage leads, customer information, follow-ups, and sales processes in one place.",
      accent: "bg-accent",
    },
    {
      number: "03",
      title: "Supplier Management",
      description:
        "Track suppliers, records, transactions, and operational information efficiently.",
      accent: "bg-cyan-500",
    },
    {
      number: "04",
      title: "Booking Systems",
      description:
        "Custom booking workflows for appointments, travel, reservations, and services.",
      accent: "bg-brand",
    },
    {
      number: "05",
      title: "Admin Dashboards",
      description:
        "Clear dashboards for managing users, operations, records, and business activity.",
      accent: "bg-accent",
    },
    {
      number: "06",
      title: "Internal Portals",
      description:
        "Secure internal applications that give teams access to the information and tools they need.",
      accent: "bg-cyan-500",
    },
    {
      number: "07",
      title: "Workflow Applications",
      description:
        "Digitize manual processes and create structured workflows for everyday business tasks.",
      accent: "bg-brand",
    },
    {
      number: "08",
      title: "Custom Reporting",
      description:
        "Reports tailored to the metrics and information your business needs to monitor.",
      accent: "bg-accent",
    },
  ];

  const approach = [
    {
      number: "01",
      title: "Understand",
      description: "Understand your business process and requirements.",
    },
    {
      number: "02",
      title: "Design",
      description: "Plan the system around your users and workflows.",
    },
    {
      number: "03",
      title: "Develop",
      description: "Build, integrate, and test the software.",
    },
    {
      number: "04",
      title: "Support",
      description: "Continue improving and supporting the system after launch.",
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="border-b border-border bg-[#F1F5FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12 lg:py-20">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
              CUSTOM SOFTWARE
            </p>

            <div className="mt-5 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              {/* LEFT */}
              <div>
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
                  Software Designed Around How Your
                  <span className="text-brand"> Business Works.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-muted lg:text-base">
                  We build custom business applications that simplify
                  operations, connect teams, manage information, and support the
                  way your organization actually works.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact">
                    Get a Quote
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Button>

                  <Button href="/work" variant="secondary">
                    View Our Work
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
                <div className="group relative w-full max-w-[520px] rotate-1 rounded-[28px] border border-white/80 bg-white/60 p-3 shadow-[0_30px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-500 hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(124,58,237,0.20)]">
                  <div className="rounded-[20px]">
                    <img
                      src="/images/services/custom_software.png"
                      alt="Custom software and business application development"
                      className="h-[280px] w-full object-contain transition-transform duration-700 group-hover:scale-105 lg:h-[340px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              {/* LEFT */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  WHAT WE BUILD
                </p>

                <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-ink lg:text-4xl">
                  Business software built for your
                  <span className="text-brand"> specific requirements.</span>
                </h2>

                <div className="mt-7 flex items-center gap-2">
                  <div className="h-1 w-12 rounded-full bg-brand" />
                  <div className="h-1 w-5 rounded-full bg-accent" />
                </div>

                <p className="mt-6 max-w-md text-sm leading-7 text-muted">
                  From internal systems to customer-facing applications, we
                  build software around your processes rather than forcing your
                  business to adapt to generic tools.
                </p>
              </div>

              {/* RIGHT */}
              <div className="grid gap-5 sm:grid-cols-2">
                {solutions.map((solution) => (
                  <div
                    key={solution.number}
                    className="group min-h-[200px] rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-2 w-2 rounded-full ${solution.accent}`}
                        />

                        <span className="text-[10px] font-semibold tracking-wider text-subtle transition-colors duration-200 group-hover:text-brand">
                          {solution.number}
                        </span>
                      </div>

                      <span className="text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand">
                        →
                      </span>
                    </div>

                    <div
                      className={`mt-7 h-1 w-9 rounded-full ${solution.accent} transition-all duration-300 group-hover:w-14`}
                    />

                    <h3 className="mt-5 text-sm font-semibold text-ink">
                      {solution.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-muted">
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="border-y border-border bg-[#F5F7FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  OUR APPROACH
                </p>

                <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-ink lg:text-4xl">
                  From business requirement
                  <span className="text-brand"> to working software.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-muted lg:justify-self-end">
                We keep the development process clear and structured, from
                understanding your requirements through development and
                long-term support.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {approach.map((step, index) => (
                <div
                  key={step.number}
                  className="group min-h-[190px] rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-wider text-subtle group-hover:text-brand">
                      {step.number}
                    </span>

                    <span className="text-xs text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand">
                      →
                    </span>
                  </div>

                  <div className="mt-7 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF4FF] text-xs font-semibold text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      {index + 1}
                    </div>

                    <h3 className="text-sm font-semibold text-ink">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#EEF4FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12">
            <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-12 text-white lg:px-12">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />

              <div className="relative">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#94A3B8]">
                  HAVE A BUSINESS PROCESS TO IMPROVE?
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight lg:text-4xl">
                  Let&apos;s build software
                  <span className="text-[#93C5FD]"> around it.</span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[#CBD5E1]">
                  Tell us what your business needs and let&apos;s explore a
                  software solution built around your processes.
                </p>

                <div className="mt-7">
                  <Button href="/contact">
                    Start a Conversation
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

export default CustomSoftware;
