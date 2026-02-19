import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 text-white"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 mx-auto h-64 max-w-3xl rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-60 w-60 rounded-full bg-yellow-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-32 -z-10 h-60 w-60 rounded-full bg-sky-400/15 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center space-y-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/70 bg-yellow-400/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-yellow-300">
            Contact
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-100 md:text-4xl">
            Let&apos;s connect and
            <span className="text-yellow-300"> collaborate</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-slate-300">
            Have a project in mind, want to collaborate, or just say hello?
            Feel free to reach out through email or LinkedIn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="grid items-center gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]"
        >
          <div className="space-y-5">
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-black/40 backdrop-blur">
              <p className="mb-4 text-sm text-slate-200">
                I&apos;m open to internship opportunities, freelance work, or
                collaborative projects related to front-end development, UI/UX, and Business Analyst.
              </p>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:tesyarakhel@gmail.com"
                  className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 px-4 py-3 text-left text-slate-50 transition hover:bg-white/20 hover:shadow-lg hover:shadow-yellow-400/30"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-medium">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-300/90 text-slate-900 text-xs font-semibold">
                      @
                    </span>
                    Gmail
                  </span>
                  <span className="text-xs text-slate-200">
                    <span className="underline">tesyarakhel@gmail.com</span>
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tesya-rakhel"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-3 rounded-2xl bg-white/5 px-4 py-3 text-left text-slate-50 transition hover:bg-white/15 hover:shadow-lg hover:shadow-sky-400/30"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-medium">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold">
                      in
                    </span>
                    LinkedIn
                  </span>
                  <span className="text-xs text-slate-200">
                    linkedin.com/in/tesya-rakhel
                  </span>
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              I usually respond within a few days. Feel free to include a brief
              intro and what you&apos;d like to collaborate on.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-300/35 via-amber-400/15 to-indigo-600/50 p-[1px] shadow-2xl shadow-black/60"
          >
            <div className="h-full rounded-3xl bg-slate-950/85 p-8">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                Quick note
              </p>
              <p className="mb-6 text-sm leading-relaxed text-slate-100">
                I enjoy collaborating on projects that combine clean design, thoughtful
                user experience, and clear communication. If you're building something
                meaningful in front-end development, UI/UX, or product collaboration,
                I&apos;d be happy to connect.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-white/5 px-3 py-1 text-slate-200">
                  Front-End Development
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-slate-200">
                  UI/UX Collaboration
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-slate-200">
                  Business Analyst
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-slate-200">
                  Open to Remote Work
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
