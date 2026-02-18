"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  const [mobileSubMenu, setMobileSubMenu] = useState<number | null>(null);
  const [mobileSubMenuSub, setMobileSubMenuSub] = useState<number | null>(null);
  const [menuTitle, setMenuTitle] = useState("");
  const { scrollToSection } = useSmoothScroll();

  const handleMenu = () => {
    setMobileMenu(false);
    setMobileSubMenu(null);
    setMobileSubMenuSub(null);
  };

  const handleMobileNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenu(false);
    setMobileSubMenu(null);
    setMobileSubMenuSub(null);
  };

  const handleSubMenu = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();
    setMobileSubMenu(id);

    const target = e.target as HTMLElement;
    if (target.tagName === "A") {
      const content = target.firstChild?.textContent || "";
      setMenuTitle(content);
    } else {
      const content = target.parentElement?.textContent || "";
      setMenuTitle(content);
    }
  };

  const handleSubMenuSub = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();
    setMobileSubMenuSub(id);
    const target = e.target as HTMLElement;
    if (target.tagName === "A") {
      const content = target.firstChild?.textContent || "";
      setMenuTitle(content);
    } else {
      const content = target.parentElement?.textContent || "";
      setMenuTitle(content);
    }
  };

  const handleGoBack = () => {
    if (mobileSubMenuSub) {
      setMobileSubMenuSub(null);
      return;
    }
    if (mobileSubMenu) {
      setMobileSubMenu(null);
      return;
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
        <div
          className={`mobile-menu-head transition-all duration-300 ease-in-out ${
            mobileSubMenu && "active"
          }`}
        >
          <div
            onClick={handleGoBack}
            className="go-back transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer"
          >
            <Image
              className="dropdown-icon transition-transform duration-300 ease-in-out"
              src="/assets/img_placeholder/icon-black-long-arrow-right.svg"
              alt="cheveron-right"
              width={16}
              height={16}
            />
          </div>
          <div className="current-menu-title transition-all duration-300 ease-in-out">
            {menuTitle}
          </div>
          <div
            onClick={handleMenu}
            className="mobile-menu-close transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer"
          >
            ×
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
            <button
              onClick={() =>
                handleMobileNavigation("#inside-smartnav-ai-labs-section")
              }
              className="nav-link-item transition-all duration-300 ease-in-out hover:text-colorOrangyRed hover:translate-x-2 w-full text-left"
            >
              AI Labs
            </button>
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
