import React, { useState } from 'react';
import AccountLayout from './components/AccountLayout';
import Hero from './components/Hero';
import ProfileCard from './components/ProfileCard';
import ProfileForm from './components/ProfileForm';

export default function App() {
  const [profile, setProfile] = useState({
    avatarUrl: '',
    name: '',
    username: '',
  });

  return (
    <AccountLayout>
      <Hero />

      <main className="mx-auto -mt-10 max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-[1fr,1.2fr]">
          <div className="order-2 md:order-1">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">Edit Profile</h2>
              <ProfileForm initial={profile} onChange={setProfile} />
            </section>
          </div>

          <div className="order-1 md:order-2">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">Live Preview</h2>
              <ProfileCard {...profile} />
            </section>
          </div>
        </div>
      </main>
    </AccountLayout>
  );
}
