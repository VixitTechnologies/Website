import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const services = [
  {
    number: "01",
    title: "Website Updates",
    description:
      "Keep website content, features, and dependencies updated as your business evolves.",
    accent: "bg-brand",
  },
  {
    number: "02",
    title: "Bug Fixes",
    description:
      "Identify and resolve technical issues affecting your website or application.",
    accent: "bg-accent",
  },
  {
    number: "03",
    title: "Performance Improvements",
    description:
      "Improve application performance, responsiveness, and reliability over time.",
    accent: "bg-cyan-500",
  },
  {
    number: "04",
    title: "Monitoring",
    description:
      "Monitor applications and help identify issues before they become larger operational problems.",
    accent: "bg-brand",
  },
  {
    number: "05",
    title: "Technical Support",
    description:
      "Get technical assistance when your team needs help with existing systems.",
    accent: "bg-accent",
  },
  {
    number: "06",
    title: "Post-Launch Support",
    description:
      "Continue improving and maintaining your technology after the initial launch.",
    accent: "bg-cyan-500",
  },
];

const supportModel = [
  {
    number: "01",
    title: "Identify",
    description: "Understand the issue, requirement, or improvement needed.",
  },
  {
    number: "02",
    title: "Resolve",
    description: "Implement the fix, update, or technical improvement.",
  },
  {
    number: "03",
    title: "Maintain",
    description: "Keep the system reliable and ready for future changes.",
  },
];

const SupportMaintenance = () => {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-border bg-[#F1F5FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12 lg:py-20">
            <div className="max-w-4xl">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                SUPPORT & MAINTENANCE
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
                Technology That Continues to Work
                <br />
                <span className="text-brand">After Launch.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-muted lg:text-base">
                We provide ongoing technical support, updates, fixes, and
                maintenance to keep your websites and applications reliable as
                your business grows.
              </p>

              <div className="mt-8">
                <Button href="/contact">
                  Get Technical Support
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  WHAT WE SUPPORT
                </p>

                <h2 className="mt-4 max-w-md text-2xl font-semibold leading-tight tracking-tight text-ink lg:text-3xl">
                  Ongoing technical support when your business needs it.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-6 text-muted">
                  Technology needs attention after launch too. We help keep your
                  websites and applications stable, updated, and ready for what
                  comes next.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service.number}
                    className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold tracking-[0.15em] text-subtle">
                        {service.number}
                      </span>

                      <span
                        className={`h-2 w-2 rounded-full ${service.accent}`}
                      />
                    </div>

                    <h3 className="mt-6 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-brand">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support Model */}
        <section className="border-y border-border bg-[#F5F7FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                SUPPORT MODEL
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                A simple approach to
                <span className="text-brand"> ongoing support.</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-muted">
                From identifying an issue to maintaining the solution, we keep
                the support process straightforward.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {supportModel.map((step, index) => (
                <div
                  key={step.number}
                  className="group min-h-[180px] rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-subtle">
                      {step.number}
                    </span>

                    <span
                      className={`h-2 w-2 rounded-full ${
                        index === 0
                          ? "bg-brand"
                          : index === 1
                            ? "bg-accent"
                            : "bg-cyan-500"
                      }`}
                    />
                  </div>

                  <h3 className="mt-7 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-brand">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
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
                  NEED TECHNICAL SUPPORT?
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight lg:text-4xl">
                  Keep your technology running smoothly.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[#CBD5E1]">
                  Tell us what you need help with, and we&apos;ll explore the
                  right support or maintenance approach for your system.
                </p>

                <div className="mt-7">
                  <Button href="/contact">
                    Get a Quote
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

export default SupportMaintenance;
