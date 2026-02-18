"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
}: NavbarProps): React.JSX.Element | null => {
  const { scrollToSection } = useSmoothScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mounted, setMounted] = useState(false);

  // Wait for client mount before using portal
  useEffect(() => {
    setMounted(true);
  }, []);

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
      setTimeout(() => scrollToSection(sectionId), 150);
    } else {
      window.location.href = `/${sectionId}`;
    }
  };

  if (!mounted || !mobileMenu) return null;

  // Portal renders the overlay directly into document.body,
  // escaping the header's stacking context entirely.
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
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
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Nav links */}
      <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
        <button
          onClick={() => handleNavigation("#how-it-works")}
          style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}
        >
          How It Works
        </button>
        <button
          onClick={() => handleNavigation("#missions-section")}
          style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}
        >
          Applications
        </button>
        <Link
          href="/ai-labs"
          onClick={handleClose}
          style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 600, textDecoration: "none" }}
        >
          AI Labs
        </Link>
        <button
          onClick={() => handleNavigation("#contact-section")}
          style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}
        >
          Contact Us
        </button>

        {/* Divider */}
        <div style={{ width: "4rem", height: "1px", backgroundColor: "#374151", margin: "0.5rem 0" }} />

        {/* Sign In */}
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
          }}
        >
          Sign In
        </a>
      </nav>
    </div>,
    document.body
  );
};

export default Navbar;
