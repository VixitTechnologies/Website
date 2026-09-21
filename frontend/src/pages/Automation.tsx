import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const solutions = [
  {
    number: "01",
    title: "Excel Automation",
    description:
      "Automate repetitive spreadsheet operations, calculations, formatting, and data processing.",
    accent: "bg-brand",
  },
  {
    number: "02",
    title: "Report Generation",
    description:
      "Generate recurring business reports without manually collecting and formatting data every time.",
    accent: "bg-accent",
  },
  {
    number: "03",
    title: "Data Processing",
    description:
      "Automate repetitive data cleaning, transformation, and processing tasks.",
    accent: "bg-cyan-500",
  },
  {
    number: "04",
    title: "PDF & Excel Generation",
    description:
      "Automatically generate structured documents, spreadsheets, and business outputs.",
    accent: "bg-brand",
  },
  {
    number: "05",
    title: "Email Workflows",
    description:
      "Automate recurring email notifications, reports, and business communication workflows.",
    accent: "bg-accent",
  },
  {
    number: "06",
    title: "API Automation",
    description:
      "Connect systems and automate data exchange through APIs and integrations.",
    accent: "bg-cyan-500",
  },
  {
    number: "07",
    title: "Scheduled Tasks",
    description: "Run recurring processes automatically on a defined schedule.",
    accent: "bg-brand",
  },
  {
    number: "08",
    title: "Business Workflows",
    description:
      "Replace manual multi-step processes with reliable automated workflows.",
    accent: "bg-accent",
  },
];

const benefits = [
  {
    number: "01",
    title: "Save Time",
    description: "Reduce the time spent on repetitive manual tasks.",
  },
  {
    number: "02",
    title: "Reduce Errors",
    description: "Create consistent processes with less manual intervention.",
  },
  {
    number: "03",
    title: "Scale Processes",
    description:
      "Handle increasing workloads without increasing repetitive effort.",
  },
  {
    number: "04",
    title: "Improve Operations",
    description: "Give teams more time to focus on meaningful business work.",
  },
];

const Automation = () => {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-border bg-[#F1F5FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12 lg:py-20">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
              AUTOMATION
            </p>

            <div className="mt-5 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              {/* LEFT */}
              <div>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
                  Automate Repetitive Work.
                  <br />
                  <span className="text-brand">Focus on What Matters.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-muted lg:text-base">
                  We automate repetitive business processes, data operations,
                  reporting, and workflows to reduce manual effort and improve
                  operational efficiency.
                </p>

                <div className="mt-8">
                  <Button href="/contact">
                    Discuss Your Workflow
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
                      src="/images/services/automation.png"
                      alt="Business process automation and workflow automation"
                      className="h-[280px] w-full object-contain transition-transform duration-700 group-hover:scale-105 lg:h-[340px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  WHAT WE AUTOMATE
                </p>

                <h2 className="mt-4 max-w-md text-2xl font-semibold leading-tight tracking-tight text-ink lg:text-3xl">
                  Practical automation for everyday business processes.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-6 text-muted">
                  From repetitive spreadsheet work to connected business
                  workflows, we build automation around how your teams already
                  operate.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {solutions.map((solution) => (
                  <div
                    key={solution.number}
                    className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold tracking-[0.15em] text-subtle">
                        {solution.number}
                      </span>

                      <span
                        className={`h-2 w-2 rounded-full ${solution.accent}`}
                      />
                    </div>

                    <h3 className="mt-6 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-brand">
                      {solution.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted">
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-border bg-[#F5F7FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                WHY AUTOMATE
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                Less manual work.
                <span className="text-brand"> More room to grow.</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.number}
                  className="group min-h-[170px] rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-subtle">
                      {benefit.number}
                    </span>

                    <span
                      className={`h-2 w-2 rounded-full ${
                        index % 3 === 0
                          ? "bg-brand"
                          : index % 3 === 1
                            ? "bg-accent"
                            : "bg-cyan-500"
                      }`}
                    />
                  </div>

                  <h3 className="mt-6 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-brand">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {benefit.description}
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
                  STILL DOING IT MANUALLY?
                </p>

                <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight lg:text-4xl">
                  Let&apos;s automate it.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[#CBD5E1]">
                  Tell us about the repetitive process slowing your team down,
                  and we&apos;ll explore how it can be automated.
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

export default Automation;
