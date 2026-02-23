"use client";
import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';

export default function CardParcurs({item}){
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
            <div ref={ref} className={`${styles.cardParcurs} ${isVisible ? styles.show : ""}`}>
                    <div className={styles.number}>
                        {item.id}
                    </div>
                    <div className={styles.titleCardParcurs}>
                        {item.titlu}
                    </div>
                    <p>{item.descriere}</p>
            </div>
    )
}