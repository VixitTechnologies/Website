import { useState } from "react";
import { Link } from "react-router-dom";

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

          {/* Services */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-[#475569] transition-colors hover:text-brand">
              Services
              <span className="text-xs">⌄</span>
            </button>

            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-2 shadow-xl backdrop-blur-xl">
                <Link
                  to="/services/web-development"
                  className="block rounded-xl px-4 py-3 text-sm text-[#475569] transition-colors hover:bg-[#F5F3FF] hover:text-brand"
                >
                  Web Development
                </Link>

                <Link
                  to="/services/custom-software"
                  className="block rounded-xl px-4 py-3 text-sm text-[#475569] transition-colors hover:bg-[#F5F3FF] hover:text-brand"
                >
                  Custom Software
                </Link>

                <Link
                  to="/services/data-bi"
                  className="block rounded-xl px-4 py-3 text-sm text-[#475569] transition-colors hover:bg-[#F5F3FF] hover:text-brand"
                >
                  Data & BI
                </Link>

                <Link
                  to="/services/automation"
                  className="block rounded-xl px-4 py-3 text-sm text-[#475569] transition-colors hover:bg-[#F5F3FF] hover:text-brand"
                >
                  Automation
                </Link>

                <Link
                  to="/services/cloud-integrations"
                  className="block rounded-xl px-4 py-3 text-sm text-[#475569] transition-colors hover:bg-[#F5F3FF] hover:text-brand"
                >
                  Cloud & Integrations
                </Link>

                <Link
                  to="/services/support-maintenance"
                  className="block rounded-xl px-4 py-3 text-sm text-[#475569] transition-colors hover:bg-[#F5F3FF] hover:text-brand"
                >
                  Support & Maintenance
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/work"
            className="text-sm font-medium text-[#475569] transition-colors hover:text-brand"
          >
            Our Work
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
        <div className="mx-4 rounded-2xl border border-white/70 bg-white/85 px-6 py-5 shadow-xl backdrop-blur-xl md:hidden">
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

            <Link
              to="/services/web-development"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-[#475569]"
            >
              Web Development
            </Link>

            <Link
              to="/services/custom-software"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-[#475569]"
            >
              Custom Software
            </Link>

            <Link
              to="/services/data-bi"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-[#475569]"
            >
              Data & BI
            </Link>

            <Link
              to="/services/automation"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-[#475569]"
            >
              Automation
            </Link>

            <Link
              to="/services/cloud-integrations"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-[#475569]"
            >
              Cloud & Integrations
            </Link>

            <Link
              to="/services/support-maintenance"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-[#475569]"
            >
              Support & Maintenance
            </Link>

            <Link
              to="/work"
              onClick={() => setMenuOpen(false)}
              className="border-t border-border py-3 text-sm text-[#475569]"
            >
              Our Work
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
