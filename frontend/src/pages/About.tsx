import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const reasons = [
    {
      number: "01",
      title: "Business-First",
      description: "We start by understanding the business problem.",
      accent: "bg-brand",
    },
    {
      number: "02",
      title: "End-to-End",
      description: "From planning and development to deployment and support.",
      accent: "bg-accent",
    },
    {
      number: "03",
      title: "Transparent",
      description: "Clear communication throughout the project.",
      accent: "bg-cyan-500",
    },
    {
      number: "04",
      title: "Scalable",
      description: "Solutions designed to grow with your business.",
      accent: "bg-brand",
    },
    {
      number: "05",
      title: "Long-Term Support",
      description: "We can continue supporting your technology after launch.",
      accent: "bg-accent",
    },
  ];

  const process = [
    ["01", "Discover"],
    ["02", "Plan"],
    ["03", "Design"],
    ["04", "Develop"],
    ["05", "Test"],
    ["06", "Launch"],
    ["07", "Support"],
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="border-b border-border bg-[#F1F5FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12 lg:py-20">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
              ABOUT VIXIT
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
              Building Practical Technology
              <span className="text-brand"> for Growing Businesses.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted lg:text-base">
              Vixit Technologies helps businesses turn ideas, processes, and
              challenges into practical digital solutions across web, software,
              data, automation, and cloud.
            </p>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-3">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  WHO WE ARE
                </p>

                <h2 className="mt-4 max-w-md text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                  A technology partner focused on useful solutions.
                </h2>

                <div className="mt-6 h-1 w-12 rounded-full bg-brand" />
              </div>

              <div className="space-y-5 lg:col-span-2">
                <p className="max-w-3xl text-sm leading-7 text-muted">
                  Businesses don't always need more technology. They need the
                  right technology to solve a specific problem.
                </p>

                <p className="max-w-3xl text-sm leading-7 text-muted">
                  At Vixit, we focus on understanding the business problem first
                  and then designing a solution around it. From a new website to
                  a custom internal system, dashboard, integration, or automated
                  workflow, our goal is to make technology practical and
                  valuable.
                </p>

                <p className="max-w-3xl text-sm leading-7 text-muted">
                  We work with growing businesses that want a technology partner
                  who can understand their requirements, build the solution, and
                  continue supporting it as their needs evolve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY VIXIT */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  WHY VIXIT
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                  Built around how your
                  <span className="text-brand"> business works.</span>
                </h2>
              </div>

              <p className="max-w-sm text-xs leading-5 text-muted">
                Practical technology, clear communication, and support beyond
                development.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {reasons.map((reason) => (
                <div
                  key={reason.number}
                  className="group min-h-[175px] rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={`h-1 w-8 rounded-full ${reason.accent} transition-all duration-300 group-hover:w-12`}
                  />

                  <p className="mt-5 text-[10px] font-semibold tracking-wider text-subtle">
                    {reason.number}
                  </p>

                  <h3 className="mt-3 text-sm font-semibold text-ink">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-muted">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
              OUR PROCESS
            </p>

            <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
              A clear process from idea
              <span className="text-brand"> to implementation.</span>
            </h2>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
              {process.map(([number, title], index) => (
                <div
                  key={number}
                  className="group rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-md"
                >
                  <p className="text-[10px] font-semibold tracking-wider text-subtle">
                    {number}
                  </p>

                  <div className="mt-5 h-8 w-8 rounded-full bg-[#EEF4FF] text-center text-xs font-semibold leading-8 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    {index + 1}
                  </div>

                  <p className="mt-4 text-sm font-semibold text-ink">{title}</p>
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
                  LET'S WORK TOGETHER
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight lg:text-4xl">
                  Have a business challenge
                  <span className="text-[#93C5FD]"> to solve?</span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[#CBD5E1]">
                  Tell us what you're building and let's explore the right
                  technology solution for your business.
                </p>

                <div className="mt-7">
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-lg"
                  >
                    Start a Conversation →
                  </Link>
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

export default About;
