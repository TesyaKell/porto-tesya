import { motion } from "framer-motion";

const experiences = [
  {
    title: "IT System Support Plantation",
    company: "Internship at Great Giant Foods (GGF)",
    image: "/ggf.png",
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
       "Mentoring students in object-oriented programming while strengthening their technical understanding through structured learning support.",
    badge: "Past Role",
    badgeColor:
      "bg-sky-100 text-sky-800 border border-sky-200 shadow-sm shadow-sky-100/80",
    points: [
      "Instructed and mentored 300+ students in OOP principles.",
      "Created comprehensive learning modules to enhance student understanding.",
    ],
  },
  {
    title: "English and General Tutor",
    company: "Tutor",
    image: "/uajy.png",
    period: "February 2024 – June 2024",
    location: "Yogyakarta, Indonesia",
    highlight:
      "Supporting children's learning through adaptive teaching methods while strengthening communication and engagement skills.",
    badge: "Past Role",
    badgeColor:
      "bg-sky-100 text-sky-800 border border-sky-200 shadow-sm shadow-sky-100/80",
    points: [
      "Taught and guided 10+ kindergarten to elementary school students, adapting learning approaches based on individual needs and learning styles.",
      "Assisted students in understanding school materials and completing assignments across English and general subjects, improving comprehension and confidence.",
      "Developed strong communication and engagement skills by creating interactive learning methods to maintain children's focus and interest."
    ]
  },
  {
    title: "English Tutor",
    company: "Tutor",
    image: "/uajy.png",
    period: "November 2023 – January 2024",
    location: "Yogyakarta, Indonesia",
    highlight:
  "Teaching English through structured and adaptive learning approaches while strengthening communication and mentoring skills.",
    badge: "Past Role",
    badgeColor:
      "bg-sky-100 text-sky-800 border border-sky-200 shadow-sm shadow-sky-100/80",
    points: [
      "Taught English to 30+ students from elementary to high school levels, adapting teaching methods to different ages and learning abilities.",
      "Delivered structured lessons in grammar, pronunciation, and vocabulary to strengthen students’ language comprehension and communication skills.",
      "Developed strong mentoring and engagement skills by understanding students’ learning challenges and creating interactive learning environments."
    ]
  },
];

