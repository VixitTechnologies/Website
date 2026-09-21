import { Link } from "react-router-dom";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-[1400px] px-8 py-14 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company */}
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="text-base font-bold tracking-tight">
              VIXIT
              <span className="ml-1 font-normal text-slate-400">
                TECHNOLOGIES
              </span>
            </p>

            <p className="mt-4 max-w-sm text-xs leading-5 text-slate-400">
              Your Technology Partner for Web, Data & Automation. We build
              practical digital solutions around your business.
            </p>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vixit-technologies-66261b23a/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-[#60A5FA]"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-400">
              SERVICES
            </p>

            <div className="mt-4 space-y-3 text-xs text-slate-300">
              <Link
                to="/services/web-development"
                className="block transition-colors hover:text-[#60A5FA]"
              >
                Web Development
              </Link>

              <Link
                to="/services/custom-software"
                className="block transition-colors hover:text-[#60A5FA]"
              >
                Custom Software
              </Link>

              <Link
                to="/services/data-bi"
                className="block transition-colors hover:text-[#60A5FA]"
              >
                Data & BI
              </Link>

              <Link
                to="/services/automation"
                className="block transition-colors hover:text-[#60A5FA]"
              >
                Automation
              </Link>

              <Link
                to="/services/cloud-integrations"
                className="block transition-colors hover:text-[#60A5FA]"
              >
                Cloud & Integrations
              </Link>

              <Link
                to="/services/support-maintenance"
                className="block transition-colors hover:text-[#60A5FA]"
              >
                Support & Maintenance
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-400">
              COMPANY
            </p>

            <div className="mt-4 space-y-3 text-xs text-slate-300">
              <Link
                to="/work"
                className="block transition-colors hover:text-[#60A5FA]"
              >
                What We Build
              </Link>

              <Link
                to="/industries"
                className="block transition-colors hover:text-[#60A5FA]"
              >
                Industries
              </Link>

              <Link
                to="/about"
                className="block transition-colors hover:text-[#60A5FA]"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="block transition-colors hover:text-[#60A5FA]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-400">
              CONTACT
            </p>

            <div className="mt-4 space-y-4 text-xs text-slate-300">
              {/* Email */}
              <a
                href="mailto:vixittechnologies@gmail.com"
                className="flex items-start gap-2.5 transition-colors hover:text-[#60A5FA]"
              >
                <MdEmail className="mt-0.5 shrink-0 text-base" />
                <span className="break-all">vixittechnologies@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-start gap-2.5 transition-colors hover:text-[#60A5FA]"
              >
                <MdPhone className="mt-0.5 shrink-0 text-base" />
                <span>+91 XXXXX XXXXX</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-2.5 text-slate-400">
                <MdLocationOn className="mt-0.5 shrink-0 text-base" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2022–{new Date().getFullYear()} Vixit Technologies Pvt. Ltd. All
            rights reserved.
          </p>

          <p>WEB • DATA • AUTOMATION</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
