import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 bg-white text-slate-500 py-6">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} WebSummer. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
          <Link to="/login" className="hover:text-slate-900 transition-colors">Sign In</Link>
        </div>
      </div>
    </footer>
  );
}
