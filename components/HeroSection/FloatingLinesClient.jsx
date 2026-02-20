"use client";

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Mutăm importul dinamic AICI
const FloatingLines = dynamic(() => import('../FloatingLines'), {
  ssr: false
});

export default function FloatingLinesClient() {
  const [startEffect, setStartEffect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartEffect(true);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <FloatingLines 
        enabledWaves={["top","middle","bottom"]}
        linesGradient={["#FF8A00", "#ffb347"]}
        lineCount={4} 
        lineDistance={5}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={false}
        parallax={false}
    />
  );
}