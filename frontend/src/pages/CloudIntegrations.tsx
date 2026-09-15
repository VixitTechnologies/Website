import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

import {
  MdCloud,
  MdApi,
  MdHub,
  MdPayment,
  MdMessage,
  MdAutoAwesome,
} from "react-icons/md";

const solutions = [
  {
    number: "01",
    title: "Cloud Deployment",
    description:
      "Deploy and configure applications in cloud environments with a focus on reliability and scalability.",
    accent: "bg-brand",
  },
  {
    number: "02",
    title: "REST APIs",
    description:
      "Build APIs that allow applications and business systems to communicate securely and efficiently.",
    accent: "bg-accent",
  },
  {
    number: "03",
    title: "Third-Party Integrations",
    description:
      "Connect your applications with the external platforms and services your business depends on.",
    accent: "bg-cyan-500",
  },
  {
    number: "04",
    title: "Payment Integration",
    description:
      "Integrate payment providers into websites and applications to support online transactions.",
    accent: "bg-brand",
  },
  {
    number: "05",
    title: "WhatsApp Integration",
    description:
      "Connect business workflows with WhatsApp-based communication and notifications.",
    accent: "bg-accent",
  },
  {
    number: "06",
    title: "AI API Integration",
    description:
      "Integrate AI capabilities into applications through external AI APIs where they provide practical value.",
    accent: "bg-cyan-500",
  },
];

const technologies = [
  {
    name: "AWS",
    icon: MdCloud,
    color: "#FF9900",
  },
  {
    name: "Azure",
    icon: MdCloud,
    color: "#0078D4",
  },
  {
    name: "REST APIs",
    icon: MdApi,
    color: "#2563EB",
  },
  {
    name: "Third-Party APIs",
    icon: MdHub,
    color: "#7C3AED",
  },
  {
    name: "Payment Gateways",
    icon: MdPayment,
    color: "#0891B2",
  },
  {
    name: "WhatsApp",
    icon: MdMessage,
    color: "#25D366",
  },
  {
    name: "AI APIs",
    icon: MdAutoAwesome,
    color: "#7C3AED",
  },
  {
    name: "Cloud Deployment",
    icon: MdCloud,
    color: "#2563EB",
  },
  {
    name: "API Integration",
    icon: MdApi,
    color: "#0891B2",
  },
  {
    name: "System Integration",
    icon: MdHub,
    color: "#7C3AED",
  },
];

const CloudIntegrations = () => {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-border bg-[#F1F5FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12 lg:py-20">
            <div className="max-w-4xl">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                CLOUD & INTEGRATIONS
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
                Connect Your Systems.
                <br />
                <span className="text-brand">Run Your Business Anywhere.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-muted lg:text-base">
                We help businesses deploy applications, connect different
                systems, and integrate the tools they already use through
                reliable APIs and cloud services.
              </p>

              <div className="mt-8">
                <Button href="/contact">
                  Discuss Your Integration
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Button>
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
                  WHAT WE DO
                </p>

                <h2 className="mt-4 max-w-md text-2xl font-semibold leading-tight tracking-tight text-ink lg:text-3xl">
                  Infrastructure and integrations that keep systems connected.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-6 text-muted">
                  We connect applications, cloud environments, payment
                  providers, communication tools, and external services into
                  reliable business workflows.
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

        {/* Technology */}
        <section className="border-y border-border bg-[#F5F7FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                TECHNOLOGY
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                Tools for building
                <span className="text-brand"> connected systems.</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-muted">
                We choose cloud platforms, APIs, and integrations based on the
                requirements of the business and the systems involved.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.name}
                    className="group flex min-h-[100px] items-center justify-between rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className="text-2xl transition-transform duration-300 group-hover:scale-110"
                        color={technology.color}
                      />

                      <span className="text-sm font-medium text-ink transition-colors duration-300 group-hover:text-brand">
                        {technology.name}
                      </span>
                    </div>

                    <span className="h-2 w-2 rounded-full bg-brand transition-transform duration-300 group-hover:scale-125" />
                  </div>
                );
              })}
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
                  NEED YOUR SYSTEMS CONNECTED?
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight lg:text-4xl">
                  Let&apos;s make your technology work together.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[#CBD5E1]">
                  Tell us what systems or services you need to connect, and
                  we&apos;ll explore the right integration approach.
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

export default CloudIntegrations;
