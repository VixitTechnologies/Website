import { Link } from "react-router-dom";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import type { CSSProperties } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdPhone, MdEmail } from "react-icons/md";

const Contact = () => {
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
              CONTACT
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
              Tell Us What
              <span className="text-brand"> You&apos;re Building.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted lg:text-base">
              Have a project, business problem, or idea in mind? Tell us a
              little about it and we&apos;ll get back to you to understand how
              we can help.
            </p>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-8 py-20 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* INFORMATION */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  START A CONVERSATION
                </p>

                <h2 className="mt-4 max-w-md text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                  Let&apos;s understand your requirements.
                </h2>

                <div className="mt-6 h-1 w-12 rounded-full bg-brand" />

                <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
                  Have an early idea, a business challenge, or need guidance?
                  Start a conversation with us. We&apos;ll help you explore
                  possible solutions and understand your requirements.
                </p>

                <div className="mt-10 space-y-4">
                  {/* EMAIL */}
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
                    <MdEmail className="mt-0.5 text-lg text-brand" />

                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.15em] text-subtle">
                        EMAIL
                      </p>

                      <a
                        href="mailto:vixittechnologies@gmail.com"
                        className="mt-2 block text-sm font-medium text-ink transition-colors hover:text-brand"
                      >
                        vixittechnologies@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
                    <MdPhone className="mt-0.5 text-lg text-brand" />

                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.15em] text-subtle">
                        PHONE
                      </p>

                      <a
                        href="tel:+91XXXXXXXXXX"
                        className="mt-2 block text-sm font-medium text-ink transition-colors hover:text-brand"
                      >
                        +91 XXXXX XXXXX
                      </a>
                    </div>
                  </div>

                  {/* RESPONSE */}
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />

                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.15em] text-subtle">
                        RESPONSE
                      </p>

                      <p className="mt-2 text-sm leading-6 text-muted">
                        We&apos;ll review your requirements and get in touch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <form className="rounded-3xl border border-border bg-surface p-6 shadow-sm lg:col-span-2 lg:p-8">
                <div className="grid gap-6 md:grid-cols-2">
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

                {/* SERVICE REQUIRED */}
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

                {/* TIMELINE */}
                <div className="mt-6">
                  <label
                    htmlFor="timeline"
                    className="text-xs font-medium text-ink"
                  >
                    Timeline
                  </label>

                  <select id="timeline" defaultValue="" className={inputStyles}>
                    <option value="" disabled>
                      When do you want to start?
                    </option>
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>1–3 months</option>
                    <option>3+ months</option>
                    <option>Just exploring</option>
                  </select>
                </div>

                {/* PROJECT DESCRIPTION */}
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-ink"
                  >
                    Project Description
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your project, requirements, or business challenge..."
                    className={`${inputStyles} resize-none`}
                  />
                </div>

                <div className="mt-7">
                  <button
                    type="submit"
                    className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-accent hover:shadow-lg"
                  >
                    Send Enquiry →
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
                Explore Our Work →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
