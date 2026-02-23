"use client";
import styles from './styles.module.css';
import CardRecenzie from './CardRecenzie';
import { useEffect, useRef, useState } from 'react';

export default function Recenzii(){

    const recenzii = [
    {
    nume:"State Mihai",
        src:"/mihaiStateRecenzie.mp4",
        proiecte:[
            "mihaistate-abonare.ro",
            "statemihai.ro"
        ],
    },
    {
        nume:"Costi Pasa",
        src:"/costipasaRecenzie.mp4",
        proiecte:[
            "mombubyinfinity.ro",
            "infinitylounge.ro"
        ],
    },
    {
        nume:"Costi Grigore",
        src:"/costiGrigoreRecenzie.mp4",
        proiecte:[
            "joydetailing.ro",
        ],
    }
    ]

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

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

    return(
        <>
        <div id='recenzii' className={styles.bodyRecenzii}>
            <div ref={ref} className={`${styles.containerTitle} ${isVisible ? styles.show : ""}`}>
               <h2>Părerea Clienților <strong>Contează</strong></h2>
                <p>
                Am lucrat cu oameni din domenii diferite, fiecare cu provocări specifice și nevoi complexe,
                dar cu un scop comun: creșterea vizibilității lor în <span>online</span>.
                </p>
            </div>
            <div className={styles.containerRecenzii}>
                {recenzii.map((recenzie, index) => (
                    <CardRecenzie 
                        key={index} 
                        recenzie={recenzie}
                    />
                ))}
            </div>
        </div>
        </>
    )
}