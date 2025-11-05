import React, { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Globe, ExternalLink, LayoutGrid, PanelsTopLeft, Rows, ChevronRight } from "lucide-react";
import profileImg from "./assets/Porto.jpeg";
import p1Img from "./assets/FW.png";

// ====== DATA PRIBADI (EDIT DI SINI) ======
const PROFILE = {
  name: "Kresna",
  role: "Junior Fullstack Developer",
  city: "Jakarta, Indonesia",
  site: "askksa.vercel.app",
  available: true,
  bio: "Full-Stack Developer (Entry-Level/Junior) yang sedang membangun proyek end-to-end dengan React + Tailwind di frontend dan Python/FastAPI di backend. Terbiasa membuat CRUD, autentikasi dasar, dan integrasi REST API. Saat ini aktif memperkuat praktik clean code, Git workflow, dan deployment sederhana.",
  links: {
    github: "https://github.com/Anserk0710/",
    // linkedin: "https://linkedin.com/",
    email: "kresnasa22@gmail.com",
    tel: "+62 859-1062-96666"
  }
};

const PROJECTS = [
  { title: "Field Worker", description: "Presensi untuk karyawan lapangan berbasi QR", tags: ["React", "FastAPI",  "Tailwind"], link: "https://absen.dooski.id/", repo: "#", image: p1Img },
  { title: "ArtEvo", description: "Layanan Jual Belanja Online untuk Seniman Lukisan", tags: ["React", "SEO"], link: "#", repo: "#", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop" },
];

const SKILLS = [
  { group: "Bahasa/Framework", items: ["JavaScript", "TypeScript", "React", "Next.js", "Python", "FastAPI"] },
  { group: "Tools", items: ["Git", "Figma", "Postman", "Docker (basic)"] },
  { group: "Lainnya", items: ["SEO Basics", "UI/UX", "Writing"] }
];

const EXPERIENCES = [
  { role: "Fullstack Developer", org: "Dooski Karya Sinergi", period: "2025", desc: "Membangun Website Untuk Presensi dan Layanan Jual Belanja Online" },
  { role: "Web Designer", org: "Faris Decoreation", period: "2022", desc: "Rancang landing untuk UMKM dan personal brand." }
];

// ====== UI PRIMITIVES ======
const Chip = ({ children }) => (
  <span className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5">{children}</span>
);

const Section = ({ id, title, right, children }) => (
  <section id={id} className="w-full px-4 md:px-6 lg:px-10 py-12">
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      {right}
    </div>
    <div className="mt-6">{children}</div>
  </section>
);

// ====== LAYOUT 1: CLASSIC (Hero kiri, grid project) ======
function LayoutClassic() {
  return (
    <>
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-neutral-950/70">
        <div className="w-full px-4 md:px-6 lg:px-10 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{PROFILE.name}</a>
          <div className="flex items-center gap-3 text-sm">
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="w-full px-4 md:px-6 lg:px-10 pt-10 md:pt-16 pb-12 grid md:grid-cols-2 gap-8 md:gap-10 items-center"
      >
        {/* FOTO — di atas saat mobile */}
        <div className="order-1 md:order-2">
          <div
            className="
              rounded-3xl overflow-hidden ring-1 ring-white/10
              bg-gradient-to-br from-emerald-500/10 to-cyan-500/10
              mx-auto
              w-[240px] sm:w-[300px] md:w-auto
              aspect-[4/5] md:aspect-square
            "
          >
          {/* cover = rapi; kalau mau seluruh gambar utuh: ganti ke object-contain */}
          <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* TEKS — di bawah saat mobile */}
      <div className="order-2 md:order-1">
        {PROFILE.available && (
          <span className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to work / freelance
          </span>
        )}
        <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
          Halo, saya <span className="text-emerald-400">{PROFILE.name}</span><br />
          <span className="text-neutral-300">{PROFILE.role}</span>
        </h1>
        <p className="mt-4 text-neutral-300 max-w-prose">{PROFILE.bio}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#projects" className="px-4 py-2 rounded-2xl bg-emerald-500 text-neutral-950 font-semibold hover:opacity-90">
            Lihat Projects
          </a>
          <a href="#contact" className="px-4 py-2 rounded-2xl border border-white/10 hover:bg-white/5">
            Kontak
          </a>
          <a href={PROFILE.links.github} target="_blank" className="px-3 py-2 rounded-2xl border border-white/10 hover:bg-white/5 inline-flex items-center gap-2">
            <Github size={18} /> GitHub
          </a>
          <a href={PROFILE.links.linkedin} target="_blank" className="px-3 py-2 rounded-2xl border border-white/10 hover:bg-white/5 inline-flex items-center gap-2">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
        <div className="mt-6 text-sm text-neutral-400 flex items-center gap-4">
          <span className="inline-flex items-center gap-1"><MapPin size={16} /> {PROFILE.city}</span>
          <span className="inline-flex items-center gap-1"><Globe size={16} /> {PROFILE.site}</span>
        </div>
      </div>
    </section>


      {/* PROJECTS */}
      <Section id="projects" title="Featured Projects" right={<a href="#" className="text-sm text-emerald-400 hover:opacity-80 inline-flex items-center gap-1">All projects <ExternalLink size={16}/></a>}>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <article key={i} className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition"/>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-neutral-300 mt-1">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t,j)=>(<Chip key={j}>{t}</Chip>))}</div>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <a href={p.link} className="hover:opacity-80">Live</a>
                  {/* <span className="opacity-50">•</span> */}
                  {/* <a href={p.repo} className="hover:opacity-80">Repo</a> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map((s, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">{s.group}</h3>
              <ul className="mt-2 text-sm text-neutral-300 list-disc list-inside">
                {s.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="grid gap-4">
          {EXPERIENCES.map((e, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-semibold">{e.role} — <span className="text-neutral-300">{e.org}</span></div>
                <div className="text-sm text-neutral-400">{e.period}</div>
              </div>
              <p className="text-sm text-neutral-300 mt-2">{e.desc}</p>
            </div>
          ))}
        </div>
      </Section>

{/* CONTACT */}
<Section id="contact" title="Contact">
  {/* lebih lega antar kolom */}
  <div className="grid md:grid-cols-2 gap-10 xl:gap-12">
    {/* kartu kiri */}
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9">
      <p className="text-neutral-300 text-base leading-relaxed">
        Tertarik bekerja sama? Kirim pesan, email, atau hubungi langsung.
      </p>

      {/* setiap item jadi block/flex sendiri + padding vertikal */}
      <ul className="mt-7 space-y-3 text-[0.95rem]">
        <li>
          <a
            href={`mailto:${PROFILE.links.email}`}
            className="group flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-white/5"
          >
            <Mail size={18} className="opacity-90 group-hover:opacity-100" />
            <span className="truncate">{PROFILE.links.email}</span>
          </a>
        </li>
        <li>
          <a
            href={`tel:${PROFILE.links.tel}`}
            className="group flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-white/5"
          >
            <Phone size={18} className="opacity-90 group-hover:opacity-100" />
            <span className="truncate">{PROFILE.links.tel}</span>
          </a>
        </li>
        {PROFILE.links.linkedin && (
          <li>
            <a
              href={PROFILE.links.linkedin}
              className="group flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-white/5"
            >
              <Linkedin size={18} className="opacity-90 group-hover:opacity-100" />
              <span>LinkedIn</span>
            </a>
          </li>
        )}
        <li>
          <a
            href={PROFILE.links.github}
            className="group flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-white/5"
          >
            <Github size={18} className="opacity-90 group-hover:opacity-100" />
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </div>

    {/* kartu kanan (form) — samakan padding + jarak field */}
    <form className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9">
      <div className="grid gap-4">
        <input
          className="px-3 py-2.5 rounded-xl bg-neutral-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          placeholder="Nama"
        />
        <input
          type="email"
          className="px-3 py-2.5 rounded-xl bg-neutral-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          placeholder="Email"
        />
        <textarea
          className="px-3 py-2.5 rounded-xl bg-neutral-900 border border-white/10 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          placeholder="Pesan"
        />
        <button
          type="button"
          className="mt-1 px-4 py-2.5 rounded-2xl bg-emerald-500 text-neutral-950 font-semibold hover:opacity-90"
        >
          Kirim
        </button>
      </div>
      <p className="text-xs text-neutral-400 mt-3">
        *inactive form, hanya demo
      </p>
    </form>
  </div>
