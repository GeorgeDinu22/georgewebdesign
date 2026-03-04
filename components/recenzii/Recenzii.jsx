"use client";
import styles from './styles.module.css';
import CardRecenzie from './CardRecenzie';
import { useEffect, useRef, useState } from 'react';

export default function Recenzii(){

    const recenzii = [
    {
    nume:"State Mihai",
        src:"https://vz-69541a13-059.b-cdn.net/e5db8ed7-01b7-4040-900d-15af70231f7c/playlist.m3u8",
        proiecte:[
            "mihaistate-abonare.ro",
            "statemihai.ro"
        ],
        poster: "https://vz-69541a13-059.b-cdn.net/e5db8ed7-01b7-4040-900d-15af70231f7c/thumbnail_b423b35b.jpg"
    },
    {
        nume:"Costi Pasa",
        src:"https://vz-69541a13-059.b-cdn.net/c31f2168-94ca-4b47-aca9-4fdc359b8587/playlist.m3u8",
        proiecte:[
            "mombubyinfinity.ro",
            "infinitylounge.ro"
        ],
        poster: "https://vz-69541a13-059.b-cdn.net/c31f2168-94ca-4b47-aca9-4fdc359b8587/thumbnail_58977298.jpg"
    },
    {
        nume:"Costi Grigore",
        src:"https://vz-69541a13-059.b-cdn.net/ee580ea0-f4ba-40ea-bd57-aa237e635bd7/playlist.m3u8",
        proiecte:[
            "joydetailing.ro",
        ],
        poster: "https://vz-69541a13-059.b-cdn.net/ee580ea0-f4ba-40ea-bd57-aa237e635bd7/thumbnail_4f45b977.jpg"
    }
    ]

    const [isVisible, setIsVisible] = useState(false);
    const [containerVisible, setContainerVisible] = useState(false);
    const ref = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
        }
        },
        { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
    }, []);

        useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            setContainerVisible(true);
        }
        },
        {   rootMargin:"200px",
            threshold: 0.1
         }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
    }, []);

    return(
        <>
        <div ref={containerRef} id='recenzii' className={styles.bodyRecenzii}>
            <div ref={ref} className={`${styles.containerTitle} ${isVisible ? styles.show : ""}`}>
               <h2>Părerea Clienților <strong>Contează</strong></h2>
                <p>
                Am lucrat cu oameni din domenii diferite, fiecare cu provocări specifice și nevoi complexe,
                dar cu un scop comun: creșterea vizibilității lor în <span>online.</span>
                </p>
            </div>
            {containerVisible && (
            <div className={styles.containerRecenzii}>
                {recenzii.map((recenzie, index) => (
                    <CardRecenzie 
                        key={index} 
                        recenzie={recenzie}
                    />
                ))}
            </div>
            )}
        </div>
        </>
    )
}