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

    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!GOOGLE_SCRIPT_URL) {
      setSubmitted(true);
      setIsSubmitting(false);
      return;
    }

    const scriptUrl = GOOGLE_SCRIPT_URL.endsWith("/exec")
      ? GOOGLE_SCRIPT_URL
      : `${GOOGLE_SCRIPT_URL.replace(/\/$/, "")}/exec`;

    const timestamp = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    try {
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Developer Waitlist",
          email,
          message: "AI Labs developer waitlist signup",
          source: "ai-labs-waitlist",
          timestamp,
        }),
      });
    } catch (error) {
      // no-cors means we can't read the response, but data still lands
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold tracking-normal">Behavior Algorithms</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Perception without action is just data. Write behavior algorithms that
                    close the loop — Track &amp; Follow, Obstacle Avoidance, Plume Tracing,
                    Hover &amp; Document, Hotspot Investigation. Your behavior takes sensor
                    output and translates it into autonomous machine control in real-time.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Python SDK</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Autonomy</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Control Logic</span>
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold tracking-normal">Mission Packages</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Bundle a perception model + behavior algorithm + sensor requirements
                    into a deployable mission package. A &ldquo;Pipeline Inspection Kit&rdquo; might
                    combine crack detection + hover-and-document behavior + thermal camera
                    requirement. Operators install the package, the drone knows what to do.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Model + Behavior</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">One-Click Deploy</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">Marketplace</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Data Advantage */}
        <section className="max-w-[1332px] mx-auto">
          <div className="pb-20 xl:pb-[130px]">
            <div className="global-container">
              <div className="jos grid grid-cols-1 items-center gap-12 md:grid-cols-2" data-jos_animation="fade-up">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-colorOrangyRed">
                    The Data Flywheel
                  </p>
                  <h2 className="mb-6 font-bold">
                    Better Data. Better Models. Better Machines.
                  </h2>
                  <p className="text-lg leading-[1.5] text-gray-600 lg:text-[21px] mb-6">
                    Every SMARTNAV-equipped machine generates real-world sensor data during
                    operations — aerial imagery, environmental readings, telemetry, sensor
                    streams. This data flows back into a shared, anonymized training dataset
                    available to all developers on the platform.
                  </p>
                  <p className="text-lg leading-[1.5] text-gray-600 lg:text-[21px]">
                    More machines in the field means richer training data. Richer data means
                    better models. Better models attract more operators. The flywheel compounds.
                    Access the dataset through our managed training environment — no raw exports,
                    full privacy compliance.
                  </p>
                </div>
                <div className="rounded-[20px] border border-gray-200 p-8 lg:p-10">
                  <div className="space-y-6">
                    {[
                      { step: "Collect", desc: "Drones generate labeled sensor data during real missions" },
                      { step: "Aggregate", desc: "Anonymized data pools into shared training datasets" },
                      { step: "Train", desc: "Developers build better models with real-world aerial data" },
                      { step: "Deploy", desc: "Better models attract more operators to the fleet" },
                      { step: "Repeat", desc: "More operators generate more data — the cycle accelerates" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-colorOrangyRed text-sm font-bold text-white">
                          {i + 1}
                        </div>
                        <div>
                          <p className="font-bold text-black">{item.step}</p>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
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
