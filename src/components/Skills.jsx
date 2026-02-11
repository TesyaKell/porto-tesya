const skills = [
  "HTML & Semantic Markup",
  "CSS / Tailwind CSS",
  "JavaScript (ES6+)",
  "React & Component Design",
  "Responsive Web Design",
  "Laravel Basics",
  "REST API Integration",
  "Git & Version Control",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Skills
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              A blend of front-end technologies and supporting tools that I use
              to build modern, responsive, and maintainable interfaces.
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary">
            Continuously learning &amp; improving
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-md hover:shadow-primary/10"
            >
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="text-lg">✦</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{skill}</p>
                <p className="mt-1 text-[13px] text-slate-500">
                  Comfortable applying this in real projects and exploring best
                  practices.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
