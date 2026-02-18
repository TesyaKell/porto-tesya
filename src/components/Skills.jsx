const skillCategories = [
  {
    title: "Frontend Foundation",
    subtitle: "Layout, semantics, and accessibility",
    icon: "🧱",
    items: [
      { name: "HTML & Semantic Markup", level: "Advanced" },
      { name: "CSS / Tailwind CSS / Bootstrap CSS", level: "Advanced" },
      { name: "Responsive Web Design", level: "Advanced" },
    ],
  },
  {
    title: "JavaScript & React",
    subtitle: "Interactive, component-based interfaces",
    icon: "⚛️",
    items: [
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "React & Component Design", level: "Intermediate" },
      { name: "REST API Integration", level: "Intermediate" },
    ],
  },
  {
    title: "Backend & Tools",
    subtitle: "Workflow, collaboration, and basic backend",
    icon: "🛠️",
    items: [
      { name: "Laravel Basics", level: "Advanced" },
      { name: "Git & Version Control", level: "Advanced" },
    ],
  },
  {
    title: "Business Analysis",
    subtitle: "Requirement analysis and system planning",
    icon: "📊",
    items: [
      { name: "Requirement Gathering & Analysis", level: "Intermediate" },
      {
        name: "Business Process Modeling (UML / Flowchart)",
        level: "Intermediate",
      },
      { name: "System Documentation", level: "Intermediate" },
      { name: "UI/UX Wireframing (Figma)", level: "Advanced" },
      { name: "Problem Analysis & Solution Design", level: "Intermediate" },
    ],
  },
];

const levelConfig = {
  Beginner: {
    width: "w-1/3",
    barColor: "bg-amber-400",
    badge: "bg-amber-100 text-amber-700",
  },
  Intermediate: {
    width: "w-2/3",
    barColor: "bg-blue-500",
    badge: "bg-blue-100 text-blue-700",
  },
  Advanced: {
    width: "w-full",
    barColor: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-50 py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-72 bg-gradient-to-b from-primary/15 via-transparent to-transparent blur-3xl" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/90">
                My Skillset
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-[2.3rem]">
                Skills & Technologies
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                A blend of front-end technologies, basic backend knowledge, and
                collaboration tools I use to build modern, responsive, and
                maintainable web experiences.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 text-xs text-slate-500 md:items-end">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1 text-[11px] font-medium text-primary shadow-sm shadow-primary/5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Continuously learning & improving
              </span>

              <p className="text-[11px] text-right">
                Focused on writing clean, reusable components and accessible UI.
              </p>
            </div>
          </div>

          <div className="grid gap-7 grid-cols-1 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="group relative flex h-full min-h-[320px] flex-col rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5 shadow-sm shadow-slate-100 transition duration-300 ease-out hover:-translate-y-1 hover:border-primary/50 hover:shadow-md hover:shadow-primary/10"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-sky-100/40 opacity-0 blur-sm transition group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-lg">
                    {category.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <ul className="relative mt-5 space-y-4 flex-1">
                  {category.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="flex-1">
                        <div className="flex justify-between text-sm font-medium text-slate-900">
                          <span>{skill.name}</span>
                        </div>

                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-1.5 rounded-full transition-all duration-500 ${levelConfig[skill.level].barColor} ${levelConfig[skill.level].width}`}
                          />
                        </div>
                      </div>

                      <span
                        className={`inline-flex min-w-[90px] justify-center items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${levelConfig[skill.level].badge}`}
                      >
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
