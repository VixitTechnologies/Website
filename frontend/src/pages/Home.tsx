import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import Button from "../components/Button";
import Services from "../sections/services";
import { useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiPython,
} from "react-icons/si";

import { FaJava, FaAws } from "react-icons/fa";

import {
  MdBarChart,
  MdStorage,
  MdOutlineApi,
  MdAutoAwesome,
  MdTableChart,
} from "react-icons/md";
import { MdPhone, MdEmail } from "react-icons/md";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business, goals, users, and key challenges before deciding on the right technology.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the solution, scope, technology, timeline, and execution plan around your requirements.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create clear interfaces and user experiences that make the solution simple and practical to use.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Develop the solution, integrate the required systems, and connect everything to your workflow.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "Validate functionality, performance, integrations, and overall quality before delivery.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Deliver the solution and provide the support needed to keep it working as your business grows.",
  },
];

const technologies = {
  "Web Development": [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML", icon: MdOutlineApi, color: "#E34F26" },
    { name: "CSS", icon: MdOutlineApi, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  ],

  "Custom Software": [
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  ],

  "Data & BI": [
    { name: "Power BI", icon: MdBarChart, color: "#F2C811" },
    { name: "SQL", icon: MdStorage, color: "#4479A1" },
    { name: "Power Query", icon: MdTableChart, color: "#742774" },
    { name: "DAX", icon: MdBarChart, color: "#F2C811" },
    { name: "Excel", icon: MdTableChart, color: "#217346" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
  ],

  Automation: [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Excel", icon: MdTableChart, color: "#217346" },
    { name: "Power Query", icon: MdTableChart, color: "#742774" },
    { name: "REST APIs", icon: MdOutlineApi, color: "#2563EB" },
  ],

  "Cloud & Integrations": [
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "REST APIs", icon: MdOutlineApi, color: "#2563EB" },
    { name: "Payment APIs", icon: MdOutlineApi, color: "#7C3AED" },
    { name: "WhatsApp APIs", icon: MdOutlineApi, color: "#25D366" },
    { name: "AI APIs", icon: MdAutoAwesome, color: "#7C3AED" },
  ],

  "Support & Maintenance": [
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
  ],
};

const Home = () => {
  const [activeTechnology, setActiveTechnology] =
    useState<keyof typeof technologies>("Web Development");

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Services />

        {/* VALUE PROPOSITION */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:items-start">
              {/* INTRO */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  WHY VIXIT
                </p>

                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-ink lg:text-3xl">
                  Technology should work
                  <span className="block text-brand">for your business.</span>
                </h2>
              </div>

              {/* POINTS */}
              <div className="grid gap-8 sm:grid-cols-3">
                <div className="group">
                  <div className="mb-5 h-1 w-8 rounded-full bg-brand transition-all duration-300 group-hover:w-14" />

                  <p className="text-[10px] font-semibold tracking-[0.18em] text-brand">
                    01 — BUSINESS-FIRST
                  </p>

                  <h3 className="mt-3 text-sm font-semibold text-ink">
                    Built Around Your Business
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-muted">
                    We understand your business first, then choose the
                    technology that fits your needs.
                  </p>
                </div>

                <div className="group">
                  <div className="mb-5 h-1 w-8 rounded-full bg-accent transition-all duration-300 group-hover:w-14" />

                  <p className="text-[10px] font-semibold tracking-[0.18em] text-accent">
                    02 — CAPABILITIES
                  </p>

                  <h3 className="mt-3 text-sm font-semibold text-ink">
                    From Web to Automation
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-muted">
                    Websites, software, data, integrations, and automation under
                    one technology partner.
                  </p>
                </div>

                <div className="group">
                  <div className="mb-5 h-1 w-8 rounded-full bg-[#06B6D4] transition-all duration-300 group-hover:w-14" />

                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#0891B2]">
                    03 — PARTNERSHIP
                  </p>

                  <h3 className="mt-3 text-sm font-semibold text-ink">
                    Built to Grow With You
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-muted">
                    Practical solutions that can evolve as your business and
                    requirements grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKING PROCESS */}
        <section className="relative z-20 bg-[#EEF4FF]">
          {/* Decorative accent */}
          <div className="absolute -right-24 top-20 h-64 w-64 rounded-full bg-[#DDD6FE] opacity-40 blur-3xl" />

          <div className="relative mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-brand">
                HOW WE WORK
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                From Idea to
                <span className="text-accent"> Working Solution.</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-muted">
                A clear and transparent process that keeps every stage focused
                on your business requirements.
              </p>
            </div>

            <div className="mt-10">
              <div className="relative">
                {/* Line */}
                <div className="absolute left-[7%] right-[7%] top-6 hidden h-px bg-[#BFDBFE] md:block" />

                {/* STEPS */}
                <div className="relative grid gap-8 sm:grid-cols-2 md:grid-cols-6 md:gap-0">
                  {processSteps.map((step, index) => (
                    <div
                      key={step.number}
                      className="group relative z-10 flex flex-col items-center text-center md:px-2"
                    >
                      {/* NUMBER */}
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full bg-white text-xs font-bold shadow-sm ring-4 ring-[#EEF4FF] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 ${
                          index % 2 === 0
                            ? "text-brand group-hover:bg-brand group-hover:text-white"
                            : "text-accent group-hover:bg-accent group-hover:text-white"
                        }`}
                      >
                        {step.number}
                      </div>

                      {/* TITLE */}
                      <h3
                        className={`mt-4 text-xs font-semibold transition-colors duration-300 ${
                          index % 2 === 0
                            ? "text-[#475569] group-hover:text-brand"
                            : "text-[#475569] group-hover:text-accent"
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* HOVER DESCRIPTION */}
                      <div className="pointer-events-none absolute left-1/2 top-[78px] z-50 w-48 -translate-x-1/2 translate-y-2 rounded-xl border border-[#DDE5F0] bg-white p-4 text-left opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-[11px] leading-5 text-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            {/* HEADER */}
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  OUR TECHNOLOGIES
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                  The Tools Behind
                  <span className="text-brand"> What We Build.</span>
                </h2>
              </div>

              <p className="max-w-sm text-xs leading-5 text-muted">
                We select technologies based on the requirements of each
                solution — not simply because they are popular.
              </p>
            </div>

            {/* SERVICE TABS */}
            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 border-b border-border">
              {Object.keys(technologies).map((technology) => (
                <button
                  key={technology}
                  onClick={() =>
                    setActiveTechnology(technology as keyof typeof technologies)
                  }
                  className={`relative pb-4 text-xs font-semibold transition-all duration-300 ${
                    activeTechnology === technology
                      ? "text-brand"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {technology}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ${
                      activeTechnology === technology
                        ? "w-full bg-brand"
                        : "w-0 bg-accent"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* CONTENT */}
            <div className="mt-12 grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
              {/* LEFT */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.18em] text-muted">
                  CURRENT STACK
                </p>

                <h3 className="mt-3 text-xl font-semibold text-ink">
                  {activeTechnology}
                </h3>

                <div className="mt-5 h-1 w-10 rounded-full bg-accent" />
              </div>

              {/* RIGHT */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3">
                {technologies[
                  activeTechnology as keyof typeof technologies
                ].map((technology) => {
                  const Icon = technology.icon;

                  return (
                    <div
                      key={technology.name}
                      className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
                    >
                      {/* LOGO */}
                      <Icon
                        className="text-2xl transition-transform duration-300 group-hover:scale-110"
                        color={technology.color}
                      />

                      {/* NAME */}
                      <span className="text-sm font-medium text-[#475569] transition-colors duration-300 group-hover:text-ink">
                        {technology.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              {/* LEFT */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  CONTACT
                </p>

                <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                  Let's Build Something
                  <span className="text-brand"> That Works.</span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
                  Have a project, business challenge, or idea in mind? Tell us
                  what you need and let's explore the right technology solution.
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

              {/* RIGHT */}
              <div className="border-l border-border pl-6 md:pl-8">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-muted">
                  GET IN TOUCH
                </p>

                <div className="mt-5 space-y-5">
                  {/* EMAIL */}
                  <div className="flex items-start gap-3">
                    <MdEmail className="mt-0.5 text-lg text-brand" />

                    <div>
                      <p className="text-[10px] font-medium tracking-wide text-subtle">
                        EMAIL
                      </p>

                      <a
                        href="mailto:vixittechnologies@gmail.com"
                        className="mt-1 block text-sm font-medium text-ink transition-colors hover:text-brand"
                      >
                        vixittechnologies@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-3">
                    <MdPhone className="mt-0.5 text-lg text-brand" />

                    <div>
                      <p className="text-[10px] font-medium tracking-wide text-subtle">
                        PHONE
                      </p>

                      <a
                        href="tel:+91XXXXXXXXXX"
                        className="mt-1 block text-sm font-medium text-ink transition-colors hover:text-brand"
                      >
                        +91 XXXXX XXXXX
                      </a>
                    </div>
                  </div>

                  {/* RESPONSE */}
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-accent" />

                    <div>
                      <p className="text-[10px] font-medium tracking-wide text-subtle">
                        RESPONSE
                      </p>

                      <p className="mt-1 text-sm text-muted">
                        We'll get back to you to understand your requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#EEF4FF]">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C4B5FD] opacity-40 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-[#93C5FD] opacity-40 blur-3xl" />

          <div className="relative mx-auto max-w-[1400px] px-8 py-16 lg:px-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  HAVE A PROJECT IN MIND?
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                  Let&apos;s build something
                  <span className="text-brand"> useful.</span>
                </h2>

                <p className="mt-3 text-sm leading-6 text-muted">
                  Tell us what you need and let&apos;s explore the right
                  technology solution for your business.
                </p>
              </div>

              <Button href="/contact">
                <span>Start a Project</span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
