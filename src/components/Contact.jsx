export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Let&apos;s Connect</h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Have a project in mind, want to collaborate, or just say hello?
            Feel free to reach out through email or LinkedIn.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] items-center">
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-slate-200 mb-4">
                I&apos;m open to internship opportunities, freelance work, or
                collaborative projects related to front-end development and UI/UX.
              </p>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:tesya@email.com"
                  className="flex items-center justify-between gap-3 rounded-xl bg-white/10 px-4 py-3 text-left transition hover:bg-white/20"
                >
                  <span className="font-medium">Email</span>
                  <span className="text-xs text-slate-200">
                    
                    <span className="underline">tesyarakhel@email.com</span>
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tesya-rakhel"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-3 text-left transition hover:bg-white/15"
                >
                  <span className="font-medium">LinkedIn</span>
                  <span className="text-xs text-slate-200">
                    linkedin.com/in/tesya
                  </span>
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              I usually respond within a few days. Feel free to include a brief
              intro and what you&apos;d like to collaborate on.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-300/30 via-amber-400/10 to-indigo-600/40 p-[1px] shadow-xl shadow-black/50">
            <div className="h-full rounded-3xl bg-slate-950/80 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
                Quick note
              </p>
              <p className="text-sm text-slate-100 leading-relaxed mb-6">
                I enjoy working with people who value clean design, thoughtful
                user experience, and clear communication. If that sounds like
                you, I&apos;d be happy to connect.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-white/5 px-3 py-1 text-slate-200">
                  Front-End Development
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-slate-200">
                  UI/UX Collaboration
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-slate-200">
                  Open to Remote Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
