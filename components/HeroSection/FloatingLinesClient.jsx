"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Prism = dynamic(() => import("../Prism"), {
  ssr: false,
  loading: () => <div className="w-full h-full opacity-0" />,
});

export default function FloatingLinesClient() {
  const [startEffect, setStartEffect] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setStartEffect(true);
    }, 250);

    return () => clearTimeout(t);
  }, []);

  if (!startEffect) {
    return <div className="floating-lines-container" style={{ opacity: 0 }} />;
  }

  return (
    <Prism
      animationType="rotate"
      timeScale={0.5}
      height={10.5}
      baseWidth={5.5}
      scale={2}
      hueShift={2}
      colorFrequency={1}
      noise={0}
      glow={1}
    />
  );
}