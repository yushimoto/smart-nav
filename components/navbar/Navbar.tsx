"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSmoothScroll from "../hooks/useSmoothScroll";

interface NavbarProps {
  mobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;
  color?: string;
}

const Navbar = ({
  mobileMenu,
  setMobileMenu,
}: NavbarProps): React.JSX.Element => {
  const { scrollToSection } = useSmoothScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  const handleClose = () => {
    setMobileMenu(false);
  };

  const handleNavigation = (sectionId: string) => {
    setMobileMenu(false);
    if (isHome) {
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      window.location.href = `/${sectionId}`;
    }
  };

  const linkClass =
    "text-2xl font-semibold text-white transition-all duration-300 hover:text-colorOrangyRed";

  return (
    <>
      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          mobileMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-white hover:text-colorOrangyRed transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Close menu"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Nav links */}
        <nav className="flex flex-col items-center gap-8">
          <button
            onClick={() => handleNavigation("#how-it-works")}
            className={linkClass}
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavigation("#missions-section")}
            className={linkClass}
          >
            Applications
          </button>
          <Link
            href="/ai-labs"
            onClick={handleClose}
            className={linkClass}
          >
            AI Labs
          </Link>
          <button
            onClick={() => handleNavigation("#contact-section")}
            className={linkClass}
          >
            Contact Us
          </button>

          {/* Divider */}
          <div className="w-16 h-px bg-gray-700 my-2" />

          {/* Sign In button */}
          <a
            href="https://app.smartnav.ai"
            className="rounded-full border-2 border-colorOrangyRed px-10 py-3 text-lg font-semibold text-colorOrangyRed transition-all duration-300 hover:bg-colorOrangyRed hover:text-white"
          >
            Sign In
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
