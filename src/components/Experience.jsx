import { motion } from "framer-motion";

const experiences = [
  {
    title: "IT System Support Plantation",
    company: "Internship at Great Giant Foods (GGF)",
    image: "/ggf.png", // ← logo company
    period: "September 2025 – Present",
    location: "Lampung, Indonesia",
    highlight:
      "Bridging communication between business needs and technical implementation.",
    badge: "Current Role",
    badgeColor:
      "bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-sm shadow-emerald-100/80",
    points: [
      "Collaborate with business and technical teams to understand requirements and translate them into clear, actionable tasks.",
      "Support system development, testing, and troubleshooting to maintain reliable and stable internal applications.",
      "Assist frontend implementation and help refine user experience for internal tools and dashboards.",
    ],
  },
  {
    title: "Lecturer Assistant for Object Oriented Programming Batch 2024/2025",
    company: "Lecturer Assistant",
    image: "/uajy.png",
    period: "February 2025 – July 2025",
    location: "Yogyakarta, Indonesia",
    highlight:
      "Designing and building web & mobile prototypes for real use cases.",
    badge: "Past Role",
    badgeColor:
      "bg-sky-100 text-sky-800 border border-sky-200 shadow-sm shadow-sky-100/80",
    points: [
      "Developed web-based and mobile prototypes such as SIMBA, ReUseMart, and salon booking systems.",
      "Created UI/UX designs in Figma, focusing on user flow, usability, and visual consistency.",
      "Worked in teams to present solutions, document systems, and align expectations with stakeholders.",
    ],
  },
  {
    title: "English and General Tutor",
    company: "Tutor",
    image: "/uajy.png",
    period: "February 2024 – June 2024",
    location: "Yogyakarta, Indonesia",
    highlight:
      "Designing and building web & mobile prototypes for real use cases.",
    badge: "Past Role",
    badgeColor:
      "bg-sky-100 text-sky-800 border border-sky-200 shadow-sm shadow-sky-100/80",
    points: [
      "Developed web-based and mobile prototypes such as SIMBA, ReUseMart, and salon booking systems.",
      "Created UI/UX designs in Figma, focusing on user flow, usability, and visual consistency.",
      "Worked in teams to present solutions, document systems, and align expectations with stakeholders.",
    ],
  },
  {
    title: "English Tutor",
    company: "Tutor",
    image: "/uajy.png",
    period: "November 2023 – January 2024",
    location: "Yogyakarta, Indonesia",
    highlight:
      "Designing and building web & mobile prototypes for real use cases.",
    badge: "Past Role",
    badgeColor:
      "bg-sky-100 text-sky-800 border border-sky-200 shadow-sm shadow-sky-100/80",
    points: [
      "Developed web-based and mobile prototypes such as SIMBA, ReUseMart, and salon booking systems.",
      "Created UI/UX designs in Figma, focusing on user flow, usability, and visual consistency.",
      "Worked in teams to present solutions, document systems, and align expectations with stakeholders.",
    ],
  },
];

