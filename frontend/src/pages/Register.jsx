import React, { useState } from "react";
import { Link } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register:", formData);
  };

  return (
    <PublicLayout>
      <div className="w-full max-w-md animate-fade-up">
        {/* Icon + heading */}
        <div className="text-center mb-8">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 items-center justify-center shadow-lg shadow-indigo-200 mb-4">
            <span className="material-symbols-rounded filled text-white" style={{ fontSize: 28 }}>person_add</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Create your account</h1>
          <p className="text-sm text-slate-500 mt-2">Start building with WebSummer today.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-100 rounded-2xl p-8 shadow-xl shadow-slate-100 space-y-5"
        >
          {/* Full Name */}
          <div>
            <label htmlFor="reg-name" className="block text-sm font-medium text-slate-700 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-rounded text-slate-400" style={{ fontSize: 18 }}>badge</span>
              <input
                type="text"
                id="reg-name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="reg-email" className="block text-sm font-medium text-slate-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-rounded text-slate-400" style={{ fontSize: 18 }}>mail</span>
              <input
                type="email"
                id="reg-email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="reg-password" className="block text-sm font-medium text-slate-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-rounded text-slate-400" style={{ fontSize: 18 }}>key</span>
              <input
                type={showPassword ? "text" : "password"}
                id="reg-password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-9 pr-10 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <span className="material-symbols-rounded" style={{ fontSize: 18 }}>
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="reg-confirmPassword" className="block text-sm font-medium text-slate-700 mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-rounded text-slate-400" style={{ fontSize: 18 }}>key</span>
              <input
                type={showConfirm ? "text" : "password"}
                id="reg-confirmPassword"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full pl-9 pr-10 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <span className="material-symbols-rounded" style={{ fontSize: 18 }}>
                  {showConfirm ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
              className="mt-0.5 w-4 h-4 accent-indigo-600 cursor-pointer rounded"
            />
            <span className="text-sm text-slate-500">
              I agree to the{" "}
              <a href="#" className="text-indigo-600 font-semibold hover:underline">
                Terms &amp; Conditions
              </a>
            </span>
          </label>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all shadow-md shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-px active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-rounded filled" style={{ fontSize: 18 }}>person_add</span>
            Create Account
          </button>

          <div className="text-center pt-1">
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-indigo-600 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </PublicLayout>
  );
};

export default Register;