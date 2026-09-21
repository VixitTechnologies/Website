import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import {
  MdBarChart,
  MdStorage,
  MdTransform,
  MdTableChart,
  MdDashboard,
} from "react-icons/md";

import { SiPython } from "react-icons/si";

const DataBI = () => {
  const solutions = [
    {
      number: "01",
      title: "Power BI Dashboards",
      description:
        "Interactive dashboards that make important business metrics easier to understand.",
      accent: "bg-brand",
    },
    {
      number: "02",
      title: "Business Reports",
      description:
        "Structured reports designed around the information your teams need to monitor.",
      accent: "bg-accent",
    },
    {
      number: "03",
      title: "SQL to Power BI",
      description:
        "Connect databases and transform operational data into business-ready dashboards.",
      accent: "bg-cyan-500",
    },
    {
      number: "04",
      title: "Data Cleaning & Transformation",
      description:
        "Prepare inconsistent or raw data for reliable analysis and reporting.",
      accent: "bg-brand",
    },
    {
      number: "05",
      title: "Power Query",
      description:
        "Automate data preparation and create repeatable transformation workflows.",
      accent: "bg-accent",
    },
    {
      number: "06",
      title: "DAX",
      description:
        "Create calculated measures and business logic for meaningful Power BI analysis.",
      accent: "bg-cyan-500",
    },
    {
      number: "07",
      title: "Excel Automation",
      description:
        "Reduce repetitive spreadsheet work with structured and automated processes.",
      accent: "bg-brand",
    },
    {
      number: "08",
      title: "KPI Dashboards",
      description:
        "Track the metrics that matter most to your business through focused visual reporting.",
      accent: "bg-accent",
    },
  ];

  const technologies = [
    {
      name: "Power BI",
      icon: MdBarChart,
      color: "#F2C811",
    },
    {
      name: "Power Query",
      icon: MdTransform,
      color: "#742774",
    },
    {
      name: "DAX",
      icon: MdBarChart,
      color: "#F2C811",
    },
    {
      name: "SQL",
      icon: MdStorage,
      color: "#4479A1",
    },
    {
      name: "Excel",
      icon: MdTableChart,
      color: "#217346",
    },
    {
      name: "Python",
      icon: SiPython,
      color: "#3776AB",
    },
    {
      name: "Data Transformation",
      icon: MdTransform,
      color: "#2563EB",
    },
    {
      name: "KPI Reporting",
      icon: MdBarChart,
      color: "#7C3AED",
    },
    {
      name: "Interactive Reports",
      icon: MdDashboard,
      color: "#06B6D4",
    },
    {
      name: "Dashboard Maintenance",
      icon: MdDashboard,
      color: "#2563EB",
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
              DATA & BI
            </p>

            <div className="mt-5 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              {/* LEFT */}
              <div>
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
                  Turn Business Data Into
                  <span className="text-brand"> Clear Decisions.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-muted lg:text-base">
                  We transform business data into clear reports, interactive
                  dashboards, and useful insights that help teams understand
                  performance and make better decisions.
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
                <div className="absolute h-64 w-64 rounded-full bg-brand/10 blur-3xl" />

                {/* Floating card */}
                <div className="group relative w-full max-w-[520px] rotate-1 rounded-[28px] border border-white/80 bg-white/60 p-3 shadow-[0_30px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-500 hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(37,99,235,0.20)]">
                  <div className="rounded-[20px]">
                    <img
                      src="/images/services/data_and_bi.png"
                      alt="Data analytics, business intelligence and dashboards"
                      className="h-[280px] w-full object-contain transition-transform duration-700 group-hover:scale-105 lg:h-[340px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              {/* LEFT */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  WHAT WE DO
                </p>

                <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-ink lg:text-4xl">
                  From raw data to
                  <span className="text-brand">
                    {" "}
                    useful business intelligence.
                  </span>
                </h2>

                <div className="mt-7 flex items-center gap-2">
                  <div className="h-1 w-12 rounded-full bg-brand" />
                  <div className="h-1 w-5 rounded-full bg-accent" />
                </div>

                <p className="mt-6 max-w-md text-sm leading-7 text-muted">
                  We help businesses organize, transform, and visualize their
                  data so important information is easier to understand and use.
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

        {/* TECHNOLOGY */}
        <section className="border-y border-border bg-[#F5F7FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  TECHNOLOGY
                </p>

                <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-ink lg:text-4xl">
                  Tools that help turn
                  <span className="text-brand"> data into clarity.</span>
                </h2>

                <div className="mt-7 flex items-center gap-2">
                  <div className="h-1 w-12 rounded-full bg-brand" />
                  <div className="h-1 w-5 rounded-full bg-accent" />
                </div>
              </div>

              <p className="max-w-md text-sm leading-6 text-muted lg:justify-self-end">
                We use the right combination of analytics, reporting, and data
                tools based on the requirements of each solution.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {technologies.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="group flex min-h-[90px] items-center justify-between rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className="text-2xl transition-transform duration-300 group-hover:scale-110"
                        color={item.color}
                      />

                      <span className="text-sm font-medium text-ink transition-colors duration-300 group-hover:text-brand">
                        {item.name}
                      </span>
                    </div>

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
                );
              })}
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
                  HAVE DATA TO MAKE SENSE OF?
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight lg:text-4xl">
                  Let&apos;s turn your data into
                  <span className="text-[#93C5FD]"> something useful.</span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[#CBD5E1]">
                  Tell us what data challenge you&apos;re facing and let&apos;s
                  explore the right reporting or analytics solution.
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

export default DataBI;
