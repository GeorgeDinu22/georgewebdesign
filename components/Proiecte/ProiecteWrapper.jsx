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
    // Dacă am intersectat deja, nu mai observăm
    if (hasIntersected) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect(); // Oprim observarea după prima intersecție
        }
      },
      {
        rootMargin: "150px", // Începe încărcarea cu 200px înainte ca utilizatorul să ajungă la secțiune
        threshold: 0.25
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasIntersected]);

  return (
    <div ref={containerRef} style={{ minHeight: "100vh" }}>
      {hasIntersected ? (
        <Proiecte />
      ) : (
        <div style={{ height: "100vh" }}></div>
      )}
    </div>
  );
}