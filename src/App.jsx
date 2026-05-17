import { motion } from "framer-motion";
import { Phone, HeartPulse, Activity, Dumbbell } from "lucide-react";

const services = [
  { title: "Sports Therapy", icon: <Dumbbell /> },
  { title: "Pain Relief", icon: <HeartPulse /> },
  { title: "Rehabilitation", icon: <Activity /> },
];

const gallery = [
  "https://images.unsplash.com/photo-1516549655169-df83a0774514",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  "https://images.unsplash.com/photo-1584515933487-779824d29309",
];

export default function App() {
  return (
    <div>
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-600">PhysioCare</h1>
          <nav className="space-x-6 text-gray-700">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-5xl font-bold mb-6">
            Helping You Move Pain-Free Again
          </h2>
          <p className="text-lg mb-8">
            Personalized physiotherapy treatments for recovery and wellness.
          </p>
          <button className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold">
            Book Appointment
          </button>
        </motion.div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f"
            className="rounded-3xl shadow-lg"
          />
          <div>
            <h3 className="text-4xl font-bold text-teal-600 mb-6">
              About Our Clinic
            </h3>
            <p className="text-gray-600 leading-8">
              We provide professional physiotherapy services with modern
              treatment techniques focused on long-term recovery and wellness.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-teal-600 mb-12">
            Our Services
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md text-center"
              >
                <div className="text-teal-600 flex justify-center mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold">{service.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-teal-600 mb-10">
            Testimonials
          </h3>

          <div className="bg-slate-100 rounded-3xl p-10 shadow">
            <p className="text-lg italic text-gray-700">
              “Excellent therapy sessions and very professional care. Highly
              recommended!”
            </p>
            <h4 className="mt-4 font-bold">— Happy Patient</h4>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-teal-600 mb-12">
            Gallery
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                className="rounded-3xl shadow-lg h-72 object-cover w-full"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Contact Us</h3>
          <p className="mb-8">Book your appointment today.</p>

          <div className="flex justify-center items-center gap-3 text-xl">
            <Phone />
            <span>+91 7741850203</span>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-6 text-center">
        © 2026 PhysioCare. All rights reserved.
      </footer>
    </div>
  );
}