"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, SmilePlus, Sparkles } from "lucide-react";
import Image from "next/image";
import { blurIn, staggerContainer, fadeInUp, magneticHover } from "@/lib/animations";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate mouse position relative to center (-1 to 1)
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
  };

  const tagline = "Gülüşünüzü Tasarlıyoruz".split(" ");

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] flex flex-col overflow-hidden bg-[#0A1628] text-white"
      id="hero"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
          alt="Clinic Background"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/60 to-[#0A1628] mix-blend-multiply" />
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          x: mousePosition.x * -20,
          y: mousePosition.y * -20 
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] text-[#C9A96E]/30"
        >
          <SmilePlus size={64} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute bottom-[30%] right-[15%] text-[#C9A96E]/20"
        >
          <Sparkles size={48} />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center container mx-auto px-6 max-w-5xl z-10 text-center relative pt-28 pb-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Badge */}
          <motion.div 
            variants={fadeInUp}
            className="px-6 py-2 rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/10 backdrop-blur-sm mb-8 inline-flex items-center gap-2"
          >
            <Sparkles className="text-[#C9A96E] w-4 h-4" />
            <span className="text-sm font-medium tracking-wider text-[#C9A96E] uppercase">
              İstanbul'un Prestijli Diş Kliniği
            </span>
          </motion.div>

          {/* Cinematic Title */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            {tagline.map((word, i) => (
              <motion.span key={i} className="inline-block overflow-hidden">
                <motion.span 
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p 
            variants={blurIn}
            className="text-lg md:text-xl text-gray-100 max-w-2xl mb-12"
          >
            Modern teknoloji ve uzman kadromuzla, hayalinizdeki gülüşe kavuşmanız için yanınızdayız.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-20">
            <motion.a 
              href="#contact"
              whileHover="hover"
              variants={magneticHover}
              className="px-8 py-4 bg-[#C9A96E] text-[#0A1628] rounded-full font-semibold text-lg hover:bg-[#b39560] transition-colors shadow-lg shadow-[#C9A96E]/20 inline-block"
            >
              Randevu Al
            </motion.a>
            <motion.a 
              href="#services"
              whileHover="hover"
              variants={magneticHover}
              className="px-8 py-4 border border-white/30 hover:border-white text-white rounded-full font-medium text-lg transition-colors backdrop-blur-sm inline-block"
            >
              Hizmetlerimiz
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-white/20 text-gray-200 w-full"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-sm">Yıl Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C9A96E] mb-1">5000+</div>
              <div className="text-sm">Mutlu Hasta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">12000+</div>
              <div className="text-sm">Tedavi</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 pb-8 flex flex-col items-center gap-2 mt-auto"
      >
        <span className="text-xs tracking-[0.2em] text-gray-200 uppercase">Keşfet</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/50 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
