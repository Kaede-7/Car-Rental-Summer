import React from "react";
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";

const navLinks = [
  { to: "/admin", end: true, label: "Dashboard", icon: "dashboard" },
  { to: "/admin/users", label: "Users", icon: "group" },
  { to: "/admin/settings", label: "Settings", icon: "settings" },
];

const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        gridTemplateRows: "64px 1fr 48px",
        minHeight: "100vh",
      }}
    >
      {/* ── Header ──────────────────────────────── */}
      <header
        style={{ gridColumn: "1 / -1", gridRow: "1" }}
        className="bg-white border-b border-slate-100 flex items-center justify-between px-6 z-10 shadow-sm"
      >
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-md">
            <span className="material-symbols-rounded filled text-white" style={{ fontSize: 18 }}>bolt</span>
          </div>
          <span className="text-base font-bold tracking-tight text-slate-900">
            Web<span className="text-indigo-600">Summer</span>
          </span>
          <span className="ml-1 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
            Admin
          </span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-400 w-48">
            <span className="material-symbols-rounded" style={{ fontSize: 16 }}>search</span>
            <span className="text-xs">Search…</span>
            <kbd className="ml-auto text-[10px] bg-white border border-slate-200 rounded px-1 py-0.5 text-slate-400">⌘K</kbd>
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors cursor-pointer">
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-violet-500 rounded-full ring-2 ring-white"></span>
          </button>

          {/* Avatar */}
          <div className="flex items-center gap-3 border-l border-slate-100 pl-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
              A
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-800 leading-none">Admin</p>
              <p className="text-xs text-slate-400 mt-0.5">admin@websummer.com</p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={() => navigate("/login")}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-red-500 border border-slate-200 hover:border-red-200 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span className="material-symbols-rounded" style={{ fontSize: 15 }}>logout</span>
            Logout
          </button>
        </div>
      </header>

      {/* ── Sidebar ──────────────────────────────── */}
      <aside
        style={{ gridColumn: "1", gridRow: "2 / 4" }}
        className="bg-slate-900 flex flex-col justify-between py-5 px-3 overflow-y-auto"
      >
        <nav className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-3 mb-4">
            Navigation
          </p>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-900/40"
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`material-symbols-rounded ${isActive ? "filled" : ""}`}
                    style={{ fontSize: 20 }}
                  >
                    {link.icon}
                  </span>
                  {link.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="space-y-3">
          {/* Help card */}
          <div className="mx-1 p-3 rounded-xl bg-indigo-600/10 border border-indigo-600/20">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-rounded filled text-indigo-400" style={{ fontSize: 16 }}>help</span>
              <span className="text-xs font-semibold text-indigo-300">Need help?</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">Check docs or reach out to support.</p>
          </div>

          <div className="border-t border-slate-800 pt-4 px-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-md">
                A
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">Admin User</p>
                <p className="text-[10px] text-slate-500">admin@websummer.com</p>
              </div>
              <button className="ml-auto text-slate-600 hover:text-slate-400 transition-colors">
                <span className="material-symbols-rounded" style={{ fontSize: 18 }}>more_vert</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main Content ─────────────────────────── */}
      <main
        style={{ gridColumn: "2", gridRow: "2" }}
        className="bg-slate-50 overflow-y-auto"
      >
        <Outlet />
      </main>

      {/* ── Footer ───────────────────────────────── */}
      <footer
        style={{ gridColumn: "2", gridRow: "3" }}
        className="bg-white border-t border-slate-100 flex items-center justify-between px-6"
      >
        <span className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} WebSummer Admin Panel
        </span>
        <span className="text-xs text-slate-400 flex items-center gap-1">
          <span className="material-symbols-rounded filled text-emerald-400" style={{ fontSize: 12 }}>circle</span>
          All systems operational · v1.0.0
        </span>
      </footer>
    </div>
  );
};

export default AdminLayout;