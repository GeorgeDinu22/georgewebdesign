"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import GlareHover from '../GlareHover'
import ModalContact from '../ModalContact/ModalContact';

export default function ButtonContact({textBtn, noRef}){

    const [showModalContact, setShowModalContact] = useState(false);

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
        <ModalContact 
        show={showModalContact}
        animation={showModalContact}
        onClose={() => setShowModalContact(false)}
        />
        <div ref={!noRef ? ref : null} onClick={() => setShowModalContact(true)} className={` ${styles.buttonContact}  ${isVisible ? styles.show : ""}`}>
        <GlareHover
        glareColor="#ffffff"
        glareOpacity={1}
        glareAngle={-30}
        glareSize={500}
        transitionDuration={2250}
        playOnce
        width="200"
        height="200"
        background="#FF8A00"
        className={styles.glareButton}
    >
        {textBtn}
        </GlareHover>
    </div>
        </>
    )
}