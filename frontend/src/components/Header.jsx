import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-md group-hover:shadow-indigo-300 transition-shadow">
              <span className="material-symbols-rounded filled text-white" style={{ fontSize: 18 }}>bolt</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Web<span className="text-indigo-600">Summer</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "text-indigo-600 bg-indigo-50" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`
              }
            >
              <span className="material-symbols-rounded" style={{ fontSize: 16 }}>home</span>
              Home
            </NavLink>
            <a
              href="#features"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <span className="material-symbols-rounded" style={{ fontSize: 16 }}>auto_awesome</span>
              Features
            </a>
            <a
              href="#pricing"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <span className="material-symbols-rounded" style={{ fontSize: 16 }}>sell</span>
              Pricing
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors px-3 py-2 rounded-lg hover:bg-indigo-50"
            >
              <span className="material-symbols-rounded" style={{ fontSize: 16 }}>login</span>
              Sign In
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-indigo-300 hover:-translate-y-px active:translate-y-0"
            >
              <span className="material-symbols-rounded filled" style={{ fontSize: 16 }}>rocket_launch</span>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
