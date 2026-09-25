"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ChevronUp, SmilePlus, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A1628] text-white relative pt-20 pb-10 overflow-hidden">
      {/* Animated Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <motion.svg 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="relative block w-[200%] h-[50px] md:h-[100px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white/5" />
        </motion.svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Col 1 */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <SmilePlus className="w-8 h-8 text-[#C9A96E]" />
              <span className="text-2xl font-bold font-serif">{siteConfig.clinicShortName}</span>
            </Link>
            <p className="text-gray-200 text-sm leading-relaxed">
              Modern teknoloji ve uzman kadromuzla, sağlıklı ve estetik gülüşler tasarlıyoruz. Sağlığınız bizim önceliğimizdir.
            </p>
            <div className="flex items-center gap-4">
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                let Icon = null;
                if (platform.toLowerCase() === "instagram") Icon = Instagram;
                else if (platform.toLowerCase() === "facebook") Icon = Facebook;
                else if (platform.toLowerCase() === "youtube") Icon = Youtube;
                else if (platform.toLowerCase() === "whatsapp") Icon = MessageCircle; // MessageCircle represents WhatsApp in lucide
                
                return (
                  <a 
                    key={platform} 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A96E] hover:text-[#0A1628] transition-colors text-white"
                  >
                    {Icon ? <Icon size={18} /> : <span className="capitalize text-xs font-medium">{platform.substring(0,2)}</span>}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Col 2 */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            <h3 className="text-lg font-serif font-bold text-[#C9A96E]">Hızlı Menü</h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.navItems.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-gray-200 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            <h3 className="text-lg font-serif font-bold text-[#C9A96E]">Hizmetlerimiz</h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.services.slice(0, 5).map((service, i) => (
                <li key={i}>
                  <Link href="#services" className="text-gray-200 hover:text-white transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            <h3 className="text-lg font-serif font-bold text-[#C9A96E]">İletişim</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-200">
              {/* @ts-ignore */}
              <p>{siteConfig.contact?.address || "İstanbul, Türkiye"}</p>
              <p>
                {/* @ts-ignore */}
                <a href={`tel:${siteConfig.contact?.phone?.replace(/\\s/g, '') || ""}`} className="hover:text-white transition-colors">
                  {/* @ts-ignore */}
                  {siteConfig.contact?.phone || "+90 555 555 5555"}
                </a>
              </p>
              <p>
                {/* @ts-ignore */}
                <a href={`mailto:${siteConfig.contact?.email || ""}`} className="hover:text-white transition-colors">
                  {/* @ts-ignore */}
                  {siteConfig.contact?.email || "info@clinic.com"}
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} {siteConfig.clinicName}. Tüm hakları saklıdır.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
