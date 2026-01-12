"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Toast from "../Toast";

const Footer_01 = () => {
  const { scrollToSection } = useSmoothScroll();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
    isVisible: boolean;
  }>({
    message: "",
    type: "success",
    isVisible: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast({ message: "", type: "success", isVisible: false });

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const form = e.currentTarget;

    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      setToast({
        message:
          "Form submission service not configured. Please contact support.",
        type: "error",
        isVisible: true,
      });
      setIsSubmitting(false);
      return;
    }

    const timestamp = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    const data = {
      name: name,
      email: email,
      message: message,
      timestamp: timestamp,
    };

    try {
      const scriptUrl = GOOGLE_SCRIPT_URL.endsWith("/exec")
        ? GOOGLE_SCRIPT_URL
        : `${GOOGLE_SCRIPT_URL.replace(/\/$/, "")}/exec`;

      console.log("Submitting to Google Sheets:", scriptUrl);
      console.log("Form data:", data);

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(
        "Form submitted to Google Sheets (no-cors mode - response not readable)"
      );

      setToast({
        message: "Message sent successfully! We'll get back to you soon.",
        type: "success",
        isVisible: true,
      });
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setToast({
        message:
          "Sorry, there was an error sending your message. Please try again.",
        type: "error",
        isVisible: true,
      });
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  return (
    <footer className="relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]">
      <div className="global-container max-w-[1332px] mx-auto">
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
        <div
          id="contact-section"
          className="grid grid-cols-1 gap-10 py-[60px] md:grid-cols-2 md:text-left xl:gap-20 xl:py-[100px]"
        >
          <div className="flex flex-col gap-y-6">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-black lg:text-4xl">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600">
                Have a question or want to discuss a pilot program? Send us a
                message.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="footer-contact-name"
                  className="text-lg font-bold leading-[1.6]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="footer-contact-name"
                  placeholder="Your Name"
                  className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
                  required={true}
                />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="footer-contact-email"
                  className="text-lg font-bold leading-[1.6]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="footer-contact-email"
                  placeholder="your.email@example.com"
                  className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
                  required={true}
                />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="footer-contact-message"
                  className="text-lg font-bold leading-[1.6]"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="footer-contact-message"
                  className="min-h-[120px] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed"
                  placeholder="Tell us about your project or question..."
                  required={true}
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button rounded-[50px] border-2 border-black bg-black py-4 px-8 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-y-6">
              <h4 className="text-[21px] font-semibold capitalize text-black">
                Navigate
              </h4>
              <ul className="flex flex-col gap-y-[10px] capitalize">
                <li>
                  <button
                    onClick={() => scrollToSection("#how-it-works")}
                    className="transition-all duration-300 ease-in-out hover:text-colorOrangyRed hover:translate-x-1 relative group text-left"
                  >
                    How It Works
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-colorOrangyRed transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#missions-section")}
                    className="transition-all duration-300 ease-in-out hover:text-colorOrangyRed hover:translate-x-1 relative group text-left"
                  >
                    Applications
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-colorOrangyRed transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      scrollToSection("#inside-smartnav-ai-labs-section")
                    }
                    className="transition-all duration-300 ease-in-out hover:text-colorOrangyRed hover:translate-x-1 relative group text-left"
                  >
                    AI Labs
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-colorOrangyRed transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-6">
              {/* <h4 className="text-[21px] font-semibold capitalize text-black">
                Legal
              </h4>
              <ul className="flex flex-col gap-y-[10px] capitalize">
                <li>
                  <Link
                    href="#"
                    className="transition-all duration-300 ease-in-out hover:text-colorOrangyRed hover:translate-x-1 relative group"
                  >
                    Privacy Policy
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-colorOrangyRed transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-all duration-300 ease-in-out hover:text-colorOrangyRed hover:translate-x-1 relative group"
                  >
                    Terms of Service
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-colorOrangyRed transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
        <div className="py-9 text-center">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <p>© {new Date().getFullYear()} Smart Navigation LLC. All Rights Reserved.</p>
            <Link
              href="https://www.linkedin.com/company/smart-navigation"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 hover:shadow-lg"
            >
              <Image
                src="/assets/img_placeholder/th-1/linkedin-icon-white.svg"
                alt="linkedin"
                width={14}
                height={14}
                className="opacity-100 group-hover:opacity-0"
              />
              <Image
                src="/assets/img_placeholder/th-1/linkedin-icon-black.svg"
                alt="linkedin"
                width={14}
                height={14}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]"></div>
      <div className="orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]"></div>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
    </footer>
  );
};

export default Footer_01;