const organizationalExperiences = [
  {
    title: "Secretary",
    organization: "Senat Mahasiswa FTI UAJY",
    period: "October 2023 – October 2024",
    location: "Yogyakarta, Indonesia",
    focus: "Supporting events, coordination, and documentation within student communities.",
    tag: "Organizational",
    colors: {
      from: "from-violet-500/80",
      to: "to-sky-400/80",
      badge: "bg-violet-100 text-violet-800 border border-violet-200",
    },
    points: [
      "Helped coordinate student events and internal meetings in small teams.",
      "Contributed to documentation, note-taking, and follow-up after discussions.",
      "Collaborated with different divisions to align schedules and tasks.",
    ],
  },
  {
    title: "Coordinator of Secretariat and Ticketing",
    organization: "Sparkfest 12",
    period: "January 2024 - June 2024",
    location: "Yogyakarta, Indonesia",
    focus: "Hands-on experience managing timelines, communication, and execution for events.",
    tag: "Committee",
    colors: {
      from: "from-amber-400/90",
      to: "to-pink-500/90",
      badge: "bg-amber-100 text-amber-800 border border-amber-200",
    },
    points: [
      "Participated in committees handling registration, liaison, and logistic support.",
      "Worked with cross-functional teams to ensure events run smoothly.",
      "Built confidence in communication, coordination, and problem-solving under time pressure.",
    ],
  },
  {
    title: "Secretariat Member Webinar Financial Planning dan Potensi Pasar Modal Indonesia",
    organization: "Senat Mahasiswa FTI UAJY",
    period: "January 2024 - March 2024",
    location: "Yogyakarta, Indonesia",
    focus: "Hands-on experience managing timelines, communication, and execution for events.",
    tag: "Committee",
    colors: {
      from: "from-amber-400/90",
      to: "to-pink-500/90",
      badge: "bg-amber-100 text-amber-800 border border-amber-200",
    },
    points: [
      "Participated in committees handling registration, liaison, and logistic support.",
      "Worked with cross-functional teams to ensure events run smoothly.",
      "Built confidence in communication, coordination, and problem-solving under time pressure.",
    ],
  },
  {
    title: "Steering Committee - Social Service",
    organization: "Senat Mahasiswa FTI UAJY",
    period: "August 2023 - November 2023",
    location: "Yogyakarta, Indonesia",
    focus: "Hands-on experience managing timelines, communication, and execution for events.",
    tag: "Committee",
    colors: {
      from: "from-amber-400/90",
      to: "to-pink-500/90",
      badge: "bg-amber-100 text-amber-800 border border-amber-200",
    },
    points: [
      "Participated in committees handling registration, liaison, and logistic support.",
      "Worked with cross-functional teams to ensure events run smoothly.",
      "Built confidence in communication, coordination, and problem-solving under time pressure.",
    ],
  },
  {
    title: "Members of Social Divisions of Society",
    organization: "Senat Mahasiswa FTI UAJY",
    period: "October 2022 - October 2023",
    location: "Yogyakarta, Indonesia",
    focus: "Hands-on experience managing timelines, communication, and execution for events.",
    tag: "Committee",
    colors: {
      from: "from-amber-400/90",
      to: "to-pink-500/90",
      badge: "bg-amber-100 text-amber-800 border border-amber-200",
    },
    points: [
      "Participated in committees handling registration, liaison, and logistic support.",
      "Worked with cross-functional teams to ensure events run smoothly.",
      "Built confidence in communication, coordination, and problem-solving under time pressure.",
    ],
  },
  {
    title: "Event Coordinator - Green Action #11",
    organization: "Senat Mahasiswa FTI UAJY",
    period: "January 2023 - April 2023",
    location: "Yogyakarta, Indonesia",
    focus: "Hands-on experience managing timelines, communication, and execution for events.",
    tag: "Committee",
    colors: {
      from: "from-amber-400/90",
      to: "to-pink-500/90",
      badge: "bg-amber-100 text-amber-800 border border-amber-200",
    },
    points: [
      "Participated in committees handling registration, liaison, and logistic support.",
      "Worked with cross-functional teams to ensure events run smoothly.",
      "Built confidence in communication, coordination, and problem-solving under time pressure.",
    ],
  },
  {
    title: "Secretary - Social Service Event",
    organization: "Senat Mahasiswa FTI UAJY",
    period: "November 2022 - December 2022",
    location: "Yogyakarta, Indonesia",
    focus: "Hands-on experience managing timelines, communication, and execution for events.",
    tag: "Committee",
    colors: {
      from: "from-amber-400/90",
      to: "to-pink-500/90",
      badge: "bg-amber-100 text-amber-800 border border-amber-200",
    },
    points: [
      "Participated in committees handling registration, liaison, and logistic support.",
      "Worked with cross-functional teams to ensure events run smoothly.",
      "Built confidence in communication, coordination, and problem-solving under time pressure.",
    ],
  },
];
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-50 py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-72 bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-500">
              Work Experience
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-[2.2rem]">
              Where I&apos;ve been growing
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
              A mix of professional and project-based experience, combining
              technical skills with communication and problem-solving in real
              environments.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 text-xs text-slate-500 md:items-end">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-[11px] font-medium text-emerald-700 shadow-sm shadow-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Currently working in IT System Support
            </span>
            <p className="text-[11px] md:text-right">
              Comfortable collaborating with both technical and non-technical teams.
            </p>
          </div>
        </motion.div>

        <div className="relative grid gap-6 md:grid-cols-[0.2fr_1.8fr]">
          <div className="relative">
            <div className="absolute left-2 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-primary via-sky-400 to-emerald-400" />
          </div>

          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="group relative flex flex-col gap-5 rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="pointer-events-none absolute -left-[32px] top-7 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      index === 0 ? "bg-primary" : "bg-sky-400"
                    }`}
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  {/* LEFT SIDE */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <div>

                      <h3 className="text-base font-semibold text-slate-900">
                        {exp.title}
                      </h3>

                      <p className="mt-0.5 text-xs font-medium text-slate-500">
                        {exp.company}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {exp.period} · {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* BADGE */}
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${exp.badgeColor}`}
                  >
                    {exp.badge}
                  </span>
                </div>

                <div className="mt-2 grid gap-3 text-sm text-slate-700 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] md:gap-4">
                  <p className="rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-[13px] leading-relaxed text-slate-700">
                    {exp.highlight}
                  </p>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      Key Contributions
                    </p>
                    <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed">
                      {exp.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-primary/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mt-14 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm shadow-slate-100"
        >
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-600">
                Organizational Experience
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 md:text-[1.45rem]">
                Organizational roles that shape my soft skills
              </h3>
              <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-600">
                Experiences in organizations and committees that help me build
                communication, teamwork, and coordination skills while working
                with different people.
              </p>
            </div>

            <span className="inline-flex items-center rounded-full bg-sky-50 px-4 py-1 text-[11px] font-medium text-sky-700 shadow-sm shadow-sky-100">
              <span className="mr-1 block h-1.5 w-1.5 rounded-full bg-sky-500" />
              Actively involved in campus & community activities
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {organizationalExperiences.map((org) => (
              <motion.div
                key={org.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55 }}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/95 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-sky-400/60 hover:shadow-lg hover:shadow-sky-200/60"
              >
                <div
                  className={`h-1 w-full bg-gradient-to-r ${org.colors.from} ${org.colors.to}`}
                />

                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-semibold leading-snug text-slate-900">
                        {org.title}
                      </h4>
                      <p className="mt-0.5 text-xs font-medium text-slate-500">
                        {org.organization}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">
                        {org.period} · {org.location}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${org.colors.badge}`}
                    >
                      {org.tag}
                    </span>
                  </div>

                  <p className="rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2 text-[12px] leading-relaxed text-slate-700">
                    {org.focus}
                  </p>

                  <ul className="mt-1 space-y-1.5 text-[12px] leading-relaxed text-slate-700">
                    {org.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-sky-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
