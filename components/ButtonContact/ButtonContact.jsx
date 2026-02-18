"use client";
import { useState } from "react";
import "./styles.css";
import GlareHover from '../GlareHover'
import ModalContact from '../ModalContact/ModalContact';

export default function ButtonContact({textBtn}){

    const [showModalContact, setShowModalContact] = useState(false);

    return(
        <>
        <ModalContact 
        show={showModalContact}
        animation={showModalContact}
        onClose={() => setShowModalContact(false)}
        />
    <div onClick={() => setShowModalContact(true)} className="buttonContact">
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