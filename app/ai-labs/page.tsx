"use client";

import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Link from "next/link";
import { useState } from "react";

function AILabs() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.smartnav.ai/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "waitlist" }),
      });

      if (!res.ok) throw new Error("Server error");
    } catch (error) {
      // Still show success — don't block UX for a lead capture failure
    }

    setSubmitted(true);
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <Header_01 variant="light" />
      <main className="main-wrapper relative overflow-hidden">
        {/* Breadcrumb */}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">AI Labs</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>AI Labs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="max-w-[1332px] mx-auto">
          <div className="pb-16 pt-10 xl:pb-[100px]">
            <div className="global-container">
              <div className="jos mx-auto max-w-4xl text-center" data-jos_animation="fade-up">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-colorOrangyRed">
                  The Edge AI Platform for Autonomous Machines
                </p>
                <h2 className="mb-6 font-bold">
                  Give Any Machine the Ability to Perceive, Decide, and Act
                </h2>
                <p className="text-lg leading-[1.5] text-gray-600 lg:text-[21px] mb-8">
                  SMARTNAV AI Labs is a development platform for building intelligent
                  autonomy at the edge. Fuse data from any sensor — cameras, LiDAR, thermal,
                  radar, environmental — into AI models that run on-device. Write behavior
                  algorithms that turn perception into real-world action. Deploy to machines
                  operating in the field, starting with autonomous drones.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="#developer-program"
                    className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white transition-all duration-300"
                  >
                    Join the Developer Program
                  </a>
                  <Link
                    href="/"
                    className="button rounded-[50px] border-2 border-black bg-transparent py-4 text-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Learn About ARGUS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Developers Build */}
        <section className="max-w-[1332px] mx-auto">
          <div className="pb-20 xl:pb-[130px]">
            <div className="global-container">
              <div className="jos mb-16 lg:mb-20" data-jos_animation="fade-up">
                <h2 className="mb-4 font-bold text-center">What You Build</h2>
                <p className="mx-auto max-w-3xl text-center text-lg text-gray-600 lg:text-[21px]">
                  Three layers of intelligence. One platform.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Card 1 — Perception Models */}
                <div
                  className="jos rounded-[20px] border border-gray-200 p-8 transition-all duration-300 hover:shadow-[0_8px_120px_rgba(0,0,0,0.1)]"
                  data-jos_animation="fade-up"
                  data-jos_delay="0.1"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-colorOrangyRed">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold tracking-normal">Perception Models</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Build AI models that process any sensor input — RGB and thermal cameras,
                    LiDAR point clouds, radar returns, gas concentration, barometric patterns,
                    acoustic signatures. Single-sensor or multi-sensor fusion. Your model runs
                    in real-time on-device with ultra-low power draw.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Vision</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">LiDAR</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Thermal</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Sensor Fusion</span>
                  </div>
                </div>

                {/* Card 2 — Behavior Algorithms */}
                <div
                  className="jos rounded-[20px] border border-gray-200 p-8 transition-all duration-300 hover:shadow-[0_8px_120px_rgba(0,0,0,0.1)]"
                  data-jos_animation="fade-up"
                  data-jos_delay="0.2"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-colorOrangyRed">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold tracking-normal">Behavior Algorithms</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Write the decision logic that turns perception into action. Your Python code
                    receives structured detections and sensor state, then issues flight commands —
                    waypoints, speed, altitude, payload triggers — directly through the autopilot
                    interface. No middleware.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Python SDK</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Direct Control</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Event-Driven</span>
                  </div>
                </div>

                {/* Card 3 — Mission Packages */}
                <div
                  className="jos rounded-[20px] border border-gray-200 p-8 transition-all duration-300 hover:shadow-[0_8px_120px_rgba(0,0,0,0.1)]"
                  data-jos_animation="fade-up"
                  data-jos_delay="0.3"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-colorOrangyRed">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold tracking-normal">Mission Packages</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Bundle a perception model + behavior algorithm into a deployable mission
                    package. Operators select your package from the marketplace and deploy it to
                    their fleet — perimeter patrol, infrastructure inspection, agricultural
                    survey, search and rescue.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Marketplace</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Fleet Deploy</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Revenue Share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Build → Test → Deploy → Earn */}
        <section className="max-w-[1332px] mx-auto">
          <div className="jos mx-5 rounded-[50px] bg-black px-[20px] py-20 sm:px-[50px] md:mx-[50px] lg:px-[100px] xl:py-[130px]">
            <div className="global-container">
              <div className="mb-12 text-center lg:mb-16">
                <h2 className="mb-4 font-bold text-white">Build → Test → Deploy → Earn</h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-400">
                  From idea to revenue in four steps.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
                <div className="relative p-6 lg:p-8">
                  <div className="mb-4 text-5xl font-bold text-colorOrangyRed">01</div>
                  <h4 className="mb-3 text-xl font-bold text-white tracking-normal">Build</h4>
                  <p className="text-gray-400 leading-relaxed text-base">
                    Train a perception model on aerial data or write a behavior algorithm
                    using our Python SDK. Build for any sensor type — vision, thermal,
                    LiDAR, or fused multi-sensor input.
                  </p>
                </div>

                <div className="relative p-6 lg:p-8">
                  <div className="mb-4 text-5xl font-bold text-colorOrangyRed">02</div>
                  <h4 className="mb-3 text-xl font-bold text-white tracking-normal">Test</h4>
                  <p className="text-gray-400 leading-relaxed text-base">
                    Validate in our simulation sandbox. Run your model + behavior against
                    realistic missions with real sensor data and flight dynamics before
                    anything touches hardware.
                  </p>
                </div>

                <div className="relative p-6 lg:p-8">
                  <div className="mb-4 text-5xl font-bold text-colorOrangyRed">03</div>
                  <h4 className="mb-3 text-xl font-bold text-white tracking-normal">Deploy</h4>
                  <p className="text-gray-400 leading-relaxed text-base">
                    Publish your mission package to the SMARTNAV marketplace. Operators
                    browse by use case and deploy to their fleet with one click from the
                    ARGUS Command.
                  </p>
                </div>

                <div className="relative p-6 lg:p-8">
                  <div className="mb-4 text-5xl font-bold text-colorOrangyRed">04</div>
                  <h4 className="mb-3 text-xl font-bold text-white tracking-normal">Earn</h4>
                  <p className="text-gray-400 leading-relaxed text-base">
                    Revenue share on every deployment. When an operator runs your package
                    on their machines, you earn. More operators in the fleet, more revenue
                    for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Capabilities */}
        <section className="max-w-[1332px] mx-auto">
          <div className="py-20 xl:py-[130px]">
            <div className="global-container">
              <div className="jos mb-16 lg:mb-20" data-jos_animation="fade-up">
                <h2 className="mb-4 font-bold text-center">The Platform</h2>
                <p className="mx-auto max-w-3xl text-center text-lg text-gray-600 lg:text-[21px]">
                  Purpose-built for intelligent autonomy at the edge.
                </p>
              </div>

              <div className="jos grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" data-jos_animation="fade-up">
                {[
                  { label: "Edge Inference", value: "Real-Time On-Device", detail: "AI processing happens on the device — decisions don't wait for a server" },
                  { label: "Multi-Sensor", value: "Any Input, Any Fusion", detail: "Camera, thermal, LiDAR, radar, gas, barometric — single or fused" },
                  { label: "Direct Control", value: "Autopilot Integration", detail: "Your behavior code sends flight commands — no middleware layers" },
                  { label: "Connectivity", value: "LAN + Cellular", detail: "Operate locally or remotely with automatic network failover" },
                  { label: "Developer SDK", value: "Python-First", detail: "Familiar tools, simple APIs, standard interfaces" },
                  { label: "Fleet Scale", value: "Deploy Once, Run Everywhere", detail: "Build a mission package, push it to an entire fleet from ARGUS Command" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:border-colorOrangyRed"
                  >
                    <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-colorOrangyRed">
                      {item.label}
                    </p>
                    <p className="mb-1 text-lg font-bold text-black">{item.value}</p>
                    <p className="text-sm text-gray-500">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Developer Program CTA */}
        <section id="developer-program" className="max-w-[1332px] mx-auto">
          <div className="pb-20 xl:pb-[130px]">
            <div className="global-container">
              <div className="jos rounded-[30px] bg-colorLinenRuffle px-8 py-16 text-center sm:px-16 lg:px-24 xl:py-24" data-jos_animation="fade-up">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-colorOrangyRed">
                  Early Access
                </p>
                <h2 className="mb-4 font-bold">Shape the Future of Edge AI</h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 lg:text-[21px]">
                  We&apos;re building the developer tools, simulation sandbox, and marketplace
                  now. Join the early access program to get SDK access, influence the platform
                  roadmap, and be first to publish when the marketplace launches.
                </p>

                {submitted ? (
                  <div className="mx-auto max-w-md rounded-xl bg-green-50 p-6">
                    <p className="text-lg font-semibold text-green-800">
                      You&apos;re on the list. We&apos;ll be in touch.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleWaitlist}
                    className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="spock@starfleet.gov"
                      required
                      className="flex-1 rounded-[50px] border border-gray-300 bg-white px-6 py-4 font-semibold text-black outline-none transition-all placeholder:text-gray-300 placeholder:font-normal focus:border-colorOrangyRed"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="button rounded-[50px] border-2 border-black bg-black py-4 px-8 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? "Submitting..." : "Request Access"}
                    </button>
                  </form>
                )}

                <p className="mt-6 text-sm text-gray-500">
                  Questions? Reach out at{" "}
                  <a href="mailto:labs@smartnav.ai" className="text-colorOrangyRed hover:underline">
                    labs@smartnav.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Animated floating orbs */}
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        <div className="floating-orb orb-5"></div>
      </main>
      <Footer_01 />
    </div>
  );
}

export default AILabs;
