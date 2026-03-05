"use client"
import dynamic from "next/dynamic";
import styles from './styles.module.css';
import { useEffect, useRef, useState } from "react";

const HartaClient = dynamic(() => import("./HartaEu"), {
  ssr: false,
  loading: () => <div className={styles.skeletonHarta}>Se încarcă harta...</div>
});

export default function HartaWrapper() {
  const [isMounted, setIsMounted] = useState(false); 
  const [isVisible, setIsVisible] = useState(false); 
  const mapRef = useRef(null);

  useEffect(() => {
    const currentElement = mapRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isMounted) {
        setIsMounted(true);
      }

      if (entry.intersectionRatio > 0.4) {
        setIsVisible(true);
        observer.disconnect(); 
      }
    }, {
      rootMargin: "200px", 
      threshold: [0, 0.75] 
    });

    observer.observe(currentElement);

    return () => observer.disconnect();
  }, [isMounted]);

  return (
    <div 
      ref={mapRef}  
      className={`${styles.containerHarta} ${isVisible ? styles.hartaActiva : ""}`}
    >
      {isMounted ? <HartaClient /> : null}
    </div>
  );
}