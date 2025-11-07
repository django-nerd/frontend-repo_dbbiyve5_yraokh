import React, { useState } from 'react';

export default function ProfileForm({ initial, onChange }) {
  const [form, setForm] = useState({
    avatarUrl: initial?.avatarUrl || '',
    name: initial?.name || '',
    username: initial?.username || '',
  });

  function update(key, value) {
    const next = { ...form, [key]: value };
    setForm(next);
    onChange?.(next);
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-slate-200">Profile Photo URL</label>
          <input
            type="url"
            placeholder="https://..."
            value={form.avatarUrl}
            onChange={(e) => update('avatarUrl', e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
          />
          <p className="mt-1 text-xs text-slate-400">Use a direct image link (JPG, PNG, or GIF).</p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-200">Name</label>
          <input
            type="text"
            placeholder="Jane Doe"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-200">Username</label>
          <div className="flex items-center rounded-lg border border-white/10 bg-white/5 focus-within:border-cyan-500">
            <span className="px-3 text-slate-400">@</span>
            <input
              type="text"
              placeholder="username"
              value={form.username}
              onChange={(e) => update('username', e.target.value.replace(/\s+/g, '').toLowerCase())}
              className="w-full bg-transparent py-2 pr-3 text-white placeholder:text-slate-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => onChange?.(form)}
          className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={() => {
            const cleared = { avatarUrl: '', name: '', username: '' };
            setForm(cleared);
            onChange?.(cleared);
          }}
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
