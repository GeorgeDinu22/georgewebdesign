"use client";
import { useState, useRef, useEffect } from "react";
import GlareHover from '../GlareHover'
import dynamic from "next/dynamic";

const FormularContact = dynamic(() => import("../ModalContact/ModalContact"), {
    ssr: false,
})

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
        <FormularContact 
        show={showModalContact}
        animation={showModalContact}
        onClose={() => setShowModalContact(false)}
        />
        <div ref={!noRef ? ref : null} onClick={() => setShowModalContact(true)} className={`buttonContact  ${isVisible ? "showButton" : ""}`}>
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
        className="glareButton"
    >
        {textBtn}
        </GlareHover>
    </div>
        </>
    )
}