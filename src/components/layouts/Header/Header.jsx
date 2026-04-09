import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const categories = [
    { name: "Interactive Panel", path: "/products/panel" },
    { name: "Laptop", path: "/products/laptop" },
    { name: "Desktop", path: "/products/desktop" },
    { name: "Electronic Products", path: "/products/Electronic" },
    { name: "Paper Stationery", path: "/products/stationary" },
    { name: "Furniture", path: "/products/furniture" },
    { name: "Solar Products", path: "/products/solar" },
  ];

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 180);
  };

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition duration-300 ${isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">

          {/* Bigger Logo */}
          <div className="flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Company Name */}
          <div className="hidden sm:block leading-tight">
            <h1 className="text-sm sm:text-base md:text-lg font-bold tracking-wide text-slate-900 group-hover:text-blue-600 transition">
              DIGITAL SIXTH SENSE
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wider">
              PVT. LTD.
            </p>
          </div>

        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <NavLink to="/" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                Home
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2.5px] w-full rounded-full bg-blue-600" />
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                About
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2.5px] w-full rounded-full bg-blue-600" />
                )}
              </span>
            )}
          </NavLink>

          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 transition">
              Products
              <HiChevronDown
                className={`text-base transition-transform duration-300 ${showDropdown ? "rotate-180" : ""
                  }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-200 ${showDropdown
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
                }`}
            >
              <div className="p-2">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => {
                      navigate(cat.path);
                      setShowDropdown(false);
                    }}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs opacity-50">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/contact" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                Contact
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2.5px] w-full rounded-full bg-blue-600" />
                )}
              </span>
            )}
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-xl border border-slate-200 p-2 text-slate-700 shadow-sm hover:bg-slate-50 transition"
          >
            {isMobileMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ${isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="space-y-3 px-4 py-4">
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Contact
          </NavLink>

          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="mb-2 px-2 text-sm font-semibold text-slate-900">
              Products
            </p>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    navigate(cat.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-white hover:text-blue-600 transition"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;