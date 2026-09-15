import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Business websites and digital experiences designed for performance, usability, and growth.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "Custom Software",
    description:
      "Business applications and internal systems built around your processes and operational needs.",
    href: "/services/custom-software",
  },
  {
    number: "03",
    title: "Data & BI",
    description:
      "Dashboards, reporting, and data solutions that turn business information into useful insights.",
    href: "/services/data-bi",
  },
  {
    number: "04",
    title: "Automation",
    description:
      "Automate repetitive processes, reports, and workflows to improve efficiency and reduce manual work.",
    href: "/services/automation",
  },
  {
    number: "05",
    title: "Cloud & Integrations",
    description:
      "Cloud solutions and system integrations that connect your tools, platforms, and business workflows.",
    href: "/services/cloud-integrations",
  },
  {
    number: "06",
    title: "Support & Maintenance",
    description:
      "Ongoing technical support, improvements, and maintenance to keep your systems reliable.",
    href: "/services/support-maintenance",
  },
];

const Services = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-8 py-12 lg:px-12 lg:py-14">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
            OUR SERVICES
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
            Technology Solutions
            <span className="text-brand"> Built Around Your Business.</span>
          </h2>

          <p className="mt-3 text-xs leading-5 text-muted">
            Practical technology solutions built around how your business works.
          </p>
        </div>

        {/* Services Box */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.number}
                to={service.href}
                className="group relative min-h-[150px] border-b border-border p-6 transition-all duration-300 hover:bg-white lg:p-7"
              >
                {/* Number */}
                <span className="text-[10px] font-semibold tracking-wider text-subtle transition-colors duration-300 group-hover:text-brand">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="mt-2 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-brand">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-1 max-w-xs text-[11px] leading-4 text-muted">
                  {service.description}
                </p>

                {/* Arrow */}
                <span className="absolute right-6 top-6 text-sm text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
