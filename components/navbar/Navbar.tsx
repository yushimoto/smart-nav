"use client";
import React from "react";
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
  color,
}: NavbarProps): React.JSX.Element => {
  const { scrollToSection } = useSmoothScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleMenu = () => {
    setMobileMenu(false);
  };

  const handleMobileNavigation = (sectionId: string) => {
    setMobileMenu(false);
    if (isHome) {
      scrollToSection(sectionId);
    } else {
      window.location.href = `/${sectionId}`;
    }
  };

  return (
    <div className="menu-block-wrapper">
      <div
        onClick={handleMenu}
        className={`menu-overlay transition-all duration-300 ease-in-out ${
          mobileMenu && "active"
        }`}
      />
      <nav
        className={`menu-block transition-all duration-300 ease-in-out ${
          mobileMenu && "active"
        } lg:hidden`}
        id="append-menu-header"
      >
        <div className="mobile-menu-head">
          <div className="current-menu-title transition-all duration-300 ease-in-out">
            Menu
          </div>
          <div
            onClick={handleMenu}
            className="mobile-menu-close transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer"
          >
            &times;
          </div>
        </div>
        <ul className={`site-menu-main ${color} lg:hidden`}>
          <li className="nav-item">
            <button
              onClick={() => handleMobileNavigation("#how-it-works")}
              className="nav-link-item transition-all duration-300 ease-in-out hover:text-colorOrangyRed hover:translate-x-2 w-full text-left"
            >
              How It Works
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => handleMobileNavigation("#missions-section")}
              className="nav-link-item transition-all duration-300 ease-in-out hover:text-colorOrangyRed hover:translate-x-2 w-full text-left"
            >
              Applications
            </button>
          </li>
          <li className="nav-item">
            <Link
              href="/ai-labs"
              onClick={handleMenu}
              className="nav-link-item transition-all duration-300 ease-in-out hover:text-colorOrangyRed hover:translate-x-2 block w-full text-left"
            >
              AI Labs
            </Link>
          </li>
          <li className="nav-item">
            <button
              onClick={() => handleMobileNavigation("#contact-section")}
              className="nav-link-item transition-all duration-300 ease-in-out hover:text-colorOrangyRed hover:translate-x-2 w-full text-left"
            >
              Contact Us
            </button>
          </li>
          <li className="nav-item mt-4 px-4">
            <a
              href="https://app.smartnav.ai"
              className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold text-[15px] py-3 rounded-lg transition-colors duration-300"
            >
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