</Section>


      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="w-full px-4 md:px-6 lg:px-10 py-8 text-sm text-neutral-400 flex flex-wrap items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a className="hover:opacity-80" href="#">Privacy</a>
            <a className="hover:opacity-80" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}

// ====== LAYOUT 2: SIDEBAR (Profil tetap, konten scroll) ======
function LayoutSidebar() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 grid md:grid-cols-[300px_1fr]">
      <aside className="border-r border-white/10 p-6 sticky top-0 h-screen hidden md:flex md:flex-col">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl overflow-hidden ring-1 ring-white/10">
            <img src={profileImg} className="h-full w-full object-cover"/>
          </div>
          <div>
            <div className="font-semibold">{PROFILE.name}</div>
            <div className="text-xs text-neutral-400">{PROFILE.role}</div>
          </div>
        </div>
        <nav className="mt-6 grid gap-2 text-sm">
          {[
            ["#projects","Projects"],
            ["#skills","Skills"],
            ["#experience","Experience"],
            ["#contact","Contact"]
          ].map(([href,label])=> (
            <a key={href} href={href} className="px-3 py-2 rounded-xl hover:bg-white/5 border border-white/10/0 hover:border-white/10 inline-flex items-center justify-between">
              <span>{label}</span>
              <ChevronRight size={16}/>
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-6 text-sm text-neutral-400">
          <div className="inline-flex items-center gap-1"><MapPin size={16}/> {PROFILE.city}</div>
          <div className="inline-flex items-center gap-1 mt-2"><Globe size={16}/> {PROFILE.site}</div>
        </div>
      </aside>
      <main>
        <div className="w-full px-4 md:px-6 lg:px-10">
          <Section id="projects" title="Projects" right={<span className="text-sm text-neutral-400">3 selected</span>}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((p,i)=> (
                <article key={i} className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                  <div className="aspect-video overflow-hidden"><img src={p.image} className="h-full w-full object-cover"/></div>
                  <div className="p-4">
                    <div className="font-semibold">{p.title}</div>
                    <p className="text-sm text-neutral-300 mt-1">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t,j)=>(<Chip key={j}>{t}</Chip>))}</div>
                  </div>
                </article>
              ))}
            </div>
          </Section>
          <Section id="skills" title="Skills">
            <div className="grid md:grid-cols-3 gap-6">
              {SKILLS.map((s,i)=> (
                <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="font-semibold">{s.group}</div>
                  <ul className="mt-2 text-sm text-neutral-300 list-disc list-inside">{s.items.map((it,j)=>(<li key={j}>{it}</li>))}</ul>
                </div>
              ))}
            </div>
          </Section>
          <Section id="experience" title="Experience">
            <div className="grid gap-4">
              {EXPERIENCES.map((e,i)=> (
                <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="font-semibold">{e.role} — <span className="text-neutral-300">{e.org}</span></div>
                    <div className="text-sm text-neutral-400">{e.period}</div>
                  </div>
                  <p className="text-sm text-neutral-300 mt-2">{e.desc}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section id="contact" title="Contact">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 grid sm:grid-cols-2 gap-6">
              <div className="space-y-2 text-sm">
                <a className="inline-flex items-center gap-2 hover:opacity-80" href={`mailto:${PROFILE.links.email}`}><Mail size={18}/> {PROFILE.links.email}</a>
                <a className="inline-flex items-center gap-2 hover:opacity-80" href={`tel:${PROFILE.links.tel}`}><Phone size={18}/> {PROFILE.links.tel}</a>
                <a className="inline-flex items-center gap-2 hover:opacity-80" href={PROFILE.links.linkedin}><Linkedin size={18}/> LinkedIn</a>
                <a className="inline-flex items-center gap-2 hover:opacity-80" href={PROFILE.links.github}><Github size={18}/> GitHub</a>
              </div>
              <div>
                <p className="text-neutral-300">Kirim pesan melalui email/WA, saya akan balas secepatnya.</p>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}

// ====== LAYOUT 3: SPLIT (Hero penuh, section berblok) ======
function LayoutSplit() {
  return (
    <>
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.12),transparent_40%)]"/>
        <div className="w-full px-4 md:px-6 lg:px-10 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {PROFILE.name}
          </h1>
          <p className="mt-3 text-neutral-300">{PROFILE.role} — {PROFILE.city}</p>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-300">{PROFILE.bio}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href={PROFILE.links.github} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 hover:bg-white/5"><Github size={18}/> GitHub</a>
            <a href={PROFILE.links.linkedin} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 hover:bg-white/5"><Linkedin size={18}/> LinkedIn</a>
            <a href={`mailto:${PROFILE.links.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500 text-neutral-950 font-semibold hover:opacity-90"><Mail size={18}/> Contact</a>
          </div>
        </div>
      </header>

      <main className="w-full px-4 md:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-6 -mt-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3"><Rows size={16}/> Experience</div>
            <div className="grid gap-4">
              {EXPERIENCES.map((e,i)=> (
                <div key={i} className="p-4 rounded-2xl border border-white/10 bg-neutral-950/40">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="font-semibold">{e.role} — <span className="text-neutral-300">{e.org}</span></div>
                    <div className="text-sm text-neutral-400">{e.period}</div>
                  </div>
                  <p className="text-sm text-neutral-300 mt-2">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3"><LayoutGrid size={16}/> Skills</div>
            <div className="grid md:grid-cols-2 gap-4">
              {SKILLS.map((s,i)=> (
                <div key={i} className="p-4 rounded-2xl border border-white/10 bg-neutral-950/40">
                  <div className="font-semibold">{s.group}</div>
                  <ul className="mt-2 text-sm text-neutral-300 list-disc list-inside">{s.items.map((it,j)=>(<li key={j}>{it}</li>))}</ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3"><PanelsTopLeft size={16}/> Selected Projects</div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p,i)=> (
              <article key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/40">
                <div className="aspect-video overflow-hidden"><img src={p.image} className="h-full w-full object-cover"/></div>
                <div className="p-4">
                  <div className="font-semibold">{p.title}</div>
                  <p className="text-sm text-neutral-300 mt-1">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t,j)=>(<Chip key={j}>{t}</Chip>))}</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div id="contact" className="my-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-neutral-400">Contact</div>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
            <a className="inline-flex items-center gap-2 hover:opacity-80" href={`mailto:${PROFILE.links.email}`}><Mail size={18}/> {PROFILE.links.email}</a>
            <a className="inline-flex items-center gap-2 hover:opacity-80" href={`tel:${PROFILE.links.tel}`}><Phone size={18}/> {PROFILE.links.tel}</a>
            <a className="inline-flex items-center gap-2 hover:opacity-80" href={PROFILE.links.linkedin}><Linkedin size={18}/> LinkedIn</a>
            <a className="inline-flex items-center gap-2 hover:opacity-80" href={PROFILE.links.github}><Github size={18}/> GitHub</a>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="w-full px-4 md:px-6 lg:px-10 py-8 text-sm text-neutral-400 flex flex-wrap items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a className="hover:opacity-80" href="#">Privacy</a>
            <a className="hover:opacity-80" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}

// ====== LAYOUT SELECTOR (Pilih tampilan) ======
export default function PortfolioLayouts() {
  const [layout, setLayout] = useState("classic");
  const layouts = [
    { key: "classic", label: "Classic", icon: Rows },
    { key: "sidebar", label: "Sidebar", icon: PanelsTopLeft },
    { key: "split", label: "Split", icon: LayoutGrid }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <div className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-neutral-950/70">
        <div className="w-full px-4 md:px-6 lg:px-10 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Layouts</div>
          <div className="flex items-center gap-2">
            {layouts.map(({key,label,icon:Icon}) => (
              <button key={key} onClick={()=>setLayout(key)} className={`px-3 py-1.5 rounded-xl border text-sm inline-flex items-center gap-2 ${layout===key? "bg-white/10 border-white/20" : "border-white/10 hover:bg-white/5"}`}>
                <Icon size={16}/> {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {layout === "classic" && <div className="">{<LayoutClassic/>}</div>}
      {layout === "sidebar" && <div className="">{<LayoutSidebar/>}</div>}
      {layout === "split" && <div className="">{<LayoutSplit/>}</div>}
    </div>
  );
}
