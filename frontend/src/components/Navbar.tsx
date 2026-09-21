import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Code2, BarChart3, Workflow, Cloud, Wrench } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Modern websites and digital experiences.",
    href: "/services/web-development",
    icon: Globe,
  },
  {
    title: "Custom Software",
    description: "Applications built around your business.",
    href: "/services/custom-software",
    icon: Code2,
  },
  {
    title: "Data & BI",
    description: "Turn business data into useful insights.",
    href: "/services/data-bi",
    icon: BarChart3,
  },
  {
    title: "Automation",
    description: "Simplify workflows and reduce manual work.",
    href: "/services/automation",
    icon: Workflow,
  },
  {
    title: "Cloud & Integrations",
    description: "Connect platforms, tools, and systems.",
    href: "/services/cloud-integrations",
    icon: Cloud,
  },
  {
    title: "Support & Maintenance",
    description: "Keep your digital systems reliable.",
    href: "/services/support-maintenance",
    icon: Wrench,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F1F5FF]/80 px-4 pt-4 backdrop-blur-sm md:px-6 md:pt-5">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between rounded-full border border-white/80 bg-white/35 px-5 shadow-[0_8px_35px_rgba(148,163,184,0.18),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-2xl md:px-6">
        {/* Logo */}
        <Link to="/" className="text-base font-bold tracking-tight text-ink">
          VIXIT
          <span className="ml-1 font-normal text-muted">TECHNOLOGIES</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-[#475569] transition-colors hover:text-brand"
          >
            Home
          </Link>

          {/* Services Mega Menu */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-[#475569] transition-colors hover:text-brand">
              Services
              <span className="text-xs">⌄</span>
            </button>

            <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-2 rounded-2xl border border-border bg-white p-3 shadow-2xl">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.title}
                      to={service.href}
                      className="group/item flex gap-3 rounded-xl bg-white p-4 transition-all duration-200 hover:bg-white"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF4FF] text-brand transition-colors group-hover/item:bg-brand group-hover/item:text-white">
                        <Icon size={19} strokeWidth={1.8} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-ink transition-colors group-hover/item:text-brand">
                          {service.title}
                        </h3>

                        <p className="mt-1 text-[11px] leading-5 text-muted">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link
            to="/work"
            className="text-sm font-medium text-[#475569] transition-colors hover:text-brand"
          >
            What We Build
          </Link>

          <Link
            to="/industries"
            className="text-sm font-medium text-[#475569] transition-colors hover:text-brand"
          >
            Industries
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-[#475569] transition-colors hover:text-brand"
          >
            About
          </Link>
        </nav>

        {/* Get a Quote */}
        <Link
          to="/contact"
          className="hidden rounded-full border border-brand/20 bg-brand px-5 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-accent hover:shadow-lg md:block"
        >
          Get a Quote →
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full border border-white/60 bg-white/60 px-4 py-2 text-xl text-ink shadow-sm backdrop-blur-xl md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mx-4 rounded-2xl border border-white/70 bg-white/90 px-6 py-5 shadow-xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="border-b border-border py-3 text-sm text-[#475569]"
            >
              Home
            </Link>

            <p className="pt-4 text-[10px] font-semibold tracking-[0.18em] text-muted">
              SERVICES
            </p>

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  to={service.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-3 text-sm text-[#475569]"
                >
                  <Icon size={17} className="text-brand" />
                  {service.title}
                </Link>
              );
            })}

            <Link
              to="/work"
              onClick={() => setMenuOpen(false)}
              className="border-t border-border py-3 text-sm text-[#475569]"
            >
              What We Build
            </Link>

            <Link
              to="/industries"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm text-[#475569]"
            >
              Industries
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm text-[#475569]"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-full bg-brand px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              Get a Quote →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
