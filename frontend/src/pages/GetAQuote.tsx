import { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import type { CSSProperties } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GetAQuote = () => {
  const [selectedService, setSelectedService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [phone, setPhone] = useState("");

  const inputStyles =
    "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-all duration-200 placeholder:text-subtle focus:border-brand focus:ring-2 focus:ring-brand/10";

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="border-b border-border bg-[#F1F5FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-12 lg:py-20">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
              GET A QUOTE
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
              Let's Bring Your
              <span className="text-brand"> Project to Life.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted lg:text-base">
              Already have a project in mind? Share your requirements, expected
              timeline, and project details. Our team will review your scope and
              get in touch with you.
            </p>
          </div>
        </section>

        {/* QUOTE CONTENT */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* INFORMATION */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  PROJECT ENQUIRY
                </p>

                <h2 className="mt-4 max-w-md text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                  Tell us about your project.
                </h2>

                <div className="mt-6 h-1 w-12 rounded-full bg-brand" />

                <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
                  Have a defined project scope and clear requirements? Share the
                  details with us so we can understand your expectations and
                  discuss the next steps.
                </p>

                <div className="mt-10 rounded-2xl border border-border bg-surface p-5">
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-subtle">
                    NOT SURE ABOUT YOUR REQUIREMENTS?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    If you are still exploring ideas or need guidance, start a
                    conversation with our team instead.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-4 inline-block text-sm font-semibold text-brand transition-colors hover:text-accent"
                  >
                    Start a Conversation →
                  </Link>
                </div>
              </div>

              {/* FORM */}
              <form
                className="rounded-3xl border border-border bg-surface p-6 shadow-sm lg:col-span-2 lg:p-8"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* PERSONAL DETAILS */}
                <p className="text-xs font-semibold tracking-[0.12em] text-ink">
                  YOUR DETAILS
                </p>

                <div className="mt-5 grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-ink"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className={inputStyles}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="text-xs font-medium text-ink"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Company name"
                      className={inputStyles}
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-ink"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className={inputStyles}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs font-medium text-ink"
                    >
                      Phone
                    </label>
                    <PhoneInput
                      defaultCountry="in"
                      preferredCountries={["in", "us", "gb", "ae"]}
                      value={phone}
                      onChange={setPhone}
                      name="phone"
                      placeholder="Phone number"
                      className="mt-2 w-full"
                      style={
                        {
                          width: "100%",
                          "--react-international-phone-height": "46px",
                          "--react-international-phone-border-radius": "12px",
                          "--react-international-phone-border-color": "#e2e8f0",
                          "--react-international-phone-font-size": "14px",
                        } as CSSProperties
                      }
                      inputClassName="!w-full !text-sm !text-ink"
                    />
                  </div>
                </div>

                {/* PROJECT DETAILS */}
                <div className="mt-8 border-t border-border pt-7">
                  <p className="text-xs font-semibold tracking-[0.12em] text-ink">
                    PROJECT DETAILS
                  </p>

                  <div className="mt-5">
                    <label
                      htmlFor="projectTitle"
                      className="text-xs font-medium text-ink"
                    >
                      Project Title
                    </label>
                    <input
                      id="projectTitle"
                      type="text"
                      placeholder="Give your project a name"
                      className={inputStyles}
                    />
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="service"
                      className="text-xs font-medium text-ink"
                    >
                      Service Required
                    </label>

                    <select
                      id="service"
                      value={selectedService}
                      onChange={(e) => {
                        setSelectedService(e.target.value);
                        setOtherService("");
                      }}
                      className={inputStyles}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Web Development</option>
                      <option>Custom Software</option>
                      <option>Data & BI</option>
                      <option>Automation</option>
                      <option>Cloud & Integrations</option>
                      <option>Support & Maintenance</option>
                      <option>Others</option>
                    </select>

                    {selectedService === "Others" && (
                      <div className="mt-4">
                        <label
                          htmlFor="otherService"
                          className="text-xs font-medium text-ink"
                        >
                          Please specify your requirement
                        </label>
                        <input
                          id="otherService"
                          type="text"
                          value={otherService}
                          onChange={(e) => setOtherService(e.target.value)}
                          placeholder="Tell us what service you need"
                          className={inputStyles}
                        />
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="requirements"
                      className="text-xs font-medium text-ink"
                    >
                      Project Requirements & Scope
                    </label>
                    <textarea
                      id="requirements"
                      rows={6}
                      placeholder="Describe the features, functionality, integrations, and other requirements of your project..."
                      className={`${inputStyles} resize-none`}
                    />
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="timeline"
                      className="text-xs font-medium text-ink"
                    >
                      Expected Timeline
                    </label>
                    <select
                      id="timeline"
                      defaultValue=""
                      className={inputStyles}
                    >
                      <option value="" disabled>
                        Select your expected timeline
                      </option>
                      <option>Immediately</option>
                      <option>Within 1 month</option>
                      <option>1–3 months</option>
                      <option>3+ months</option>
                      <option>Flexible</option>
                    </select>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="additionalDetails"
                      className="text-xs font-medium text-ink"
                    >
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="additionalDetails"
                      rows={3}
                      placeholder="Any additional information you'd like us to know..."
                      className={`${inputStyles} resize-none`}
                    />
                  </div>
                </div>

                <div className="mt-7">
                  <button
                    type="submit"
                    className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-accent hover:shadow-lg"
                  >
                    Submit Project Enquiry →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-[#EEF4FF]">
          <div className="mx-auto max-w-[1400px] px-8 py-14 lg:px-12">
            <div className="flex flex-col gap-5 rounded-3xl border border-white/80 bg-white/60 p-7 shadow-sm backdrop-blur-xl md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  VIXIT TECHNOLOGIES
                </p>

                <p className="mt-2 text-sm text-muted">
                  Your Technology Partner for Web, Data & Automation.
                </p>
              </div>

              <Link
                to="/work"
                className="text-sm font-medium text-brand transition-colors hover:text-accent"
              >
                Explore What We Build →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GetAQuote;
