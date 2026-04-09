import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
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
    { name: "Paper Stationary", path: "/products/stationary" },
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
    `relative text-sm font-medium transition duration-300 ${isActive
      ? "text-blue-600"
      : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br p-2 shadow-sm ring-1 ring-blue-100">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto sm:h-12 object-contain"
            />
          </div>

          <div className="hidden sm:block leading-tight">
            <h1 className="text-sm lg:text-base font-extrabold tracking-wide text-slate-900 group-hover:text-blue-600 transition">
              DIGITALT SIXTH SENSE
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              PVT. LTD.
            </p>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                Home
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-600" />
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                About
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-600" />
                )}
              </span>
            )}
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            {({ isActive }) => (
              <span className="relative">
                Contact
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-600" />
                )}
              </span>
            )}
          </NavLink>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-blue-600 transition">
              Products
              <HiChevronDown
                className={`text-base transition-transform duration-300 ${showDropdown ? "rotate-180" : ""
                  }`}
              />
            </button>

            <div
              className={`absolute left-0 top-full mt-3 w-72 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-200 ${showDropdown
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
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="rounded-full border-slate-300 px-5 hover:border-blue-500 hover:text-blue-600 transition"
          >
            Login
          </Button>
          <Button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 text-white shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            Signup
          </Button>
        </div>

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

          <div className="flex gap-3 pt-2">
            <Button variant="outline" className="flex-1 rounded-full">
              Login
            </Button>
            <Button className="flex-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              Signup
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;