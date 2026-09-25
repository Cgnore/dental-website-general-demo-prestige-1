"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import { staggerContainer, fadeInUp, viewportSettings } from "@/lib/animations";
import {
  Crosshair,
  Sparkles,
  AlignCenter,
  ShieldPlus,
  Heart,
  Microscope,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Crosshair,
  Sparkles,
  AlignCenter,
  ShieldPlus,
  Heart,
  Microscope,
};

const TiltCard = ({ service }: { service: typeof siteConfig.services[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation (-15 to 15 degrees)
    const rotateXValue = (mouseY / (height / 2)) * -15;
    const rotateYValue = (mouseX / (width / 2)) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <motion.div
      variants={fadeInUp}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
        scale: rotateX !== 0 || rotateY !== 0 ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-full h-full p-8 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl hover:border-transparent transition-shadow duration-300 group"
    >
      {/* Gold gradient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none -z-10" />
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#C9A96E]/50 transition-colors duration-300 pointer-events-none" />

      <div
        className="flex flex-col h-full z-10"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-[#C9A96E] mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon size={28} />
        </div>
        
        <h3 className="text-xl font-bold text-[#0A1628] font-serif mb-4">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-8 flex-grow">
          {service.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {service.features.map((feature, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-3 py-1 bg-gray-100 text-[#0A1628] rounded-full group-hover:bg-[#C9A96E]/10 transition-colors duration-300"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block relative mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] font-serif">
              Hizmetlerimiz
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent opacity-70" />
          </div>
          <p className="text-lg text-gray-600">
            Uzman kadromuzla kapsamlı diş sağlığı hizmetleri sunuyoruz
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]"
        >
          {siteConfig.services.map((service) => (
            <div key={service.id} className="[perspective:1000px]">
              <TiltCard service={service} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
