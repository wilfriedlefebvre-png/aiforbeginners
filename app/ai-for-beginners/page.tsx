import React from "react";

export default function AIBeginnersPage() {
  return (
    <main className="min-h-screen text-slate-50 relative">
      {/* Background image */}
      <div 
        className="fixed inset-0 -z-10 bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'contain',
          backgroundColor: '#0f172a'
        }}
      />
      
      {/* Overlay for readability */}
      <div className="fixed inset-0 -z-10 bg-slate-950/60" />

      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-16 relative z-10">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[3fr,2fr] items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-slate-900/60 px-3 py-1 text-xs font-medium text-sky-200 mb-4">
              👵🧠 AI for Beginners & Seniors
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Learn AI in{" "}
              <span className="text-sky-300">simple, everyday language</span>
              .
            </h1>
            <p className="mt-4 text-slate-200 max-w-xl">
              I help complete beginners and seniors understand and use AI tools
              like ChatGPT safely and confidently — at your pace, with real-life
              examples, on your own phone, tablet, or computer.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition"
              >
                Book a free intro call
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-50 hover:border-sky-400 hover:text-sky-200 transition"
              >
                See services for seniors
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              • One-on-one lessons • Small group classes • In-person or online
            </p>
          </div>

          {/* Hero card */}
          <div className="rounded-3xl border border-slate-700/70 bg-slate-900/60 p-6 shadow-2xl shadow-black/40">
            <h2 className="text-lg font-semibold mb-2">
              What you'll be able to do
            </h2>
            <p className="text-sm text-slate-300 mb-4">
              After a few sessions, you (or your parent/grandparent) will feel
              more confident with technology and AI.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-1 text-sky-300">✓</span>
                Use AI to write emails, letters, and messages
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-sky-300">✓</span>
                Get help with translations, recipes, travel and more
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-sky-300">✓</span>
                Learn how to avoid scams and recognize fake messages
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-sky-300">✓</span>
                Have your own "AI assistant" for daily life
              </li>
            </ul>
          </div>
        </section>

        {/* AI FOR BEGINNERS SECTION */}
        <section id="ai-beginners" className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              AI for Beginners — start from zero, no problem
            </h2>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Step by step • No jargon
            </span>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
              <h3 className="font-semibold text-lg mb-2">
                1. Understand what AI is
              </h3>
              <p className="text-sm text-slate-300">
                Simple explanations of what AI does, what it can't do, and how
                it fits into everyday life. No technical background needed.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
              <h3 className="font-semibold text-lg mb-2">
                2. Learn by doing, not by theory
              </h3>
              <p className="text-sm text-slate-300">
                We practice directly inside tools like ChatGPT so you can see
                results in real time: writing, planning, translating, and more.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
              <h3 className="font-semibold text-lg mb-2">
                3. Personalized cheat sheets
              </h3>
              <p className="text-sm text-slate-300">
                You get simple printed or PDF guides with example questions you
                can ask, tailored to your daily life and interests.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES FOR SENIORS */}
        <section id="services" className="mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Services I provide for seniors & families
          </h2>
          <p className="mt-3 text-slate-200 max-w-2xl">
            I specialize in helping seniors, retirees, and their families use AI
            safely. Sessions are patient, friendly, and adapted to each person's
            comfort with technology.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
              <h3 className="font-semibold text-lg mb-2">
                👤 1-on-1 AI Coaching (Senior Friendly)
              </h3>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>• Step-by-step introduction to AI tools like ChatGPT</li>
                <li>• Help using AI for letters, recipes, hobbies or travel</li>
                <li>• Written notes so nothing gets forgotten after the session</li>
              </ul>
              <p className="mt-3 text-sm text-slate-400">
                Available in-person (local) or online via Zoom.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
              <h3 className="font-semibold text-lg mb-2">
                👨‍👩‍👦 Family & Caregiver Support
              </h3>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>• Show you how AI can help organize medications & notes</li>
                <li>• Create reminders, checklists and schedules with AI</li>
                <li>• Guidance on safe use of AI and avoiding misinformation</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
              <h3 className="font-semibold text-lg mb-2">
                🏡 On-Site Group Classes (Retirement communities)
              </h3>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>• 60–90 minute workshops tailored to your residents</li>
                <li>• Live demonstrations with projector/TV</li>
                <li>• Printed handouts for everyone</li>
              </ul>
              <p className="mt-3 text-sm text-slate-400">
                Perfect for activity directors looking for a modern, educational
                program.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
              <h3 className="font-semibold text-lg mb-2">
                🔐 Online Safety & Scam Awareness
              </h3>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>• How to spot fake emails, texts and websites</li>
                <li>• How AI can be misused — and how to stay safe</li>
                <li>• Easy rules to follow before clicking any link</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS + PRICING */}
        <section className="mt-16 sm:mt-20 grid gap-10 lg:grid-cols-[3fr,2fr] items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              How it works
            </h2>
            <ol className="mt-4 space-y-4 text-slate-200 text-sm">
              <li>
                <span className="font-semibold text-sky-300">1. Free call</span>
                <br />
                We discuss who the lessons are for (you, your parent, your
                residents) and what you'd like AI to help with.
              </li>
              <li>
                <span className="font-semibold text-sky-300">
                  2. Personalized plan
                </span>
                <br />
                I create a simple plan: number of sessions, topics, and format
                (online, in-person, group).
              </li>
              <li>
                <span className="font-semibold text-sky-300">
                  3. Gentle, practical lessons
                </span>
                <br />
                We learn by doing. I move at the learner's pace and repeat as
                needed — no pressure, no judgment.
              </li>
              <li>
                <span className="font-semibold text-sky-300">
                  4. Follow-up & support
                </span>
                <br />
                After each session, you receive a summary and example prompts
                you can reuse anytime.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-sky-500/60 bg-slate-900/80 p-6 shadow-xl shadow-sky-500/30">
            <h3 className="text-lg font-semibold mb-2">Pricing (In-Person – Aliso Viejo)</h3>
            <p className="text-sm text-slate-200 mb-4">
              All sessions are in-person and tailored to each learner. I come directly to you in Aliso Viejo.
            </p>
            <ul className="space-y-3 text-sm text-slate-100">
              <li className="flex justify-between gap-4">
                <span>1-on-1 Senior Session (60 min)</span>
                <span className="font-semibold">$120</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>3-Session Beginner Pack</span>
                <span className="font-semibold">$300</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Retirement Community Workshop (Aliso Viejo area)</span>
                <span className="font-semibold">Contact for quote</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              Travel fees may apply outside Aliso Viejo.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-semibold">FAQ</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 text-sm text-slate-200">
            <div>
              <h3 className="font-semibold mb-1">
                Do we need any experience with computers?
              </h3>
              <p className="text-slate-300">
                No. I regularly work with people who are brand new to
                smartphones, tablets or AI. We go slowly, and I can help with
                basic device setup if needed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Is this safe for seniors to use?
              </h3>
              <p className="text-slate-300">
                Yes — when used correctly. I teach simple rules to stay safe:
                what not to share, how to spot scams, and when to ask a family
                member for help.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Can you come to our retirement community?
              </h3>
              <p className="text-slate-300">
                Yes, depending on location. I offer on-site workshops and can
                coordinate with your activity director to design the perfect
                session for your residents.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Can family members join the sessions?
              </h3>
              <p className="text-slate-300">
                Absolutely. Many families like to join the first session to
                learn together and understand how AI can support everyone.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mt-16 sm:mt-20 mb-10 rounded-3xl border border-sky-500/50 bg-slate-900/80 p-6 sm:p-8 shadow-xl shadow-sky-500/25"
        >
          <div className="grid gap-8 md:grid-cols-[3fr,2fr] items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Ready to schedule an in-person session?
              </h2>
              <p className="mt-3 text-sm text-slate-200 max-w-xl">
                All sessions take place in person in Aliso Viejo. Send me a message with
                who the lessons are for, and I&apos;ll reply with available times.
              </p>

              <form className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-600 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-sky-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-600 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-sky-400"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Who is this for?
                  </label>
                  <textarea
                    className="w-full rounded-xl border border-slate-600 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-sky-400 min-h-[90px]"
                    placeholder="Example: My 78-year-old dad who wants help learning AI for daily life."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition"
                >
                  Send message
                </button>
              </form>
            </div>

            <div className="space-y-3 text-sm text-slate-200">
              <h3 className="font-semibold text-lg">Contact details</h3>
              <p>
                📧 Email:{" "}
                <a
                  href="mailto:Wilfried.lefebvre@gmail.com"
                  className="text-sky-300 underline decoration-sky-500/60 underline-offset-2"
                >
                  Wilfried.lefebvre@gmail.com
                </a>
              </p>
              <p>📍 In-Person Area: Aliso Viejo, California</p>
              <p className="text-slate-400 text-xs">
                I teach seniors and beginners directly at their home or community center
                in Aliso Viejo.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

