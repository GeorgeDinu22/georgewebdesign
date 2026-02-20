"use client";

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// AICI este cheia performanței:
// 1. dynamic() -> rupe codul în chunk separat
// 2. ssr: false -> nu rulează pe server
const FloatingLines = dynamic(() => import('../FloatingLines'), {
  ssr: false,
  loading: () => <div className="w-full h-full opacity-0" /> // Placeholder invizibil
});

export default function FloatingLinesClient() {
  const [startEffect, setStartEffect] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const timeout = setTimeout(() => {
      setStartEffect(true);
    }, 850);

    return () => clearTimeout(timeout);
  }, []);

  if (!startEffect) return null;

  return (
    <FloatingLines 
        enabledWaves={isMobile ? ["top", "middle"] : ["top", "middle", "bottom"]}
        
        lineCount={4} 
        
        linesGradient={["#FF8A00", "#ffb347"]}
        lineDistance={5}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={false}
        parallax={false}
    />
  );
}