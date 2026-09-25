"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SmilePlus } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Total duration ~2.5s
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Top Curtain */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-[#0A1628]"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
          
          {/* Bottom Curtain */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0A1628]"
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-6"
            >
              <SmilePlus className="w-12 h-12 text-[#C9A96E]" />
              <span className="text-4xl font-bold font-serif text-white">
                {siteConfig.clinicShortName}
              </span>
            </motion.div>
            
            {/* Animated Line */}
            <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeInOut",
                  repeat: Infinity 
                }}
                className="absolute inset-0 bg-[#C9A96E]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
