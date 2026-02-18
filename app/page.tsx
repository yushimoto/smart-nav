"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";

function Home(): React.JSX.Element {
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section
          id="section-hero"
          className="relative h-screen w-full overflow-hidden"
        >
          <iframe
            src="https://www.youtube.com/embed/3OmvyyPGoZc?autoplay=1&mute=1&loop=1&playlist=3OmvyyPGoZc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=1&disablekb=1&start=0&end=0&si=yTpIA-d-GTVRhuGs&cc_load_policy=0&playsinline=1&enablejsapi=1&origin=https://smartnav.ai"
            className="absolute inset-0 h-full w-full"
            style={{
              width: "177.78vh",
              minWidth: "100%",
              minHeight: "100%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "none",
              outline: "none",
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            title="SMARTNAV Hero Video"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="absolute inset-0 bg-black bg-opacity-65"></div>

          <div className="relative z-10 flex h-full items-center justify-center px-4">
            <div className="max-w-4xl text-center text-white">
              <p className="jos mb-4 text-sm font-semibold uppercase tracking-widest text-colorOrangyRed sm:text-base" data-jos_animation="fade-up">
                Introducing ARGUS
              </p>
              <h1 className="jos mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-7xl" data-jos_animation="fade-up" data-jos_delay="0.1">
                Autonomy, Out of the&nbsp;Box
              </h1>
              <p className="jos mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl" data-jos_animation="fade-up" data-jos_delay="0.2">
                A plug-and-play edge AI module that transforms any drone into an
                autonomous platform — so one operator can command an entire fleet.
              </p>
              <div className="jos flex flex-wrap justify-center gap-4" data-jos_animation="fade-up" data-jos_delay="0.3">
                <a
                  href="#contact-section"
                  className="button rounded-[50px] border-2 border-colorOrangyRed bg-colorOrangyRed py-4 px-8 text-white hover:bg-transparent hover:text-white transition-all duration-300"
                >
                  Request a Demo
                </a>
                <a
                  href="https://app.smartnav.ai"
                  className="button rounded-[50px] border-2 border-white bg-transparent py-4 px-8 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  Open ARGUS Command
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WHAT IS ARGUS
        ═══════════════════════════════════════════ */}
        <section id="what-is-argus" className="max-w-[1332px] mx-auto">
          <div className="py-20 xl:py-[130px]">
            <div className="global-container">
              <div className="jos mb-16 text-center lg:mb-20" data-jos_animation="fade-up">
                <h2 className="mb-4 font-bold">One Module. Complete Autonomy.</h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-600 lg:text-[21px]">
                  ARGUS is an edge AI system that transforms your existing drones into
                  autonomous platforms. No new airframes. No rip-and-replace. Plug in and fly.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div
                  className="jos rounded-[20px] border border-gray-200 p-8 text-center transition-all duration-300 hover:shadow-[0_8px_120px_rgba(0,0,0,0.1)]"
                  data-jos_animation="fade-up"
                  data-jos_delay="0.1"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-colorOrangyRed">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold tracking-normal">The Hardware</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A compact edge AI module that bolts onto your existing drone — no
                    airframe changes required. Processes sensor data in real-time at
                    ultra-low power. Compatible with the most widely deployed flight
                    controllers on the market.
                  </p>
                </div>

                <div
                  className="jos rounded-[20px] border border-gray-200 p-8 text-center transition-all duration-300 hover:shadow-[0_8px_120px_rgba(0,0,0,0.1)]"
                  data-jos_animation="fade-up"
                  data-jos_delay="0.2"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-colorOrangyRed">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold tracking-normal">ARGUS Command Center</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Command your fleet from anywhere. Live telemetry, mission planning,
                    sensor feeds, and AI model deployment — all from one interface,
                    whether you&apos;re on the ground or a thousand miles away.
                  </p>
                </div>

                <div
                  className="jos rounded-[20px] border border-gray-200 p-8 text-center transition-all duration-300 hover:shadow-[0_8px_120px_rgba(0,0,0,0.1)]"
                  data-jos_animation="fade-up"
                  data-jos_delay="0.3"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-colorOrangyRed">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold tracking-normal">Mission Packages</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Deploy intelligence, not just software. Mission packages bundle
                    perception models with autonomous behavior logic for a specific job.
                    Install a package and the drone understands what to detect, how to
                    respond, and when to act — out of the box.
                  </p>
                </div>

                <div
                  className="jos rounded-[20px] border border-gray-200 p-8 text-center transition-all duration-300 hover:shadow-[0_8px_120px_rgba(0,0,0,0.1)]"
                  data-jos_animation="fade-up"
                  data-jos_delay="0.4"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-colorOrangyRed">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 4.408a2.25 2.25 0 01-2.134 1.536h-6.792a2.25 2.25 0 01-2.134-1.536L5 14.5m14 0H5" />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold tracking-normal">Predictive Stability Engine</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Like ABS for autonomous flight. The PSE continuously reads the
                    environment around the aircraft and anticipates destabilizing
                    conditions before they hit — pre-adjusting flight parameters to keep
                    missions stable, data clean, and aircraft safe.{" "}
                    <span className="font-semibold text-colorOrangyRed">Patent pending.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HOW IT WORKS
        ═══════════════════════════════════════════ */}
        <section id="how-it-works" className="max-w-[1332px] mx-auto">
          <div className="pb-20 xl:pb-[130px]">
            <div className="global-container">
              <div className="jos mb-16 text-center lg:mb-20" data-jos_animation="fade-up">
                <h2 className="mb-4 font-bold">Up and Running in Three Steps</h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-600 lg:text-[21px]">
                  From unboxing to autonomous operations.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                <div className="jos text-center" data-jos_animation="fade-up" data-jos_delay="0.1">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
                    1
                  </div>
                  <h4 className="mb-3 text-xl font-bold tracking-normal">Plug In</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Mount the ARGUS module on your drone and connect it to the flight
                    controller. Compatible with standard drone platforms — no airframe
                    modifications required.
                  </p>
                </div>

                <div className="jos text-center" data-jos_animation="fade-up" data-jos_delay="0.2">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
                    2
                  </div>
                  <h4 className="mb-3 text-xl font-bold tracking-normal">Configure</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Pair the drone to ARGUS Command, select your sensors, and install
                    the mission package for your use case. Define geofences, safety rules,
                    and autonomous behaviors.
                  </p>
                </div>

                <div className="jos text-center" data-jos_animation="fade-up" data-jos_delay="0.3">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
                    3
                  </div>
                  <h4 className="mb-3 text-xl font-bold tracking-normal">Fly Autonomous</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Launch the mission. The drone detects, decides, and acts on its own —
                    all processed on-device at the edge. Monitor everything in real-time
                    from ARGUS Command.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            USE CASES
        ═══════════════════════════════════════════ */}
        <section id="missions-section" className="max-w-[1332px] mx-auto">
          <div className="pb-20 xl:pb-[130px]">
            <div className="global-container">
              <div className="jos mb-16 text-center lg:mb-20" data-jos_animation="fade-up">
                <h2 className="mb-4 font-bold">Built for Critical Missions</h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-600 lg:text-[21px]">
                  Autonomous drone operations where failure is not an option.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div
                  className="jos group overflow-hidden rounded-[20px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_120px_rgba(0,0,0,0.15)]"
                  data-jos_animation="fade-up"
                  data-jos_delay="0.1"
                >
                  <div className="h-[250px] w-full overflow-hidden">
                    <Image
                      src="/assets/img_placeholder/mission1.jpg"
                      alt="Critical Infrastructure Inspection"
                      width={400}
                      height={250}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="mb-4 text-2xl font-bold leading-tight lg:text-3xl">
                      Infrastructure Inspection
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      Autonomous inspection of wind turbines, power lines, bridges, and
                      pipelines. AI detects cracks, corrosion, and anomalies in real-time.
                      Consistent data capture in conditions that ground manual crews.
                    </p>
                  </div>
                </div>

                <div
                  className="jos group overflow-hidden rounded-[20px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_120px_rgba(0,0,0,0.15)]"
                  data-jos_animation="fade-up"
                  data-jos_delay="0.2"
                >
                  <div className="h-[250px] w-full overflow-hidden">
                    <Image
                      src="/assets/img_placeholder/mission2.jpg"
                      alt="Public Safety & Emergency Response"
                      width={400}
                      height={250}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="mb-4 text-2xl font-bold leading-tight lg:text-3xl">
                      Security &amp; Emergency Response
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      Autonomous perimeter patrols with person and vehicle detection.
                      Track-and-follow for active pursuit. Search patterns for missing persons.
                      Thermal sensing for wildfire monitoring. Always watching, always ready.
                    </p>
                  </div>
                </div>

                <div
                  className="jos group overflow-hidden rounded-[20px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_120px_rgba(0,0,0,0.15)]"
                  data-jos_animation="fade-up"
                  data-jos_delay="0.3"
                >
                  <div className="h-[250px] w-full overflow-hidden">
                    <Image
                      src="/assets/img_placeholder/mission3.jpg"
                      alt="Precision Agriculture & Environmental Surveys"
                      width={400}
                      height={250}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="mb-4 text-2xl font-bold leading-tight lg:text-3xl">
                      Agriculture &amp; Environmental
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      Ultra-precise low-altitude survey flights for crop health analysis,
                      environmental monitoring, and terrain mapping. Multi-sensor fusion
                      delivers clean, actionable data across large areas autonomously.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PREDICTIVE STABILITY (ABS section)
        ═══════════════════════════════════════════ */}
        <section id="predictive-stability" className="max-w-[1332px] mx-auto">
          <div className="py-20 xl:py-[130px]">
            <div className="global-container">
              <div className="jos rounded-[50px] bg-black px-[20px] py-20 sm:px-[50px] lg:px-[100px] xl:py-[130px]">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                  <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-colorOrangyRed">
                      Patent-Pending Technology
                    </p>
                    <h2 className="mb-6 font-bold text-white">
                      The Predictive Stability Engine
                    </h2>
                    <p className="mb-6 text-lg leading-[1.5] text-gray-400 lg:text-[21px]">
                      You never think about anti-lock brakes — until the moment they save
                      your life. The PSE brings the same philosophy to autonomous flight.
                    </p>
                    <p className="mb-6 text-lg leading-[1.5] text-gray-400 lg:text-[21px]">
                      It continuously purifies noisy sensor data, reads the environment
                      around the aircraft, and predicts hazards before they
                      arrive — pre-adjusting flight parameters so the drone stays stable
                      and the mission stays on track.
                    </p>
                    <p className="text-lg leading-[1.5] text-gray-400 lg:text-[21px]">
                      The result: missions that complete in conditions other drones can&apos;t
                      fly in. Inspection data that&apos;s sharp, not shaky. Wider weather
                      windows, fewer cancelled flights, and reliable performance your
                      operators can count on — every single time.
                    </p>
                  </div>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Sensor Purification",
                        desc: "Raw sensor data is noisy. The PSE cleans and fuses inputs from across the aircraft into reliable state information the rest of the system can trust.",
                      },
                      {
                        title: "Hazard Prediction",
                        desc: "Continuously reads the flight environment and anticipates destabilizing conditions — predicting threats before they reach the aircraft.",
                      },
                      {
                        title: "Safety Governance",
                        desc: "Every flight command passes through an intelligent safety layer — keeping operations within safe boundaries, autonomously.",
                      },
                      {
                        title: "Mission Assurance",
                        desc: "Wider operational weather windows, fewer aborted flights, consistently clean sensor data, and the confidence to fly when other systems stay grounded.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-gray-800 p-6 transition-all duration-300 hover:border-colorOrangyRed"
                      >
                        <h4 className="mb-2 text-lg font-bold text-white tracking-normal">{item.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            AI LABS CTA (replaces old "Inside" section)
        ═══════════════════════════════════════════ */}
        <section className="max-w-[1332px] mx-auto">
          <div className="py-20 xl:py-[130px]">
            <div className="global-container">
              <div className="jos rounded-[30px] bg-colorLinenRuffle px-8 py-16 sm:px-16 lg:px-24 xl:py-24" data-jos_animation="fade-up">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-colorOrangyRed">
                      For Developers
                    </p>
                    <h2 className="mb-4 font-bold">Build on ARGUS</h2>
                    <p className="text-lg leading-[1.5] text-gray-600 lg:text-[21px]">
                      Train perception models. Write behavior algorithms. Ship mission packages
                      to drone operators worldwide. SMARTNAV AI Labs is a development
                      platform where your code flies on real machines — and earns revenue
                      on every deployment.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                    <Link
                      href="/ai-labs"
                      className="button rounded-[50px] border-2 border-black bg-black py-4 px-8 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white transition-all duration-300 text-center"
                    >
                      Explore AI Labs
                    </Link>
                  </div>
                </div>
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

export default Home;
