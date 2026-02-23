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

// În FloatingLinesClient.js
useEffect(() => {
  setIsMobile(window.innerWidth < 768);

  const startWhenReady = () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => setStartEffect(true));
    } else {
      setTimeout(() => setStartEffect(true), 2000);
    }
  };

  if (document.readyState === 'complete') {
    startWhenReady();
  } else {
    window.addEventListener('load', startWhenReady);
    return () => window.removeEventListener('load', startWhenReady);
  }
}, []);

if (!startEffect) {
  return <div className="floating-lines-container" style={{ opacity: 0 }} />;
}

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