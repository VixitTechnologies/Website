import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const projects = [
  {
    number: "01",
    category: "TRAVEL & HOSPITALITY",
    title: "Travel Booking Platform",
    description:
      "A booking platform designed to help customers discover, manage, and book travel experiences through a simple digital workflow.",
    services: "Web Development • Custom Software",
    accent: "bg-brand",
  },
  {
    number: "02",
    category: "DATA & BI",
    title: "Business Analytics Platform",
    description:
      "A business intelligence solution that brings operational data together through interactive dashboards and performance reporting.",
    services: "Data & BI • Automation",
    accent: "bg-accent",
  },
  {
    number: "03",
    category: "BUSINESS SOFTWARE",
    title: "Supplier Management System",
    description:
      "A centralized system for managing supplier information, records, workflows, and day-to-day operational activities.",
    services: "Custom Software • Data & BI",
    accent: "bg-cyan-500",
  },
  {
    number: "04",
    category: "BUSINESS SOFTWARE",
    title: "CRM & Lead Management System",
    description:
      "A structured platform for managing leads, customer information, follow-ups, and sales activities.",
    services: "Custom Software • Automation",
    accent: "bg-brand",
  },
  {
    number: "05",
    category: "RETAIL & E-COMMERCE",
    title: "E-commerce Website",
    description:
      "A responsive online store experience designed around product discovery, customer journeys, and online transactions.",
    services: "Web Development • Integrations",
    accent: "bg-accent",
  },
  {
    number: "06",
    category: "AI & AUTOMATION",
    title: "AI Customer Support Assistant",
    description:
      "An AI-powered support solution designed to help businesses handle common customer questions and provide faster responses.",
    services: "Custom Software • AI Integration",
    accent: "bg-cyan-500",
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
                OUR WORK
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
                Practical Technology.
                <br />
                <span className="text-brand">Real Business Use Cases.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-muted lg:text-base">
                Explore examples of the digital products, business systems,
                dashboards, and automation solutions we can build for growing
                businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-lg lg:p-7"
                >
                  <div
                    className={`absolute left-0 top-0 h-1 w-0 ${project.accent} transition-all duration-300 group-hover:w-full`}
                  />

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-subtle">
                      {project.number}
                    </span>

                    <span className="rounded-full border border-border bg-white px-3 py-1.5 text-[9px] font-semibold tracking-[0.12em] text-muted">
                      {project.category}
                    </span>
                  </div>

                  <div className="mt-12">
                    <h2 className="text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand">
                      {project.title}
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-muted">
                      {project.description}
                    </p>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 border-t border-border pt-4 lg:left-7 lg:right-7">
                    <p className="text-[10px] font-semibold tracking-[0.12em] text-subtle">
                      {project.services}
                    </p>
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
                  PROJECT SHOWCASE
                </p>

                <div className="mt-4 h-1 w-10 rounded-full bg-brand" />
              </div>

              <p className="max-w-2xl text-sm leading-7 text-muted">
                The examples shown here represent the types of solutions Vixit
                can design and develop. Selected projects can be expanded into
                detailed case studies as the portfolio grows.
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
