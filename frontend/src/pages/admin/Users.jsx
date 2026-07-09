import React, { useState } from "react";

const allUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "Editor", status: "Active" },
  { id: 5, name: "Eve Adams", email: "eve@example.com", role: "Viewer", status: "Active" },
  { id: 6, name: "Frank Miles", email: "frank@example.com", role: "Viewer", status: "Inactive" },
];

const roleBadge = {
  Admin: "bg-indigo-50 text-indigo-700",
  Editor: "bg-amber-50 text-amber-700",
  Viewer: "bg-slate-100 text-slate-600",
};

const statusBadge = {
  Active: "bg-emerald-50 text-emerald-700",
  Inactive: "bg-rose-50 text-rose-600",
};

export default function Users() {
  const [search, setSearch] = useState("");

  const filtered = allUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Users</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage all registered users.</p>
        </div>
        <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition-colors cursor-pointer">
          + Invite User
        </button>
      </div>

      {/* Search + Table */}
      <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-50">
          <input
            type="search"
            placeholder="Search by name or email…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:max-w-xs px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm placeholder-slate-400 focus:border-slate-400 focus:bg-white outline-none transition-all"
          />
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-50 bg-slate-50/60">
              <th className="px-5 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Name</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Role</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="px-5 py-3 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0">
                      {u.name[0]}
                    </div>
                    <span className="font-medium text-slate-800">{u.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-slate-500">{u.email}</td>
                <td className="px-5 py-3.5">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${roleBadge[u.role]}`}>{u.role}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${statusBadge[u.status]}`}>{u.status}</span>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <button className="text-xs text-slate-500 hover:text-slate-800 font-medium transition-colors cursor-pointer">Edit</button>
                  <span className="mx-2 text-slate-200">|</span>
                  <button className="text-xs text-rose-500 hover:text-rose-700 font-medium transition-colors cursor-pointer">Remove</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-sm text-slate-400">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
