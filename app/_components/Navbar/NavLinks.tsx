"use client";

import React, { ReactElement, useState, useEffect, useRef } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Logo from "@/_assets/images/Logo.";
import NavItem from "@/_components/Navbar/NavItem";
import Instagram from "@/_assets/images/Instagram";
import Facebook from "@/_assets/images/Facebook";
import Youtube from "@/_assets/images/Youtube";
import LinkedIn from "@/_assets/images/LinkedIn";

export default function NavLinks(): ReactElement {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleMenuToggle = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setActiveMenu(null);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const MANAGEMENT_ROUTE = "/management";
  const OPPORTUNITIES_ROUTE = "/opportunities";
  const CLUBS_ROUTE = "/clubs";
  const ELEMENTARY_ROUTE = "/elementary-school";
  const EVENTS_ROUTE = "/events";
  const FACULTIES_ROUTE = "/faculties";
  const HOME_ROUTE = "/";
  const MIDDLESCHOOL_ROUTE = "/middle-school";
  const HIGHSCHOOL_ROUTE = "/high-school";
  const ADMINISTRATION_ROUTE = "/administration";

  return (
    <div ref={navRef}>
      <div className="flex justify-between px-4 md:px-10 lg:px-20 items-center p-1 bg-[#0F5288]">
        <Link href={HOME_ROUTE} className="flex flex-col">
          <Logo className="p-1" />
        </Link>

        <div
          className="lg:hidden cursor-pointer"
          onClick={handleMobileMenuToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {/* Desktop Navigation */}
        <div className="lg:flex hidden md:items-stretch md:text-white md:gap-5 lg:gap-10 md:font-medium md:text-lg">
          <NavItem
            label="About Us"
            isOpen={activeMenu === "about"}
            onToggle={() => handleMenuToggle("about")}
            dropdownItems={[
              {
                label: "Our Team",
                href: "#",
                subMenu: [
                  { label: "Management", href: MANAGEMENT_ROUTE },
                  { label: "Faculties", href: FACULTIES_ROUTE },
                  { label: "Administration", href: ADMINISTRATION_ROUTE },
                ],
              },
              {
                label: "School Facilities",
                href: "#",
                subMenu: [
                  { label: "Transportation", href: "/transportation" },
                  { label: "Canteen", href: "/canteen" },
                  { label: "Library", href: "/library" },
                  { label: "Laboratories", href: "/laboratories" },
                  { label: "Reading Corner", href: "/reading-corner" },
                  { label: "Sports Yard", href: "/sports-yard" },
                ],
              },
            ]}
          />
          <NavItem
            label="Academics"
            isOpen={activeMenu === "academics"}
            onToggle={() => handleMenuToggle("academics")}
            dropdownItems={[
              { label: "Elementary School", href: ELEMENTARY_ROUTE },
              { label: "Middle School", href: MIDDLESCHOOL_ROUTE },
              { label: "High School", href: HIGHSCHOOL_ROUTE },
            ]}
          />
          <NavItem
            label="Beyond Classroom"
            isOpen={activeMenu === "beyond"}
            onToggle={() => handleMenuToggle("beyond")}
            dropdownItems={[
              { label: "Student Clubs", href: CLUBS_ROUTE },
              { label: "Events & Activities", href: EVENTS_ROUTE },
              { label: "Opportunities", href: OPPORTUNITIES_ROUTE },
            ]}
          />
          <Link
            href="https://application-dss.deerwalk.edu.np/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NavItem
              label="Apply Now"
              isOpen={activeMenu === "admission"}
              onToggle={() => handleMenuToggle("admission")}
            />
          </Link>
        </div>

        <div className="hidden lg:flex text-end relative ">
          <Link href="https://www.instagram.com/deerwalk_sifal_school/">
            <Instagram className="w-6 lg:w-14" />
          </Link>
          <Link href="https://www.facebook.com/DeerwalkSifalSchool">
            <Facebook className="w-10 lg:w-14" />
          </Link>
          <Link href="https://www.youtube.com/@sifalschool">
            <Youtube className="w-10 lg:w-14 mr-3" />
          </Link>
          <Link href="https://www.linkedin.com/company/deerwalksifalschool">
            <LinkedIn className="w-10 lg:w-14" />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed top-0 right-0 w-full h-full bg-[#0F5288] transition-transform transform ${
            isMobileMenuOpen ? "-translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 bg-[#0F5288]">
            <Link href="/">
              <Logo />
            </Link>
            <div className="cursor-pointer" onClick={handleMobileMenuToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col py-5 text-xl bg-[#0F5288] text-white min-h-screen">
            <div className="text-start font-medium px-10">
              <NavItem
                label="About Us"
                isOpen={activeMenu === "about"}
                onToggle={() => handleMenuToggle("about")}
                dropdownItems={[
                  {
                    label: "Our Team",
                    href: "#",
                    subMenu: [
                      { label: "Management", href: MANAGEMENT_ROUTE },
                      { label: "Faculties", href: FACULTIES_ROUTE },
                      { label: "Administration", href: ADMINISTRATION_ROUTE },
                    ],
                  },
                  {
                    label: "School Facilities",
                    href: "#",
                    subMenu: [
                      { label: "Transportation", href: "/transportation" },
                      { label: "Canteen", href: "/canteen" },
                      { label: "Library", href: "/library" },
                      { label: "Laboratories", href: "/laboratories" },
                      { label: "Reading Corner", href: "/reading-corner" },
                      { label: "Sports Yard", href: "/sports-yard" },
                    ],
                  },
                ]}
              />
              <NavItem
                label="Academics"
                isOpen={activeMenu === "academics"}
                onToggle={() => handleMenuToggle("academics")}
                dropdownItems={[
                  { label: "Elementary School", href: ELEMENTARY_ROUTE },
                  { label: "Middle School", href: MIDDLESCHOOL_ROUTE },
                  { label: "High School", href: HIGHSCHOOL_ROUTE },
                ]}
              />
              <NavItem
                label="Beyond Classroom"
                isOpen={activeMenu === "beyond"}
                onToggle={() => handleMenuToggle("beyond")}
                dropdownItems={[
                  { label: "Student Clubs", href: CLUBS_ROUTE },
                  { label: "Events & Activities", href: EVENTS_ROUTE },
                  { label: "Opportunities", href: OPPORTUNITIES_ROUTE },
                ]}
              />
              <Link
                href="https://application-dss.deerwalk.edu.np/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NavItem
                  label="Apply Now"
                  isOpen={activeMenu === "admission"}
                  onToggle={() => handleMenuToggle("admission")}
                />
              </Link>
              <div className="flex lg:hidden text-end gap-1 relative mt-4">
                <Link href="https://www.instagram.com/deerwalk_sifal_school/">
                  <Instagram className="w-10 lg:w-full" />
                </Link>
                <Link href="https://www.facebook.com/DeerwalkSifalSchool">
                  <Facebook className="w-10 lg:w-full" />
                </Link>
                <Link href="https://www.youtube.com/@sifalschool">
                  <Youtube className="w-10 lg:w-full " />
                </Link>
                <Link href="https://www.linkedin.com/company/deerwalksifalschool">
                  <LinkedIn className="w-10 lg:w-full" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

