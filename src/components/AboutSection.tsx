"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import { fadeInLeft, fadeInRight, viewportSettings } from "@/lib/animations";

// Counter component for animated numbers
const AnimatedCounter = ({ target, duration = 2 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number;
    const animateCount = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, target, duration]);

  // Format to decimal if target is a float like 4.9
  const isFloat = target % 1 !== 0;
  const displayCount = isFloat 
    ? (count / Math.pow(10, target.toString().split('.')[1]?.length || 0)).toFixed(1)
    : count;

  // Handle special formatting if target was passed as a scaled up int (e.g. 4.9 passed as 49, but here we just manage via prop logic. Let's just handle floats simple.)
  // Actually, wait, let's keep it simple. If target has decimal, we can interpolate differently.
  return <span ref={ref}>{isFloat && count === 0 ? "0.0" : isFloat ? target : count}</span>;
};

const AnimatedFloatCounter = ({ target, duration = 2 }: { target: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
  
    useEffect(() => {
      if (!isInView) return;
  
      let startTimestamp: number;
      const animateCount = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(easeProgress * target);
  
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
  
      requestAnimationFrame(animateCount);
    }, [isInView, target, duration]);
  
    return <span ref={ref}>{count.toFixed(1)}</span>;
  };

export default function AboutSection() {
  const { doctor } = siteConfig;

  return (
    <section id="about" className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInLeft}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full max-w-[400px] mx-auto lg:mx-0 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-[#C9A96E]/20 bg-white flex items-center justify-center shadow-2xl">
              <span className="text-[#C9A96E] font-serif text-xl font-medium tracking-wide">
                Doktor Fotoğrafı
              </span>
              
              {/* Optional overlay gradient for realism */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-200 max-w-[200px]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0A1628] flex items-center justify-center text-[#C9A96E] text-xl font-bold">
                  {doctor.experience}+
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0A1628]">Yıl</p>
                  <p className="text-xs text-gray-600">Deneyim</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInRight}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#C9A96E]/15 text-[#B3935B] font-medium text-sm mb-4 border border-[#C9A96E]/20">
                Hakkımızda
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] font-serif mb-2">
                {doctor.name}
              </h2>
              <p className="text-xl text-[#B3935B] font-medium">
                {doctor.title}
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {doctor.bio}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div className="space-y-2">
                <h4 className="text-3xl font-bold text-[#0A1628]">
                  <AnimatedCounter target={15} />+
                </h4>
                <p className="text-sm font-medium text-gray-600">Yıl Deneyim</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-3xl font-bold text-[#0A1628]">
                  <AnimatedCounter target={5000} />+
                </h4>
                <p className="text-sm font-medium text-gray-600">Mutlu Hasta</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-3xl font-bold text-[#0A1628]">
                  <AnimatedCounter target={12000} />+
                </h4>
                <p className="text-sm font-medium text-gray-600">Başarılı Tedavi</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-3xl font-bold text-[#0A1628]">
                  <AnimatedFloatCounter target={4.9} />
                </h4>
                <p className="text-sm font-medium text-gray-600">Hasta Memnuniyeti</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
