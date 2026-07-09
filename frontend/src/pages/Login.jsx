import React, { useState } from "react";
import { Link } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", form);
  };

  return (
    <PublicLayout>
      <div className="w-full max-w-md animate-fade-up">
        {/* Icon + heading */}
        <div className="text-center mb-8">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 items-center justify-center shadow-lg shadow-indigo-200 mb-4">
            <span className="material-symbols-rounded filled text-white" style={{ fontSize: 28 }}>lock</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
          <p className="text-sm text-slate-500 mt-2">Sign in to your account to continue.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-100 rounded-2xl p-8 shadow-xl shadow-slate-100 space-y-5"
        >
          {/* Email */}
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-slate-700 mb-1.5">
              Email address
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-rounded text-slate-400" style={{ fontSize: 18 }}>mail</span>
              <input
                type="email"
                id="login-email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="login-password" className="text-sm font-medium text-slate-700">
                Password
              </label>
              <a href="#" className="text-xs text-indigo-600 hover:underline flex items-center gap-0.5">
                <span className="material-symbols-rounded" style={{ fontSize: 13 }}>help</span>
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-rounded text-slate-400" style={{ fontSize: 18 }}>key</span>
              <input
                type={showPassword ? "text" : "password"}
                id="login-password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full pl-9 pr-10 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Toggle password visibility"
              >
                <span className="material-symbols-rounded" style={{ fontSize: 18 }}>
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all shadow-md shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-px active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-rounded filled" style={{ fontSize: 18 }}>login</span>
            Sign In
          </button>

          <div className="text-center pt-1">
            <p className="text-sm text-slate-500">
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold text-indigo-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          {/* Quick admin link */}
          <div className="border-t border-slate-100 pt-4 text-center">
            <Link to="/admin" className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors">
              <span className="material-symbols-rounded" style={{ fontSize: 13 }}>dashboard</span>
              Go to Admin Dashboard
              <span className="material-symbols-rounded" style={{ fontSize: 13 }}>arrow_forward</span>
            </Link>
          </div>
        </form>
      </div>
    </PublicLayout>
  );
};

export default Login;