"use client";

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const FloatingLines = dynamic(() => import('../FloatingLines'), {
  ssr: false,
  loading: () => <div className="w-full h-full opacity-0" /> 
});

export default function FloatingLinesClient() {
  const [startEffect, setStartEffect] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const timeout = setTimeout(() => {
      setStartEffect(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (!startEffect) return null;

  return (
    <FloatingLines 
        enabledWaves={isMobile ? ["top", "middle"] : ["top", "middle"]}
        
        lineCount={isMobile ? 4 : 5} 
        
        linesGradient={["#FF8A00", "#ffb347"]}
        lineDistance={5}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={false}
        parallax={false}
    />
  );
}