const organizationalExperiences = [
  {
    title: "Secretary",
    organization: "Senat Mahasiswa FTI UAJY",
    period: "October 2023 – October 2024",
    location: "Yogyakarta, Indonesia",
    focus: "Supporting organizational workflows through coordination, structured documentation, and effective communication among members.",
    tag: "Organizational",
    colors: {
      from: "from-violet-500/80",
      to: "to-sky-400/80",
      badge: "bg-violet-100 text-violet-800 border border-violet-200",
    },
    points: [
      "Manage and organize 50+ members in the organization.",
      "Create letters for each organizational activity and a statement of student organization activity.",
      "Leading several events within the organization.",
    ],
  },
  {
    title: "Coordinator of Secretariat and Ticketing",
    organization: "Sparkfest 12",
    period: "January 2024 - June 2024",
    location: "Yogyakarta, Indonesia",
    focus: "Event administration, stakeholder coordination, and reporting.",
    tag: "Committee",
    colors: {
      from: "from-amber-400/90",
      to: "to-pink-500/90",
      badge: "bg-amber-100 text-amber-800 border border-amber-200",
    },
    points: [
      "Collaborated with external vendors to manage online concert ticket sales partnerships.",
      "Prepared and presented ticket sales performance reports to stakeholders for decision-making.",
      "Coordinated with the finance team to monitor ticket revenue and operational expenses.",
    ]
  },
  {
    title: "Secretariat Member Webinar \"Financial Planning dan Potensi Pasar Modal Indonesia\"",
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
      "Responding to participant inquiries about the event via whatsapp.",
      "Designing and distributing certificates to participants who meet the requirements.",
      "Responding to participant inquiries about the event via whatsapp.",
    ],
  },
  {
    title: "Steering Committee - Social Service",
    organization: "Senat Mahasiswa FTI UAJY",
    period: "August 2023 - November 2023",
    location: "Yogyakarta, Indonesia",
    focus: "Leadership, Coordination, and Community Engagement",
    tag: "Committee",
    colors: {
      from: "from-amber-400/90",
      to: "to-pink-500/90",
      badge: "bg-amber-100 text-amber-800 border border-amber-200",
    },
    points: [
      "Identified community and orphanage needs to plan targeted social assistance programs.",
      "Oversaw the end-to-end execution of activities, from preparation to evaluation.",
      "Coordinated with the organizing committee to ensure smooth implementation and timely completion of the program.",
    ]
  },
  {
    title: "Members of Social Divisions of Society",
    organization: "Senat Mahasiswa FTI UAJY",
    period: "October 2022 - October 2023",
    location: "Yogyakarta, Indonesia",
    focus: "Leadership, Event/Project Coordination, and Stakeholder Communication",
    tag: "Organizational",
    colors: {
      from: "from-violet-500/80",
      to: "to-sky-400/80",
      badge: "bg-violet-100 text-violet-800 border border-violet-200",
    },
    points: [
      "Led and coordinated social service programs as Secretary, managing 50+ committee members to ensure smooth planning and execution.",
      "Coordinated event operations for the 'Green Action' program, supervising 30+ committees and volunteers to deliver successful activities.",
      "Facilitated student discussions as a Moderator at the 'Forum Lesehan', effectively communicating and channeling student aspirations to faculty stakeholders.",
    ]

  },
  {
    title: "Event Coordinator - Green Action #11",
    organization: "Senat Mahasiswa FTI UAJY",
    period: "January 2023 - April 2023",
    location: "Yogyakarta, Indonesia",
    focus: "Event Operations Coordination and Cross-Team Collaboration.",
    tag: "Committee",
    colors: {
      from: "from-amber-400/90",
      to: "to-pink-500/90",
      badge: "bg-amber-100 text-amber-800 border border-amber-200",
    },
    points: [
      "Coordinated end-to-end event operations, including scheduling, logistics, and equipment preparation to ensure smooth execution.",
      "Collaborated with cross-functional teams to manage event requirements and maintain effective communication throughout the process.",
      "Managed event budgets and resolved operational issues during preparation and execution to keep activities aligned with plans and constraints.",
    ]
  },
  {
    title: "Secretary - Social Service Event",
    organization: "Senat Mahasiswa FTI UAJY",
    period: "November 2022 - December 2022",
    location: "Yogyakarta, Indonesia",
    focus: "Administrative Coordination, Proposal Development, and Budget Planning.",
    tag: "Committee",
    colors: {
      from: "from-amber-400/90",
      to: "to-pink-500/90",
      badge: "bg-amber-100 text-amber-800 border border-amber-200",
    },
    points: [
      "Developed financial proposals for budget planning and fundraising.",
      "Composed event proposals detailing the activity plan and objectives",
      "Developed financial proposals for budget planning and fundraising.",
    ],
  },
];
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-24 px-6"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-primary/18 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-0 -z-10 h-72 w-72 rounded-full bg-yellow-400/18 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-72 w-72 rounded-full bg-indigo-700/40 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-yellow-400">
              Work Experience
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-[2.2rem]">
              Where I&apos;ve been growing
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80">
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
            <p className="text-[11px] md:text-right text-slate-300">
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
                className="group relative flex flex-col gap-5 rounded-2xl border border-slate-200/70 bg-white backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="pointer-events-none absolute -left-[32px] top-7 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      index === 0 ? "bg-primary" : "bg-sky-400"
                    }`}
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
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
                        {exp.period}
                      </p>
                      <p className="text-xs text-slate-400">{exp.location}</p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${exp.badgeColor}`}
                  >
                    {exp.badge}
                  </span>
                </div>

                <div className="mt-2 grid gap-3 text-sm text-slate-700 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] md:gap-4">
                  <p className="rounded-xl border border-slate-100 bg-blue-50 px-4 py-3 text-[13px] leading-relaxed text-slate-700">
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
          className="mt-14 rounded-2xl border border-slate-200/70 bg-white/20 p-6 shadow-sm shadow-slate-100"
        >
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-yellow-400">
                Organizational Experience
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white md:text-[1.45rem]">
                Organizational roles that shape my soft skills
              </h3>
              <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-white/80">
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
                        {org.period}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {org.location}
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
