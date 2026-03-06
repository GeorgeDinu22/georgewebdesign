"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import GlareHover from "../GlareHover";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";

const FormularContact = dynamic(() => import("../ModalContact/ModalContact"), {
  ssr: false,
});

export default function Header() {
  const [droped, SetDroped] = useState(false);
  const [radius, setRadius] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const [showModalContact, setShowModalContact] = useState(false);

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
    SetDroped((prev) => !prev);

    if (!droped) {
      setRadius(true);
    } else {
      setTimeout(() => {
        setRadius(false);
      }, 400);
    }
  };

  useEffect(() => {
    let Scroll_Initial = window.scrollY;

    const handleScroll = () => {
      let current_Scroll = window.scrollY;

      if (current_Scroll > Scroll_Initial + 4 && current_Scroll > 20) {
        setIsHidden(true);
        SetDroped(false);
      } else if (current_Scroll < Scroll_Initial - 4 || current_Scroll <= 20) {
        setIsHidden(false);
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
          width: currentElement.offsetWidth,
        });
      }
    };

    const timeout = setTimeout(updateLinePosition, 50);

    window.addEventListener("resize", updateLinePosition);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateLinePosition);
    };
  }, [activeLink]);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  const headerClasses = [
    styles.header,
    isVisible ? styles.headerVisible : "",
    isHidden ? styles.headerHidden : "",
    radius ? styles.headerRadius : "",
  ].join(" ");

  return (
    <>
      <FormularContact
        show={showModalContact}
        animation={showModalContact}
        onClose={() => setShowModalContact(false)}
      />

      <header className={headerClasses} ref={headerRef}>
        <Link
          className={styles.logo}
          href="/"
          onClick={() => setActiveLink("/")}
        >
          <Image
            src="/logo.svg"
            alt="George Web Design"
            width={150}
            height={50}
            priority
          />
        </Link>

        <div className={styles.orizontalNavigation}>
          <div
            className={styles.floatingLine}
            style={{
              left: `${lineStyle.left}px`,
              width: `${lineStyle.width}px`,
            }}
          />

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.linkHeaderHor}
              onClick={() => setActiveLink(link.href)}
              ref={(el) => (navRef.current[link.href] = el)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div onClick={HandleBoxCLick} className={styles.box}>
          <div
            className={`${styles.line} ${droped ? styles.cross : ""}`}
          ></div>
          <div
            className={`${styles.line} ${droped ? styles.cross : ""}`}
          ></div>
          <div
            className={`${styles.line} ${droped ? styles.cross : ""}`}
          ></div>
        </div>

        <div
          className={`${styles.dropDown} ${
            droped ? styles.droped : ""
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              onClick={() => {
                HandleBoxCLick();
                setActiveLink(link.href);
              }}
              className={styles.linkHeader}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div
          onClick={() => setShowModalContact(true)}
          className={styles.ctaHeader}
        >
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
            className={styles.glareButtonHeader}
          >
            Solicită o ofertă
          </GlareHover>
        </div>
      </header>
    </>
  );
}