"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation(margin: any = "-100px") {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });
  return { ref, isInView };
}
