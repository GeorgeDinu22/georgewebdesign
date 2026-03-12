"use client"

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Proiecte = dynamic(() => import("./Proiecte"), {
    loading: () => <div style={{ height: "100vh" }}></div>,
    ssr: false,
});

export default function ProiecteWrapper() {
  const [hasIntersected, setHasIntersected] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (hasIntersected) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect(); 
        }
      },
      {
        rootMargin: "150px",
        threshold: 0.25
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasIntersected]);

  return (
    <div id="proiecte" ref={containerRef} style={{ minHeight: "100vh" }}>
      {hasIntersected ? (
        <Proiecte />
      ) : (
        <div style={{ height: "100vh" }}></div>
      )}
    </div>
  );
}