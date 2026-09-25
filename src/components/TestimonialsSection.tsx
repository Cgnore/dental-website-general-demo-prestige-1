"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = siteConfig.testimonials;
  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, maxIndex]);

  const goToDot = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-surface overflow-hidden"
    >
      {/* Decorative large quote - hidden on mobile to prevent layout shift */}
      <div className="hidden md:block absolute top-20 left-10 text-secondary/10 z-0">
        <Quote size={240} className="rotate-180" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="text-center mb-12 md:mb-16 flex flex-col items-center justify-center w-full"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary font-bold mb-4 w-full"
          >
            Hasta Yorumları
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto px-2"
          >
            Hastalarımızın deneyimlerini dinleyin
          </motion.p>
        </motion.div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * (100 / cardsToShow)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="px-3 shrink-0"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <div className="h-full bg-[#C9A96E]/5 backdrop-blur-xl border border-[#C9A96E]/30 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(201,169,110,0.1)] hover:bg-[#C9A96E]/10 flex flex-col relative overflow-hidden">
                    <Quote
                      className="text-secondary/30 absolute top-6 right-6"
                      size={48}
                    />
                    
                    <div className="flex gap-1 mb-6 z-10">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={
                            i < testimonial.rating
                              ? "fill-secondary text-secondary"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>

                    <p className="text-[#0A1628]/80 italic mb-8 flex-grow z-10 text-lg font-medium leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center mt-auto z-10">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-lg mr-4">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .substring(0, 2)}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-secondary font-medium">
                          {testimonial.treatment}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-12 gap-3">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToDot(i)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  currentIndex === i ? "bg-[#C9A96E] w-10 shadow-[0_0_10px_rgba(201,169,110,0.5)]" : "bg-[#C9A96E]/30 w-3 hover:bg-[#C9A96E]/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
