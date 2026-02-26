"use client";

import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';

const HartaClient = dynamic(() => import('./HartaEu'), {
  ssr: false,
  loading: () => (
      <div className={styles.containerHarta} style={{ background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{color: '#696969'}}>Se încarcă harta...</p>
      </div>
  )
});


export default function CineSuntEu(){


useEffect(() => {
        // Selectăm toate elementele care trebuie animate
        const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Array.from(elements).indexOf(entry.target);
                        entry.target.style.transitionDelay = `${index * 150}ms`;
                        entry.target.classList.add(styles.show);
                        
                        observer.unobserve(entry.target);
                    }
                });
            },
            { 
                threshold: 0.25
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return(
        <div id='despreMine' className={styles.bodyEu}>

        <div className={styles.leftPart}>
            <div className={`${styles.containerTitle}  ${styles.animateOnScroll}`}>
                <h2>Despre mine</h2>
            </div>

            <div className={styles.containerEU}>

                <p className={styles.animateOnScroll}>
                    Mă numesc <strong>Dinu George</strong> și mă ocup cu realizarea 
                    platformelor digitale și a site-urilor de prezentare moderne.
                </p>

                <p className={styles.animateOnScroll}>
                    Scopul meu este ca fiecare client cu care lucrez să aibă o 
                    imagine curată în online, o prezență solidă și 
                    bine conturată, cu un aspect modern și orientat spre rezultate.
                </p>

               <p className={styles.animateOnScroll}>
                    Când vine vorba de AI sau template-uri deja făcute, cred că nu poți avea 
                    performanțe excelente atunci când singura ta prezenta în online este identică 
                    cu a altor zeci de afaceri. Diferența reală și rezultatele apare atunci când tehnologia este 
                    combinată cu gândire strategică, atenția la detalii și o abordare complet de la zero pentru viziunea ta.
                </p>
            </div>
        </div>  

    <div className={styles.rightPart}>
        <div className={`${styles.wrapperImageEu} ${styles.animateOnScroll}`}>
            <Image
            src="/aboutMeV2.jpeg"
            width={700}
            height={700}
            alt=''
            />
        </div>
        </div>

        <HartaClient/>
    </div>
    )
}