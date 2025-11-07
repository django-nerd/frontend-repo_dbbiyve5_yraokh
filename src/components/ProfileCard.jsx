import React from 'react';
import { Check, User } from 'lucide-react';

export default function ProfileCard({ avatarUrl, name, username }) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1 shadow-xl ring-1 ring-white/10">
      <div className="rounded-2xl bg-slate-900/60 p-5 backdrop-blur">
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-xl ring-1 ring-white/10">
            {avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-800">
                <User className="h-8 w-8 text-slate-400" />
              </div>
            )}
            <span className="absolute -right-1 -top-1 inline-flex items-center justify-center rounded-full bg-cyan-500 p-1 shadow-md ring-2 ring-slate-900">
              <Check className="h-3.5 w-3.5 text-white" />
            </span>
          </div>

          <div className="flex flex-1 flex-col">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-white">{name || 'Your Name'}</h3>
              <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs text-cyan-300 ring-1 ring-cyan-500/20">
                Verified
              </span>
            </div>
            <p className="text-sm text-slate-400">@{username || 'username'}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <Stat label="Followers" value="12.4k" />
          <Stat label="Following" value="823" />
          <Stat label="Posts" value="182" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/20 to-amber-400/20 blur-2xl" />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/5 p-3 text-center ring-1 ring-white/10">
      <div className="text-base font-semibold text-white">{value}</div>
      <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
    </div>
  );
}
