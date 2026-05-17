import { motion } from "framer-motion";
import {
  Phone,
  HeartPulse,
  Activity,
  Dumbbell,
  ArrowRight,
  Star,
} from "lucide-react";
import Reviews from "./components/Reviews";

const services = [
  {
    title: "Sports Therapy",
    description: "Performance-focused rehab to help athletes stay active.",
    Icon: Dumbbell,
  },
  {
    title: "Pain Relief",
    description: "Targeted treatments for back, neck, and joint discomfort.",
    Icon: HeartPulse,
  },
  {
    title: "Rehabilitation",
    description: "Personalized recovery plans after injury or surgery.",
    Icon: Activity,
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    alt: "Physiotherapist assisting a patient with leg stretch",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    alt: "Rehabilitation exercise in a modern clinic",
  },
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    alt: "Patient doing mobility training with physiotherapist guidance",
  },
];

function SectionHeader({ title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">
        Advance Rehabilitation &amp; Physiotherapy Center
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
      {subtitle ? <p className="mt-4 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

function ServiceCard({ title, description, Icon }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-lg transition duration-300"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-100">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-7">{description}</p>
    </motion.article>
  );
}

function GalleryCard({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-[2rem] shadow-lg">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-72 w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-2xl font-extrabold tracking-tight text-teal-600">
            PhysioCare
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#about" className="transition hover:text-teal-600">About</a>
            <a href="#services" className="transition hover:text-teal-600">Services</a>
            <a href="#gallery" className="transition hover:text-teal-600">Gallery</a>
            <a href="#contact" className="transition hover:text-teal-600">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/10 transition hover:bg-teal-700"
          >
            Book Now
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-teal-700 to-cyan-600 text-white">
          <div className="absolute inset-x-0 top-0 h-60 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_45%)]" />
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 lg:px-8 lg:flex-row lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-teal-100">
                Trusted Care Since 2026
              </span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Expert care for pain-free movement and lasting recovery.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-100 sm:text-lg">
                Personalized physiotherapy treatments for injury recovery, mobility improvement, and stronger living.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-teal-700 shadow-lg shadow-teal-700/20 transition hover:bg-slate-100"
                >
                  Book Appointment
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
                >
                  Our Services
                </a>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-center">
                  <p className="text-3xl font-bold">1000+</p>
                  <p className="mt-1 text-sm text-slate-200">Happy Patients</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-center">
                  <p className="text-3xl font-bold">10+</p>
                  <p className="mt-1 text-sm text-slate-200">Years Experience</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-center">
                  <p className="text-3xl font-bold">98%</p>
                  <p className="mt-1 text-sm text-slate-200">Success Rate</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-[2rem] bg-white/10 p-8 ring-1 ring-white/15 shadow-2xl backdrop-blur-lg"
            >
              <div className="flex items-center justify-between gap-4 rounded-3xl bg-white/10 px-5 py-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-200">Need help now?</p>
                  <p className="mt-2 text-2xl font-semibold text-white">+91 77418 50203</p>
                </div>
                <Phone className="h-10 w-10 text-teal-300" />
              </div>
              <div className="mt-8 space-y-5 text-slate-100">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">Personalized Care</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    One-on-one treatment plans based on your goals and condition.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">Evidence-Based Methods</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    Modern techniques that focus on lasting pain reduction.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-700 hover:bg-slate-100"
              >
                Schedule a session
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeader
                title="Dedicated physiotherapy for every step of recovery"
                subtitle="Located at Sushrusha Multispeciality Hospital, Nalanda Nagar, Buldana Road, near Zambal School, Nandura. We offer tailored rehabilitation with modern care and trusted clinical support."
              />
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200/70">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=80"
                alt="Physiotherapist working with a patient"
                className="h-full w-full rounded-[1.75rem] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Comprehensive services that restore mobility"
            subtitle="Choose from our tailored therapies for pain relief, rehabilitation, and sports performance."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-white p-10 shadow-xl ring-1 ring-slate-200/80">
            <div className="grid gap-10">
              <div>
                <SectionHeader
                  title="Patient Stories"
                  subtitle="What our patients say about their recovery."
                />
              </div>
              <div className="mt-6">
                <Reviews />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Healing in every step"
            subtitle="Browse our facility and watch the care experience in action."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <GalleryCard key={item.src} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-r from-slate-900 via-teal-700 to-cyan-600 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-200">
            Contact Us
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Ready to start your recovery?</h2>
          <p className="mt-4 text-slate-200 leading-7">
            Book an appointment today or call our clinic to schedule a personalized treatment plan.
          </p>
          <div className="mt-10 space-y-6 rounded-[1.75rem] border border-white/20 bg-white/10 p-6 text-left text-sm text-slate-100 sm:space-y-0 sm:grid sm:grid-cols-2 sm:items-center sm:gap-4">
            <div>
              <p className="font-semibold text-white">Clinic Address</p>
              <p>Sushrusha Multispeciality Hospital</p>
              <p>Nalanda Nagar, Buldana Road</p>
              <p>Near Zambal School, Nandura</p>
              <p>Dist. Buldana, Maharashtra 443404</p>
            </div>
            <div>
              <p className="font-semibold text-white">Lead Physiotherapist</p>
              <p>Dr. Mayuri Chopade (PT)</p>
              <p>Bachelor of Physiotherapy</p>
              <p>Reg No. 2025/12/PT/014852</p>
              <p>Consultant Physiotherapist</p>
            </div>
          </div>
          <div className="mt-10 inline-flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+917741850203"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/10 transition hover:bg-slate-100"
            >
              <Phone className="h-5 w-5 text-teal-600" />
              +91 77418 50203
            </a>
            <a
              href="mailto:info@physiocare.com"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-white py-10 text-center text-sm text-slate-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-semibold text-slate-900">Dr. Mayuri Chopade (PT)</p>
          <p className="mt-1">Consultant Physiotherapist</p>
          <p className="mt-1">Appointment: +91 77418 50203</p>
          <p className="mt-1">Sushrusha Multispeciality Hospital, Nalanda Nagar, Buldana Road, Nandura</p>
          <p className="mt-4">© 2026 PhysioCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}