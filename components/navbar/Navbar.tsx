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

  // Inline styles to defeat template CSS !important overrides
  const linkStyle: React.CSSProperties = {
    color: "#ffffff",
    fontSize: "1.5rem",
    fontWeight: 600,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    textDecoration: "none",
  };

  return (
    <>
      {/* Full-screen overlay — z-index must beat sticky header (9999) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.97)",
          backdropFilter: "blur(12px)",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
          opacity: mobileMenu ? 1 : 0,
          visibility: mobileMenu ? "visible" : "hidden",
          pointerEvents: mobileMenu ? "auto" : "none",
        }}
        className="lg:hidden"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            color: "#ffffff",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
          }}
          aria-label="Close menu"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Nav links */}
        <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
          <button
            onClick={() => handleNavigation("#how-it-works")}
            style={linkStyle}
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavigation("#missions-section")}
            style={linkStyle}
          >
            Applications
          </button>
          <Link
            href="/ai-labs"
            onClick={handleClose}
            style={linkStyle}
          >
            AI Labs
          </Link>
          <button
            onClick={() => handleNavigation("#contact-section")}
            style={linkStyle}
          >
            Contact Us
          </button>

          {/* Divider */}
          <div style={{ width: "4rem", height: "1px", backgroundColor: "#374151", margin: "0.5rem 0" }} />

          {/* Sign In button */}
          <a
            href="https://app.smartnav.ai"
            style={{
              color: "#f97316",
              fontSize: "1.125rem",
              fontWeight: 600,
              border: "2px solid #f97316",
              borderRadius: "9999px",
              padding: "0.75rem 2.5rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f97316";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#f97316";
            }}
          >
            Sign In
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
