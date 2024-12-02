import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";

interface NavItemProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  dropdownItems?: {
    label: string;
    href?: string;
    subMenu?: { label: string; href: string }[];
  }[];
  children?: ReactElement;
}

export default function NavItem({
  label,
  isOpen,
  onToggle,
  dropdownItems,
  children,
}: NavItemProps): ReactElement {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  
  useEffect(() => {
    if (isOpen) {
      setHasInteracted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.nav-item')) {
        setActiveSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubMenuToggle = (menu: string) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  return (
    <div className="relative nav-item">
      <div
        className={`cursor-pointer py-3 border-b-[3px] ${
          isOpen
            ? "border-b-[#EA5D0FCC]"
            : "border-b-transparent hover:border-b-[#EA5D0FCC]"
        }`}
        onClick={onToggle}
      >
        {label}
      </div>

      <div
        className={`absolute lg:left-0 w-full sm:min-w-40 sm:w-max bg-white shadow-lg duration-300 rounded-md z-50 ${
          isOpen
            ? "animate-move-from-top"
            : hasInteracted
            ? "opacity-0 animate-move-from-bottom pointer-events-none"
            : "opacity-0 pointer-events-none"
        }`}
        style={isOpen ? { top: "60px" } : { top: "-60px" }}
      >
        {dropdownItems ? (
          <div className="border border-b-2 border-b-gray-600 rounded-lg border-gray-600">
            <div className="py-2 text-[#404040] flex flex-col">
              {dropdownItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.subMenu ? (
                    <div
                      className="px-4 pt-2 hover:bg-gray-100 w-full flex justify-between items-center cursor-pointer"
                      onClick={() => handleSubMenuToggle(item.label)}
                    >
                      {item.label}
                      <span className="ml-2 pl-8">
                        {activeSubMenu === item.label ? "-" : "+"}
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="px-4 pt-2 hover:bg-gray-100 w-full flex justify-between items-center"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.subMenu && activeSubMenu === item.label && (
                    <div
                      className={`py-2 transition-all ease-out duration-300 pl-10`}
                    >
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-1 hover:bg-gray-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}