"use client";

import { useEffect, useState } from "react";
import FloatingLines from '../FloatingLines';
import './styles.css';

export default function FloatingLinesClient() {
  const [startEffect, setStartEffect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartEffect(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {startEffect && (
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
      )}
    </>
  );
}
