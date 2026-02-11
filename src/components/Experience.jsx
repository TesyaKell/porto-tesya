export default function Experience() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Experience
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              Professional and project-based experience where I collaborate with
              teams and contribute to real-world solutions.
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-slate-900 text-slate-50 px-4 py-1 text-xs font-medium">
            Currently working in IT System Support
          </span>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-primary/80" />
          <div className="relative grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] md:gap-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                IT System Support
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                September 2025 – Present
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Supporting internal systems and working closely with both
                business and technical teams to ensure smooth operations.
              </p>
            </div>

            <div className="mt-2 space-y-2 text-sm text-slate-700">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Key Contributions
              </p>
              <ul className="space-y-2">
                <li>
                  Collaborated with business and technical teams to understand
                  requirements and translate them into actionable tasks.
                </li>
                <li>
                  Supported system development, testing, and troubleshooting to
                  maintain reliable performance.
                </li>
                <li>
                  Assisted frontend implementation and helped refine user
                  experience for internal tools.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
