import React, { useState } from "react";

export default function Settings() {
  const [profile, setProfile] = useState({ name: "Admin User", email: "admin@websummer.com" });
  const [notifications, setNotifications] = useState({ email: true, push: false, weekly: true });

  const toggle = (key) => setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="p-6 space-y-6 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500 mt-0.5">Manage your account and preferences.</p>
      </div>

      {/* Profile */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-6 space-y-4">
        <h2 className="text-sm font-bold text-slate-800">Profile</h2>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:border-slate-400 focus:bg-white outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:border-slate-400 focus:bg-white outline-none transition-all"
          />
        </div>
        <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition-colors cursor-pointer">
          Save Changes
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-6 space-y-4">
        <h2 className="text-sm font-bold text-slate-800">Notifications</h2>
        {[
          { key: "email", label: "Email Notifications", desc: "Receive updates via email." },
          { key: "push", label: "Push Notifications", desc: "Get real-time push alerts." },
          { key: "weekly", label: "Weekly Digest", desc: "A summary sent every Monday." },
        ].map(({ key, label, desc }) => (
          <div key={key} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
            <div>
              <p className="text-sm font-medium text-slate-800">{label}</p>
              <p className="text-xs text-slate-400">{desc}</p>
            </div>
            <button
              onClick={() => toggle(key)}
              className={`relative w-10 h-5.5 rounded-full transition-colors cursor-pointer ${
                notifications[key] ? "bg-indigo-600" : "bg-slate-200"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4.5 h-4.5 bg-white rounded-full shadow transition-transform ${
                  notifications[key] ? "translate-x-4" : ""
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Danger Zone */}
      <div className="bg-white border border-rose-100 rounded-xl shadow-sm p-6 space-y-3">
        <h2 className="text-sm font-bold text-rose-600">Danger Zone</h2>
        <p className="text-sm text-slate-500">These actions are irreversible. Proceed with caution.</p>
        <button className="px-4 py-2 text-sm font-semibold rounded-lg border border-rose-200 text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer">
          Delete Account
        </button>
      </div>
    </div>
  );
}
