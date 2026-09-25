"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, SmilePlus } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { 
      opacity: 0, 
      y: "-100%",
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <SmilePlus className={`w-8 h-8 ${isScrolled ? "text-[#C9A96E]" : "text-white"}`} />
            <span className={`text-2xl font-bold font-serif ${isScrolled ? "text-[#0A1628]" : "text-white"}`}>
              {siteConfig.clinicShortName}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navItems.map((item, i) => (
              <Link 
                key={i} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#C9A96E] ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link 
              href="#contact"
              className={`px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105 ${
                isScrolled 
                  ? "bg-[#C9A96E] text-[#0A1628]" 
                  : "bg-white text-[#0A1628]"
              }`}
            >
              Randevu Al
            </Link>
          </div>

          <button 
            className="md:hidden z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isMobileMenuOpen || isScrolled ? "text-[#0A1628]" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-[#0A1628]" : "text-white"}`} />
            )}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
          >
            <motion.div 
              className="flex flex-col items-center gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
              }}
            >
              {siteConfig.navItems.map((item, i) => (
                <motion.div key={i} variants={linkVariants}>
                  <Link 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-medium text-[#0A1628] hover:text-[#C9A96E] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={linkVariants} className="mt-4">
                <Link 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-4 bg-[#C9A96E] text-white rounded-full font-medium text-lg"
                >
                  Randevu Al
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
