import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[420px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient overlay to improve text contrast; doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Live Identity Preview
          </span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Your Account, Your Digital Identity
          </h1>
          <p className="mt-2 max-w-xl text-sm text-white/80">
            Edit your profile photo, name, and username. Watch the holographic card come alive
            as you personalize your details.
          </p>
        </div>
      </div>
    </section>
  );
}
