"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FsLightbox from "fslightbox-react";
import useAccordion from "@/components/hooks/useAccordion";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";

function Home(): React.JSX.Element {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        <section
          id="section-hero"
          className="relative h-screen w-full overflow-hidden"
        >
          <iframe
            src="https://www.youtube.com/embed/3OmvyyPGoZc?autoplay=1&mute=1&loop=1&playlist=3OmvyyPGoZc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=1&disablekb=1&start=0&end=0&si=yTpIA-d-GTVRhuGs&cc_load_policy=0&playsinline=1&enablejsapi=1&origin=https://smartnav-v1.vercel.app"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              border: "none",
              outline: "none",
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            title="SmartNav Hero Video"
            referrerPolicy="strict-origin-when-cross-origin"
          />

          <div className="absolute inset-0 bg-black bg-opacity-65"></div>

          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="text-center text-white">
              <h1 className="jos slide-from-bottom mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-7xl">
                The AI Co-Pilot for your UAVs
              </h1>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="max-w-[1332px] mx-auto">
          <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
            <div className="global-container">
              <div className="jos mb-16 lg:mb-20 xl:mb-24">
                <div className="text-center">
                  <h2 className="mb-6 font-clashDisplay">
                    How We Make the Unpredictable, Predictable
                  </h2>
                  <div className="mx-auto max-w-4xl text-lg leading-[1.4] lg:text-[21px]">
                    <p>
                      Reliability isn&apos;t a feature; it&apos;s the result of
                      a meticulous engineering process. We don&apos;t hope our
                      drones are stable; we build stability from the ground up
                      before a single propeller spins. Our unique three-step
                      process is designed to master any operational environment,
                      ensuring predictable performance for your most critical
                      missions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="jos mb-12 grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16">
                <div className="order-1 md:order-1">
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl xl:text-4xl">
                      Step 1: The Miyagi Method
                    </h3>
                  </div>
                  <div className="text-base leading-[1.4] sm:text-lg lg:text-[21px]">
                    <p>
                      Our process begins by creating an unconventional training
                      ground: a high-fidelity, physics-aware digital twin of the
                      specific operational area and mission scope. This dynamic
                      model is the foundation of our method, creating the
                      perfect custom environment to teach our AI the
                      fundamentals of its environment and mission.
                    </p>
                  </div>
                </div>
                <div
                  className="jos order-2 overflow-hidden rounded-md"
                  data-jos_animation="fade-right"
                >
                  <Image
                    src="/assets/img_placeholder/how1.jpeg"
                    alt="Step 1 - Digital Twin Visualization"
                    width="600"
                    height="400"
                    className="h-[250px] w-full object-cover sm:h-[300px] md:h-[350px] lg:h-[400px]"
                  />
                </div>
              </div>

              {/* Step 2: Wax On, Wax Off - Text Right, Image Left */}
              <div className="jos mb-12 grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16">
                <div
                  className="jos order-2 overflow-hidden rounded-md md:order-1"
                  data-jos_animation="fade-left"
                >
                  <Image
                    src="/assets/img_placeholder/inside.png"
                    alt="Step 2 - CFD Simulations"
                    width="600"
                    height="400"
                    className="h-[250px] w-full object-cover sm:h-[300px] md:h-[350px] lg:h-[400px]"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl xl:text-4xl">
                      Step 2: &ldquo;Wax On, Wax Off&rdquo;
                    </h3>
                  </div>
                  <div className="text-base leading-[1.4] sm:text-lg lg:text-[21px]">
                    <p>
                      Mastery comes from repetition. Within the digital twin, we
                      run thousands of CFD simulations, honing our AI to
                      practice against every imaginable environmental force.
                      This &ldquo;wax on, wax off&rdquo; process of endless
                      simulation builds the AI&apos;s muscle memory, training a
                      lightweight inference model to develop flawless,
                      predictive reflexes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: The Crane Kick - Text Left, Image Right */}
              <div className="jos grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16">
                <div className="order-1 md:order-1">
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl xl:text-4xl">
                      Step 3: The Crane Kick
                    </h3>
                  </div>
                  <div className="text-base leading-[1.4] sm:text-lg lg:text-[21px]">
                    <p>
                      The fully trained AI model is deployed to a compatible
                      Edge AI hardware onboard the UAV. The result is a
                      perfectly executed, unstoppable move. The drone can now
                      anticipate and proactively neutralize disturbances,
                      delivering a level of stability and mission assurance that
                      is simply undefendable by the elements.
                    </p>
                  </div>
                </div>
                <div
                  className="jos order-2 overflow-hidden rounded-md"
                  data-jos_animation="fade-right"
                >
                  <Image
                    src="/assets/img_placeholder/how3.jpeg"
                    alt="Step 3 - Edge AI Deployment"
                    width="600"
                    height="400"
                    className="h-[250px] w-full object-cover sm:h-[300px] md:h-[350px] lg:h-[400px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="missions-section" className="max-w-[1332px] mx-auto">
          <div className="pb-20 pt-10 xl:pb-[150px] xl:pt-[10px]">
            <div className="global-container">
              <div className="jos mb-16 text-center lg:mb-20 xl:mb-24">
                <h2 className="font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                  Engineered for the Most Demanding Missions
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div
                  className="jos group overflow-hidden rounded-[20px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_120px_rgba(0,0,0,0.15)]"
                  data-jos_animation="fade-up"
                  data-jos_delay="0.1"
                >
                  {/* Card Image */}
                  <div className="h-[250px] w-full overflow-hidden">
                    <Image
                      src="/assets/img_placeholder/mission1.jpg"
                      alt="Critical Infrastructure Inspection"
                      width={400}
                      height={250}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* Card Content */}
                  <div className="p-8">
                    <h3 className="mb-4 text-2xl font-bold leading-tight lg:text-3xl">
                      Critical Infrastructure Inspection
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      ARGUS AI provides radical stability for inspecting assets
                      like wind turbines, power lines, and bridges. In high
                      winds and turbulent conditions that often cancel missions,
                      our technology enables the capture of high-resolution
                      data, eliminating costly rework and expanding the
                      operational window for inspection crews.
                    </p>
                  </div>
                </div>
                {/* Mission Card 1 End */}

                <div
                  className="jos group overflow-hidden rounded-[20px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_120px_rgba(0,0,0,0.15)]"
                  data-jos_animation="fade-up"
                  data-jos_delay="0.2"
                >
                  {/* Card Image */}
                  <div className="h-[250px] w-full overflow-hidden">
                    <Image
                      src="/assets/img_placeholder/mission2.jpg"
                      alt="Public Safety & Emergency Response"
                      width={400}
                      height={250}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* Card Content */}
                  <div className="p-8">
                    <h3 className="mb-4 text-2xl font-bold leading-tight lg:text-3xl">
                      Public Safety & Emergency Response
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      In unpredictable and hazardous conditions where mission
                      failure is not an option, ARGUS AI ensures drones remain
                      reliable assets for first responders. Whether for wildfire
                      monitoring, search and rescue, or disaster response, our
                      system provides the steady aerial intelligence needed to
                      make critical decisions.
                    </p>
                  </div>
                </div>
                {/* Mission Card 2 End */}

                <div
                  className="jos group overflow-hidden rounded-[20px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_120px_rgba(0,0,0,0.15)]"
                  data-jos_animation="fade-up"
                  data-jos_delay="0.3"
                >
                  {/* Card Image */}
                  <div className="h-[250px] w-full overflow-hidden">
                    <Image
                      src="/assets/img_placeholder/mission3.jpg"
                      alt="Precision Agriculture & Environmental Surveys"
                      width={400}
                      height={250}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* Card Content */}
                  <div className="p-8">
                    <h3 className="mb-4 text-2xl font-bold leading-tight lg:text-3xl">
                      Precision Agriculture & Environmental Surveys
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      Our technology enables the ultra-smooth, low-altitude
                      flight paths required for precision agriculture and
                      environmental surveys. By neutralizing the impact of
                      ground-level turbulence, ARGUS AI ensures the data
                      collected is clean and precise, providing a true and
                      accurate picture of crop health or the environment below.
                    </p>
                  </div>
                </div>
                {/* Mission Card 3 End */}
              </div>
            </div>
          </div>
        </section>
        <section
          id="inside-smartnav-ai-labs-section"
          className="max-w-[1332px] mx-auto"
        >
          {/* Section Spacer */}
          <div className="py-20 xl:pb-[150px] xl:pt-[10px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 max-w-[480px] md:mb-16 lg:mb-20 lg:max-w-2xl xl:max-w-[800px]">
                <h2 className="font-clashDisplay text-4xl font-medium leading-[1.06] -tracking-[2px] text-black sm:text-[44px] lg:text-[56px] xl:text-[70px]">
                  Inside SmartNav AI Labs
                </h2>
              </div>
              {/* Section Content Block */}
              <div
                className="jso relative overflow-hidden rounded-[10px]"
                data-jos_animation="zoom"
              >
                <Image
                  src="/assets/img_placeholder/inside.png"
                  alt="video-bg-image"
                  width={1296}
                  height={600}
                  className="h-60 w-full object-cover object-center lg:h-[35rem] xl:h-[600px]"
                />
                {/* Video Play Button */}
                <button className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="relative flex h-[120px] w-[120px] text-white items-center justify-center rounded-full border-[3px] border-orange-500 bg-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300"
                    onClick={() => setToggler(!toggler)}
                  >
                    Play
                    <div className="absolute -z-[1] h-[110%] w-[110%] animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-orange-500 opacity-30"></div>
                  </div>
                </button>
                {/* Video Play Button */}
              </div>
              <FsLightbox
                toggler={toggler}
                sources={[
                  "https://www.youtube.com/embed/q4vo7TAbL1U?autoplay=1&mute=1&loop=1&playlist=q4vo7TAbL1U&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=1&disablekb=1&start=0&end=0&si=wH4vX_fW8h_ZETnL&cc_load_policy=0&playsinline=1&enablejsapi=1&origin=https://smartnav-v1.vercel.app",
                ]}
              />
            </div>
            <div className="self-center px-6 py-6 sm:py-10 md:px-10 xl:px-10 xl:py-14 xxl:py-22 xxl:pl-16 xxl:pr-28">
              <div className="text-left text-lg leading-[1.4] text-black lg:text-[21px]">
                <p className="mb-7 last:mb-0">
                  The ARGUS AI is our first endeavor to solve the problem of
                  autonomous reliability. Our AI Labs is where we&apos;re asking
                  the questions that will lead to the next. This is our
                  dedicated space for pure research and radical experimentation
                  at the intersection of robotics, aerodynamics, and predictive
                  AI... This journey will happen in the open. As we develop new
                  tools, publish our findings, and release foundational
                  datasets, we&apos;ll be sharing our progress with the
                  community.
                </p>
              </div>

              <div className="mt-8">
                <p className="mb-6 text-lg font-semibold text-black">
                  Follow the journey:
                </p>
                <div className="flex flex-wrap gap-4">
                  {/* <Link
                    href="https://github.com/smartnav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button inline-flex items-center rounded-[50px] border-2 border-white bg-black px-6 py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-lg"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </Link>
                  <Link
                    href="https://huggingface.co/smartnav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button inline-flex items-center rounded-[50px] border-2 border-white bg-black px-6 py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-lg"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-17v10l6-5-6-5z" />
                    </svg>
                    Hugging Face
                  </Link> */}
                  <Link
                    href="https://www.linkedin.com/company/smart-navigation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button inline-flex items-center rounded-[50px] border-2 border-white bg-black px-6 py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-lg"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>

        {/* Body Background Shape 1 */}
        <div className="orange-gradient-1 absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]"></div>

        {/* Body Background Shape 2 */}
        <div className="orange-gradient-2 absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]"></div>
      </main>
      {/*...::: Footer Start :::... */}
      <Footer_01 />
      {/*...::: Footer End :::... */}
    </div>
  );
}

export default Home;
