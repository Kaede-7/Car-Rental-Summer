import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Users", value: "2,841", change: "+12%", up: true },
  { label: "Active Sessions", value: "134", change: "+5%", up: true },
  { label: "New Signups", value: "48", change: "-3%", up: false },
  { label: "Uptime", value: "99.9%", change: "stable", up: true },
];

const activity = [
  { name: "Alice Johnson", action: "Created a new account", time: "2 min ago" },
  { name: "Bob Smith", action: "Updated profile settings", time: "15 min ago" },
  { name: "Carol White", action: "Submitted a support ticket", time: "1 hr ago" },
  { name: "David Lee", action: "Exported user data (CSV)", time: "3 hr ago" },
  { name: "Eve Adams", action: "Changed password", time: "Yesterday" },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-0.5">Welcome back, Admin. Here's what's happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{s.label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{s.value}</p>
            <span className={`text-xs font-medium mt-2 inline-block ${s.up ? "text-emerald-600" : "text-rose-500"}`}>
              {s.change} from last week
            </span>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-50 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800">Recent Activity</h2>
          <Link to="/admin/users" className="text-xs text-indigo-600 font-medium hover:underline">
            View all users →
          </Link>
        </div>
        <ul className="divide-y divide-slate-50">
          {activity.map((item, i) => (
            <li key={i} className="px-5 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                  {item.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.action}</p>
                </div>
              </div>
              <span className="text-xs text-slate-400 shrink-0">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
