"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header() {
    const [droped, SetDroped] = useState(false);
    const [radius, setRadius] = useState(false);
    const headerRef = useRef(null);

    const [activeLink, setActiveLink] = useState("/"); 
    const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 }); 
    const navRef = useRef({}); 

    const navLinks = [
        { name: "Acasă", href: "/" },
        { name: "Proiecte", href: "#proiecte" },
        { name: "Despre Mine", href: "#despreMine" },
        { name: "Recenzii", href: "#recenzii" },
        { name: "Contact", href: "#contact" },
    ];

    const HandleBoxCLick = () => {
        SetDroped(prev => !prev);
        if (!droped) {
            setRadius(true);
        } else {
            setTimeout(() => {
                setRadius(false);
            }, 400);
        }
    }

    useEffect(() => {
        let Scroll_Initial = window.scrollY;

        const handleScroll = () => {
            let current_Scroll = window.scrollY;

            if (current_Scroll > Scroll_Initial + 4 && current_Scroll > 20) {
                headerRef.current?.classList.add("headerHidden");
                SetDroped(false);
            } else if (current_Scroll < Scroll_Initial - 4 || current_Scroll <= 20) {
                headerRef.current?.classList.remove("headerHidden");
                setRadius(false);
            }
            Scroll_Initial = current_Scroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const updateLinePosition = () => {
            const currentElement = navRef.current[activeLink];
            if (currentElement) {
                setLineStyle({
                    left: currentElement.offsetLeft,
                    width: currentElement.offsetWidth
                });
            }
        };

        const timeout = setTimeout(updateLinePosition, 50);
        
        window.addEventListener('resize', updateLinePosition);
        
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', updateLinePosition);
        };
    }, [activeLink]); 

    return (
        <>
            <header className={`${radius ? "headerRadius" : ""}`} ref={headerRef}>
                <Link className="logo" href="/" onClick={() => setActiveLink("/")}>
                    <Image
                        src="/logo.svg"
                        alt="George Web Design"
                        width={150}
                        height={50}
                        priority
                    />
                </Link>

                <div className="orizontalNavigation" style={{ position: 'relative' }}>
                    <div 
                        className="floatingLine" 
                        style={{
                            left: `${lineStyle.left}px`,
                            width: `${lineStyle.width}px`
                        }}
                    ></div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`linkHeaderHor ${activeLink === link.href ? "active" : ""}`}
                            onClick={() => setActiveLink(link.href)}
                            ref={(el) => (navRef.current[link.href] = el)} 
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div onClick={() => HandleBoxCLick()} className="box">
                    <div className={`line ${droped ? "cross" : ""}`}></div>
                    <div className={`line ${droped ? "cross" : ""}`}></div>
                    <div className={`line ${droped ? "cross" : ""}`}></div>
                </div>

                <div className={`dropDown ${droped ? "droped" : ""}`}>
                    {navLinks.map((link) => (
                         <Link 
                            key={link.name}
                            onClick={() => { HandleBoxCLick(); setActiveLink(link.href); }} 
                            className="linkHeader" 
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </header>
        </>
    )
}