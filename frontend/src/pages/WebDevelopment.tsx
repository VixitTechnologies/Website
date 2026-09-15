import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const WebDevelopment = () => {
  const overview = [
    {
      number: "01",
      title: "Brand",
      description:
        "Build credibility and communicate your business clearly to the people you want to reach.",
      accent: "bg-brand",
    },
    {
      number: "02",
      title: "Customer Experience",
      description:
        "Make it easier for visitors to understand your offering, explore your services, and take action.",
      accent: "bg-accent",
    },
    {
      number: "03",
      title: "Sales",
      description:
        "Turn website traffic into enquiries, leads, and customers through a clear digital journey.",
      accent: "bg-cyan-500",
    },
    {
      number: "04",
      title: "Business Tool",
      description:
        "Connect your website with the systems, APIs, and workflows your business already uses.",
      accent: "bg-brand",
    },
  ];

  const solutions = [
    {
      number: "01",
      title: "Corporate Websites",
      description:
        "Professional websites that clearly communicate your company, services, and value to potential customers.",
      accent: "bg-brand",
    },
    {
      number: "02",
      title: "E-commerce",
      description:
        "Online stores designed to showcase products and create a smooth purchasing experience.",
      accent: "bg-accent",
    },
    {
      number: "03",
      title: "Landing Pages",
      description:
        "Focused pages built around a specific product, service, campaign, or business objective.",
      accent: "bg-cyan-500",
    },
    {
      number: "04",
      title: "Booking Platforms",
      description:
        "Web-based booking experiences that make it easier for customers to discover and schedule your services.",
      accent: "bg-brand",
    },
    {
      number: "05",
      title: "Website Redesign",
      description:
        "Modernize an existing website with a clearer structure, improved experience, and responsive design.",
      accent: "bg-accent",
    },
    {
      number: "06",
      title: "Responsive Websites",
      description:
        "Websites designed to provide a consistent experience across desktops, tablets, and mobile devices.",
      accent: "bg-cyan-500",
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
              WEB DEVELOPMENT
            </p>

            <div className="mt-5 grid gap-10 lg:grid-cols-3 lg:items-end">
              <div className="lg:col-span-2">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
                  Websites Built to
                  <span className="text-brand"> Support Your Business.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-muted lg:text-base">
                  We design and develop websites and web applications that help
                  businesses communicate clearly, reach customers, and build
                  better digital experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
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
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              {/* LEFT */}
              <div className="lg:sticky lg:top-28">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  OVERVIEW
                </p>

                <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-ink lg:text-4xl">
                  Your website should do more than
                  <span className="text-brand"> look good.</span>
                </h2>

                <div className="mt-7 flex items-center gap-2">
                  <div className="h-1 w-12 rounded-full bg-brand" />
                  <div className="h-1 w-5 rounded-full bg-accent" />
                </div>

                <p className="mt-6 max-w-md text-sm leading-7 text-muted">
                  A strong website should support your brand, improve customer
                  experience, generate business, and connect with the systems
                  behind your operations.
                </p>
              </div>

              {/* RIGHT */}
              <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
                {overview.map((item) => (
                  <div
                    key={item.number}
                    className="group border-b border-border p-7 last:border-b-0 transition-all duration-300 hover:bg-white"
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className={`h-2 w-2 shrink-0 rounded-full ${item.accent}`}
                      />

                      <span className="text-[10px] font-semibold tracking-wider text-subtle">
                        {item.number}
                      </span>

                      <span className="text-sm font-semibold text-ink">
                        {item.title}
                      </span>

                      <span className="ml-auto text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand">
                        →
                      </span>
                    </div>

                    <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="mt-4 max-w-xl pl-9 text-sm leading-6 text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="border-y border-border bg-[#F5F7FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            {/* HEADER */}
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  WHAT WE BUILD
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-ink lg:text-4xl">
                  Digital experiences built for your
                  <span className="text-brand"> needs.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-muted lg:justify-self-end">
                From business websites to web applications, we create digital
                experiences designed around your customers, processes, and
                business goals.
              </p>
            </div>

            {/* CARDS */}
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution) => (
                <div
                  key={solution.number}
                  className="group min-h-[210px] rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
                    className={`mt-8 h-1 w-10 rounded-full ${solution.accent} transition-all duration-300 group-hover:w-16`}
                  />

                  <h3 className="mt-6 text-base font-semibold text-ink">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-muted">
                    {solution.description}
                  </p>
                </div>
              ))}
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
                  BUILD YOUR NEXT WEBSITE
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight lg:text-4xl">
                  Ready to build a website that
                  <span className="text-[#93C5FD]"> works for you?</span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[#CBD5E1]">
                  Tell us what you&apos;re building and let&apos;s explore the
                  right web solution for your business.
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

export default WebDevelopment;
