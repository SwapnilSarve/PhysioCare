import { motion } from "framer-motion";
import { Phone, HeartPulse, Activity, Dumbbell, Star } from "lucide-react";


const services = [
  { title: "Sports Therapy", description: "Performance-focused rehab to help athletes stay active.", Icon: Dumbbell },
  { title: "Pain Relief", description: "Targeted treatments for back, neck, and joint discomfort.", Icon: HeartPulse },
  { title: "Rehabilitation", description: "Personalized recovery plans after injury or surgery.", Icon: Activity },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80", alt: "Physiotherapist assisting a patient with leg stretch" },
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80", alt: "Rehabilitation exercise in a modern clinic" },
  { src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80", alt: "Patient doing mobility training with physiotherapist guidance" },
];

const googleMapUrl = "https://www.google.com/maps/search/?api=1&query=Sushrusha+Multispeciality+Hospital+Nalanda+Nagar+Nandura+Buldhana+Maharashtra";

function SectionHeader({ title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">Advance Rehabilitation & Physiotherapy Center</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
      {subtitle ? <p className="mt-4 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

function ServiceCard({ title, description, Icon }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="group rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1">
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
    <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-slate-200/70">
      <img src={src} alt={alt} loading="lazy" className="h-72 w-full object-cover transition duration-500 hover:scale-105" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-2xl font-extrabold tracking-tight text-teal-600">PhysioCare</a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#about" className="transition hover:text-teal-600">About</a>
            <a href="#services" className="transition hover:text-teal-600">Services</a>
            <a href="#gallery" className="transition hover:text-teal-600">Gallery</a>
            <a href="#contact" className="transition hover:text-teal-600">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/10 transition hover:bg-teal-700">Book Now</a>
        </div>
      </header>
      <main id="top">
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-teal-700 to-cyan-600 text-white">
          <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_45%)]" />
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 lg:px-8 lg:flex-row lg:items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <span className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-teal-100">Trusted care since 2026</span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Expert physiotherapy for stronger movement and lasting relief.</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-100 sm:text-lg">Recover faster with tailored rehabilitation, sports therapy, and pain management designed around your goals.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-teal-700 shadow-lg shadow-teal-700/20 transition hover:bg-slate-100">Book Appointment</a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20">See Services</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-lg sm:p-8">
              <div className="relative rounded-[2rem] overflow-hidden bg-slate-900">
                <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=80" alt="Physiotherapist working with a patient" className="h-[420px] w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </section>
        <section id="about" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader title="Dedicated physiotherapy for every step of recovery" subtitle="Located at Sushrusha Multispeciality Hospital, we deliver tailored rehabilitation, modern techniques, and compassionate care for your fastest recovery." />
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-xl">
                <h3 className="text-xl font-semibold text-slate-900">Why choose us?</h3>
                <p className="mt-4 text-slate-600 leading-7">Our team blends clinical expertise with a patient-focused approach to deliver measurable recovery outcomes.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-xl">
                <h3 className="text-xl font-semibold text-slate-900">Modern therapies</h3>
                <p className="mt-4 text-slate-600 leading-7">We use evidence-based techniques for pain relief, mobility improvement, and injury prevention.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-xl">
                <h3 className="text-xl font-semibold text-slate-900">Personalized care</h3>
                <p className="mt-4 text-slate-600 leading-7">Every treatment plan is tailored to your condition, activity level, and goals.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader title="Comprehensive services that restore mobility" subtitle="Expert support for pain relief, rehabilitation, and performance improvement." />
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} title={service.title} description={service.description} Icon={service.Icon} />
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader title="Patient stories" subtitle="Testimonials are temporarily hidden while we improve this experience." />
          </div>
        </section>
        <section id="gallery" className="py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader title="Healing in action" subtitle="Browse our facility and care environment." />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {gallery.map((item) => (
                <GalleryCard key={item.src} src={item.src} alt={item.alt} />
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-24 bg-gradient-to-r from-slate-900 via-teal-700 to-cyan-600 text-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-teal-200">Contact Us</p>
                  <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Ready to start your recovery?</h2>
                  <p className="mt-4 text-slate-200 leading-7">Book an appointment today and get a tailored plan from our experienced physiotherapist.</p>
                </div>
                <div className="space-y-5">
                  <div className="rounded-[1.75rem] bg-slate-950/80 p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-teal-200">Phone</p>
                    <a href="tel:+917741850203" className="mt-2 block text-lg font-semibold text-white hover:text-teal-200">+91 77418 50203</a>
                  </div>
                  <div className="rounded-[1.75rem] bg-slate-950/80 p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-teal-200">Address</p>
                    <a href={googleMapUrl} target="_blank" rel="noreferrer" className="mt-2 block text-lg font-semibold text-white hover:text-teal-200">
                      Sushrusha Multispeciality Hospital, Nalanda Nagar, Nandura, Buldhana, Maharashtra
                    </a>
                    <p className="mt-2 text-sm text-slate-300">Exact location on Google Maps for easy directions.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90">
                <iframe
                  src="https://www.google.com/maps?q=Sushrusha+Multispeciality+Hospital+Nalanda+Nagar+Nandura+Buldhana+Maharashtra&z=16&output=embed"
                  width="100%"
                  height="260"
                  loading="lazy"
                  title="Sushrusha Multispeciality Hospital Google Map"
                  className="border-0"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200/80 bg-white py-10 text-center text-sm text-slate-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-semibold text-slate-900">Dr. Mayuri Chopade (PT)</p>
          <p className="mt-1">Consultant Physiotherapist</p>
          <p className="mt-1">Appointment: +91 77418 50203</p>
          <p className="mt-4">© 2026 PhysioCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}