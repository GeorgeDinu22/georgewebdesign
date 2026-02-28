"use client";
import {Code, Handshake, Palette, Zap, LayoutDashboard, Clock } from 'lucide-react';
import Image from 'next/image';
import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';

export default function CardWhy({item, index}){
    const iconMap = {
                        Code,
                        Handshake,
                        Palette,
                        Zap,
                        LayoutDashboard,
                        Clock
                    };

    const Icon = iconMap[item.icon];

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
        <div ref={ref} className={`${styles.cardWhy}  ${isVisible ? styles.show : ""}`}>
                <div className={styles.icon}>
                    <Icon size="30" color="#FF8A00"/>
                </div>
                <h4>{item.titlu}</h4>
                <p>{item.descriere}</p>
                {index == 0 && (
                    <Image
                    className={styles.backgroundCard}
                    src={"/cardBackground.png"}
                    alt=''
                    width={400}
                    height={400}
                    />
                )}
        </div>
    )
}