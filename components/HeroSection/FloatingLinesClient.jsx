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
    // 1. Detectăm dacă e mobil
    setIsMobile(window.innerWidth < 768);

    // 2. Întârziem încărcarea cu 800ms
    // Asta permite browserului să afișeze textul (LCP) și să termine "munca grea"
    // înainte să înceapă să descarce Three.js
    const timeout = setTimeout(() => {
      setStartEffect(true);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  // Până nu trece timpul, nu randăm nimic greu
  if (!startEffect) return null;

  return (
    <FloatingLines 
        // 3. OPTIMIZARE MOBIL: 
        // Pe desktop: 3 valuri (top, middle, bottom)
        // Pe mobil: DOAR 1 val (middle) -> salvăm 66% din resursele CPU
        enabledWaves={isMobile ? ["middle"] : ["top", "middle"]}
        
        // Pe mobil: mai puține linii (2 vs 4)
        lineCount={isMobile ? 2 : 4} 
        
        linesGradient={["#FF8A00", "#ffb347"]}
        lineDistance={5}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={false}
        parallax={false}
    />
  );
}