import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const features = [
  {
    title: "Lightning Fast",
    desc: "Built with Vite for blazing-fast development and production builds.",
    icon: "bolt",
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
    text: "text-amber-600",
  },
  {
    title: "Fully Responsive",
    desc: "Looks great on every device — from mobile to widescreen.",
    icon: "devices",
    color: "from-sky-400 to-cyan-500",
    bg: "bg-sky-50",
    text: "text-sky-600",
  },
  {
    title: "Admin Ready",
    desc: "A complete admin dashboard with routing, sidebar, and user management.",
    icon: "admin_panel_settings",
    color: "from-violet-500 to-indigo-600",
    bg: "bg-violet-50",
    text: "text-violet-600",
  },
  {
    title: "Secure Auth",
    desc: "Login and registration flows with form validation built in.",
    icon: "shield_lock",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
];

const stats = [
  { value: "10x", label: "Faster development" },
  { value: "99%", label: "Uptime guarantee" },
  { value: "50+", label: "Ready components" },
  { value: "∞", label: "Scalability" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative flex-grow flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,58,237,0.12),transparent)]" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-200 rounded-full blur-3xl opacity-25 -z-10 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-20 -z-10 animate-pulse" style={{ animationDelay: "1s" }} />

        <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-violet-700 bg-violet-100 px-3 py-1.5 rounded-full mb-6 uppercase border border-violet-200 animate-fade-up">
          <span className="material-symbols-rounded filled text-violet-500" style={{ fontSize: 14 }}>new_releases</span>
          Now in Beta
        </span>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-[1.1] animate-fade-up" style={{ animationDelay: "0.05s" }}>
          Build beautiful{" "}
          <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
            products
          </span>
          , faster.
        </h1>

        <p className="mt-6 text-lg text-slate-500 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
          WebSummer is a modern starter template with a clean public site, a full admin
          dashboard, and proper routing — ready for your next project.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="material-symbols-rounded filled" style={{ fontSize: 18 }}>rocket_launch</span>
            Get Started Free
          </Link>
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 text-sm font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all"
          >
            <span className="material-symbols-rounded" style={{ fontSize: 18 }}>dashboard</span>
            View Dashboard
            <span className="material-symbols-rounded text-slate-400" style={{ fontSize: 16 }}>arrow_forward</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-slate-900">{s.value}</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ──────────────────────────────────── */}
      <section id="features" className="py-24 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full uppercase border border-indigo-100 mb-4">
              <span className="material-symbols-rounded filled" style={{ fontSize: 13 }}>auto_awesome</span>
              Features
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900">Everything you need</h2>
            <p className="mt-3 text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
              A complete, production-ready foundation so you can focus on what makes your product unique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group p-6 border border-slate-100 rounded-2xl bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-rounded filled text-white" style={{ fontSize: 22 }}>{f.icon}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────── */}
      <section id="pricing" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-indigo-700 to-sky-700 -z-10" />
        <div className="absolute inset-0 opacity-10 -z-10" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="mx-auto max-w-2xl text-center text-white">
          <span className="material-symbols-rounded filled text-yellow-300 mb-4 block" style={{ fontSize: 40 }}>celebration</span>
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">Ready to get started?</h2>
          <p className="text-indigo-200 mb-10 max-w-md mx-auto text-sm leading-relaxed">
            Create a free account and start building today. No credit card required. Cancel anytime.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 text-sm font-bold hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="material-symbols-rounded filled" style={{ fontSize: 18 }}>person_add</span>
            Create Free Account
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
