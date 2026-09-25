"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CalendarDays, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    // Determine current day in Turkish to highlight working hours
    const days = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];
    setCurrentDay(days[new Date().getDay()]);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Visual only, reset for demo purposes
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    alert("Mesajınız alınmıştır. En kısa sürede size dönüş yapacağız.");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0A1628] relative overflow-hidden"
    >
      {/* Refined gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1a365d]/20 via-[#0A1628] to-[#0A1628] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <span className="px-4 py-1.5 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 text-[#C9A96E] text-sm font-medium uppercase tracking-wider">
              Bize Ulaşın
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif text-white font-bold mb-4"
          >
            İletişim & Randevu
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Sağlıklı bir gülüş için ilk adımı atın. Formu doldurun, sizi hemen arayalım.
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Left Column: Form (Restored to Dark Premium Look) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="lg:col-span-7 bg-[#112240]/80 backdrop-blur-xl border border-white/5 p-6 md:p-10 rounded-3xl shadow-2xl"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-serif text-white font-bold flex items-center gap-3 mb-2">
                <CalendarDays className="text-[#C9A96E]" size={28} />
                Online Randevu Talebi
              </h3>
              <p className="text-gray-400 text-sm">
                Aşağıdaki formu doldurarak hızlıca randevu talebi oluşturabilirsiniz.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <motion.div variants={fadeInUp}>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0A1628]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/50 transition-all"
                  placeholder="Adınız Soyadınız"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp}>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0A1628]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/50 transition-all"
                    placeholder="05XX XXX XX XX"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    E-posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0A1628]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/50 transition-all"
                    placeholder="ornek@email.com"
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Hizmet Seçimi
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#0A1628]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0A1628] text-gray-400">
                      Bir hizmet seçin...
                    </option>
                    {siteConfig.services.map((service) => (
                      <option
                        key={service.id}
                        value={service.id}
                        className="bg-[#0A1628] text-white"
                      >
                        {service.title}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#C9A96E]">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Mesajınız
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#0A1628]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/50 transition-all resize-none"
                  placeholder="Bize iletmek istediğiniz detaylar..."
                ></textarea>
              </motion.div>

              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-[#0A1628] border-2 border-[#C9A96E] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#C9A96E] hover:text-[#0A1628] transition-colors shadow-lg mt-2"
              >
                Randevu Talebi Oluştur
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column: Info & Hours (No Scroll, Full Visibility) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <motion.div
                variants={fadeInUp}
                className="bg-[#112240]/60 border border-white/5 p-5 rounded-2xl flex items-center gap-5 hover:bg-[#112240] transition-colors"
              >
                <div className="w-12 h-12 bg-[#C9A96E]/10 rounded-full flex items-center justify-center text-[#C9A96E] flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-1">Telefon</h4>
                  <p className="text-white font-medium text-lg">
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-[#112240]/60 border border-white/5 p-5 rounded-2xl flex items-center gap-5 hover:bg-[#112240] transition-colors"
              >
                <div className="w-12 h-12 bg-[#C9A96E]/10 rounded-full flex items-center justify-center text-[#C9A96E] flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-1">E-posta</h4>
                  <p className="text-white font-medium">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-[#112240]/60 border border-white/5 p-5 rounded-2xl flex items-center gap-5 sm:col-span-2 lg:col-span-1 hover:bg-[#112240] transition-colors"
              >
                <div className="w-12 h-12 bg-[#C9A96E]/10 rounded-full flex items-center justify-center text-[#C9A96E] flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-1">Adres</h4>
                  <p className="text-white font-medium text-sm leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Working Hours - Removed scroll, let it take full height since Map is moved */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#112240] to-[#0A1628] border border-white/10 p-6 rounded-3xl relative overflow-hidden flex-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A96E]/5 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-[#C9A96E]" size={24} />
                <h4 className="text-white font-serif text-xl font-bold">
                  Çalışma Saatleri
                </h4>
              </div>
              
              <ul className="flex flex-col justify-between h-[calc(100%-3rem)] gap-2 relative z-10">
                {siteConfig.workingHours.map((wh, idx) => {
                  const isToday = currentDay === wh.day;
                  return (
                    <li
                      key={idx}
                      className={`flex justify-between items-center text-sm py-3 px-4 rounded-xl transition-all ${
                        isToday
                          ? "bg-[#C9A96E]/10 border border-[#C9A96E]/20 shadow-[0_0_15px_rgba(201,169,110,0.1)]"
                          : "bg-transparent border border-transparent hover:bg-white/5"
                      }`}
                    >
                      <span className={isToday ? "text-white font-semibold" : "text-gray-300"}>
                        {wh.day}
                        {isToday && (
                          <span className="ml-2 text-[10px] uppercase tracking-wider bg-[#C9A96E] text-[#0A1628] px-2 py-0.5 rounded-full font-bold">
                            Bugün
                          </span>
                        )}
                      </span>
                      <span
                        className={`font-medium ${
                          wh.hours === "Kapalı"
                            ? "text-red-400/80"
                            : isToday
                            ? "text-[#C9A96E] font-bold"
                            : "text-gray-400"
                        }`}
                      >
                        {wh.hours}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* 3. Bottom: Full-Width Map (Moved out of the column to save space) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="max-w-7xl mx-auto h-64 lg:h-[400px] rounded-3xl overflow-hidden border border-white/10 relative group"
        >
          <div className="absolute inset-0 bg-[#C9A96E]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
          <iframe
            src={siteConfig.contact.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
