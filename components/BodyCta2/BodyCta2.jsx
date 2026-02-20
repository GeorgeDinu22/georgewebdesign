"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from './styles.module.css';
import ButtonContact from "../ButtonContact/ButtonContact";

const ThreeDMarquee = dynamic(
  () => import("@/components/ui/3d-marquee").then(mod => mod.ThreeDMarquee),
  { ssr: false }
);

export default function BodyCta2(){

  const [showMarquee, setShowMarquee] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMarquee(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: "300px",
        threshold: 0.2 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

      const images = [
    "/proiecte/statemihai.ro_ImageV2.png",
    "/galerieProiecte/statemihai-1.png",
    "/galerieProiecte/statemihai-2.png",

    "/proiecte/mihaistate-abonare.ro_Image.png",
    "/galerieProiecte/mihaistate-abonare-2.png",

    "/proiecte/mombu.png",
    "/galerieProiecte/mombu-3.png",
    "/galerieProiecte/mombu-2.png",
    "/galerieProiecte/mombu-4.png",

    "/proiecte/joydetailing.ro_ImageV2.png",
    "/galerieProiecte/joy-1.png",
    "/galerieProiecte/joy-2.png",
    "/galerieProiecte/joy-3.png",

    "/proiecte/infinitylounge.ro_ImageV2.png",
    "/galerieProiecte/infinitylounge-1.png",
    "/galerieProiecte/infinitylounge-3.png",
    "/galerieProiecte/infinitylounge-4.png",
    "/proiecte/mihaistate-abonare.ro_Image.png",
    "/galerieProiecte/mihaistate-abonare-2.png",
    

    "/proiecte/mombu.png",
    "/galerieProiecte/mombu-3.png",
    "/galerieProiecte/mombu-2.png",
    "/galerieProiecte/mombu-4.png",

    "/proiecte/joydetailing.ro_ImageV2.png",
    "/galerieProiecte/joy-1.png",
    "/galerieProiecte/joy-2.png",
    "/galerieProiecte/joy-3.png",

    "/proiecte/infinitylounge.ro_ImageV2.png",
    "/galerieProiecte/infinitylounge-1.png",
    "/galerieProiecte/infinitylounge-3.png",
    "/galerieProiecte/infinitylounge-4.png"
];

  return(
    <div className={styles.bodyCta2} ref={containerRef}>
      <div className={styles.containerMarquee}>
        {showMarquee && (
          <ThreeDMarquee className={styles.marquee} images={images} />
        )}
      </div>

      <div className={styles.overlayCta}>
        <h3>Gata să îți duci afacerea la <span>următorul nivel?</span></h3>
        <p>Construim împreună un website care atrage, convinge și generează rezultate</p>
        <div className={styles.containerButton}>
          <ButtonContact textBtn={"Hai să discutăm"}/>
        </div>
      </div>
    </div>
  )
}