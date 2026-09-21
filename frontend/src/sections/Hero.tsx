import { useEffect, useState } from "react";
import Button from "../components/Button";
// @ts-ignore
import CapabilityVisual from "../components/CapabilityVisual";

const Hero = () => {
  const headlineWords = ["Business.", "Workflow.", "Growth.", "Goals."];

  const services = [
    {
      number: "01",
      title: "WEB DEVELOPMENT",
      description: "Websites and digital experiences built for your business.",
    },
    {
      number: "02",
      title: "CUSTOM SOFTWARE",
      description: "Business applications designed around your workflow.",
    },
    {
      number: "03",
      title: "DATA & BI",
      description: "Turn business data into clear and useful decisions.",
    },
    {
      number: "04",
      title: "AUTOMATION",
      description: "Reduce repetitive work and improve daily operations.",
    },
    {
      number: "05",
      title: "CLOUD & INTEGRATIONS",
      description:
        "Connect your systems and keep your business running anywhere.",
    },
    {
      number: "06",
      title: "SUPPORT & MAINTENANCE",
      description:
        "Keep your technology reliable, updated, and performing well.",
    },
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const currentWord = headlineWords[wordIndex];

    let delay = isDeleting ? 130 : 180;

    if (!isDeleting && displayWord === currentWord) {
      delay = 2200;
    }

    if (isDeleting && displayWord === "") {
      delay = 600;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, displayWord.length + 1);

        setDisplayWord(nextText);

        if (nextText === currentWord) {
          setIsDeleting(true);
        }
      } else {
        const nextText = currentWord.slice(0, displayWord.length - 1);

        setDisplayWord(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((current) => (current + 1) % headlineWords.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayWord, isDeleting, wordIndex]);

  // Rotating service
  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((current) => (current + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentService = services[serviceIndex];

  return (
    <section className="border-b border-[#E2E8F0] bg-[#F1F5FF]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-8 lg:py-14">
        <div className="grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
          {/* LEFT */}
          <div className="flex min-h-[440px] flex-col justify-center rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm lg:p-12">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />

              <p className="text-[10px] font-semibold tracking-[0.18em] text-muted">
                WEB • DATA • AUTOMATION
              </p>
            </div>

            <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.15] tracking-tight text-ink lg:text-[48px]">
              Technology Built Around Your
              <span className="block text-brand">
                {displayWord}
                <span className="ml-0.5 inline-block h-[1em] w-px animate-pulse bg-brand align-[-0.1em]" />
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-muted">
              We help businesses design, build, and improve digital solutions
              across web, software, data, and automation — with technology
              aligned to their operations and long-term goals.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact">
                <span>Start a Project</span>
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Button>

              <Button href="/work" variant="secondary">
                <span>View Our Work</span>
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative min-h-[440px] overflow-hidden rounded-2xl bg-[#111827] p-7 text-white shadow-sm lg:p-8">
            {/* Decorative shapes */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />

            <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-brand/20 blur-2xl" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-400">
                  VIXIT TECHNOLOGIES
                </p>

                <span className="text-[10px] text-slate-500">
                  {currentService.number} / 06
                </span>
              </div>

              {/* Service Info */}
              <div className="mt-8">
                <p className="text-[10px] tracking-[0.18em] text-slate-400">
                  CURRENT CAPABILITY
                </p>

                <div key={currentService.number} className="mt-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {currentService.title}
                  </h2>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                    {currentService.description}
                  </p>
                </div>
              </div>

              {/* Capability Visual */}
              <div className="relative mt-6 flex flex-1 items-center justify-center">
                <CapabilityVisual serviceIndex={serviceIndex} />
              </div>

              {/* Bottom */}
              <div className="mt-5">
                {/* Indicators */}
                <div className="flex gap-2">
                  {services.map((service, index) => (
                    <button
                      key={service.number}
                      onClick={() => setServiceIndex(index)}
                      aria-label={`Show ${service.title}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === serviceIndex
                          ? "w-8 bg-brand"
                          : "w-3 bg-slate-700 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>

                {/* Status */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />

                    <span className="text-[9px] tracking-[0.18em] text-slate-400">
                      SYSTEM ONLINE
                    </span>
                  </div>

                  <span className="text-[9px] tracking-[0.15em] text-slate-600">
                    VIXIT / DIGITAL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
