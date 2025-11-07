import React from 'react';

export default function AccountLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="text-sm font-semibold tracking-tight">Account</span>
          </div>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <a href="#" className="hover:text-white">Overview</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Billing</a>
            <a href="#" className="rounded-lg bg-white/5 px-3 py-1.5 text-white ring-1 ring-white/10 hover:bg-white/10">Settings</a>
          </nav>
        </div>
      </header>

      {children}

      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Identity. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
