"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiNextdotjs, SiSupabase, SiReact, SiMysql, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { FaStripe, FaPhp } from "react-icons/fa";
import { ExternalLink, Expand, X } from 'lucide-react';
import { useRouter } from "next/navigation";
import { m, AnimatePresence, LazyMotion, domMax } from "framer-motion";
import styles from "./styles.module.css";

const proiecte = [
    {
        nume: "statemihai.ro",
        imagine: "/proiecte/statemihai.ro_ImageV2.png",
        url: "https://www.statemihai.ro",
        dataLansare: "04-02-2026",
        descriere:
        "Platformă eCommerce pentru coaching fitness remote, cu plăți integrate, emailuri tranzacționale automate și panou complet de administrare.",
        documentatie: `Platformă digitală de tip eCommerce dedicată coaching-ului fitness remote.

    Include sistem de plăți integrate prin Stripe, gestionarea abonamentelor recurente și automatizare completă a emailurilor tranzacționale (confirmare plată, retry payment, notificări expirare abonament).

    Dispune de panou de administrare pentru gestionarea comenzilor, produselor și statisticilor.`,
        tehnologii: [
        { nume: "Next JS", icon: SiNextdotjs, color: "#ffffff" },
        { nume: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { nume: "React", icon: SiReact, color: "#61DAFB" },
        { nume: "Stripe", icon: FaStripe, color: "#635BFF" },
        ],
        galerie: [
        "/galerieProiecte/statemihai-1.png",
        "/galerieProiecte/statemihai-1.png",
        "/galerieProiecte/statemihai-2.png",
        ],
    },
    {
        nume: "mihaistate-abonare.ro",
        imagine: "/proiecte/mihaistate-abonare.ro_Image.png",
        url: "https://www.mihaistate-abonare.ro",
        dataLansare: "06-11-2025",
        descriere:
        "Landing page pentru newsletter cu sistem de abonare și panou de administrare pentru gestionarea campaniilor.",
        documentatie: `Platformă de newsletter construită în jurul unui landing page optimizat pentru conversie.

    Include sistem de colectare și segmentare a abonaților, precum și panou de administrare cu statistici despre livrabilitate, rata de deschidere (open rate) și gestionarea listelor de email.

    Permite administrarea campaniilor și analiza performanței acestora într-un mod simplu și eficient.`,
        tehnologii: [
        { nume: "PHP", icon: FaPhp, color: "#777BB4" },
        { nume: "MY SQL", icon: SiMysql, color: "#4479A1" },
        { nume: "HTML", icon: SiHtml5, color: "#E34F26" },
        { nume: "CSS", icon: SiCss3, color: "#1572B6" },
        { nume: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        ],
        galerie: [
        "/galerieProiecte/mihaistate-abonare-1.png",
        "/galerieProiecte/mihaistate-abonare-2.png",
        ],
    },
    {
        nume: "mombubyinfinity.ro",
        imagine: "/proiecte/mombu.png",
        url: "https://www.mombubyinfinity.ro",
        dataLansare: "08-10-2025",
        descriere:
        "Site de prezentare pentru restaurant, cu panou de administrare pentru meniu și anunțuri.",
        documentatie: `Website de prezentare modern pentru restaurant, conceput pentru a evidenția meniul, atmosfera locației și informațiile esențiale pentru clienți.

        Include un panou de administrare care permite actualizarea meniurilor, prețurilor și anunțurilor speciale printr-o interfață intuitivă și ușor de gestionat.`,
        tehnologii: [
        { nume: "PHP", icon: FaPhp, color: "#777BB4" },
        { nume: "MY SQL", icon: SiMysql, color: "#4479A1" },
        { nume: "HTML", icon: SiHtml5, color: "#E34F26" },
        { nume: "CSS", icon: SiCss3, color: "#1572B6" },
        { nume: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        ],
        galerie: [
        "/galerieProiecte/mombu-3.png",
        "/galerieProiecte/mombu-2.png",
        "/galerieProiecte/mombu-4.png",
        ],
    },
    {
        nume: "joydetailing.ro",
        imagine: "/proiecte/joydetailing.ro_ImageV2.png",
        url: "https://www.joydetailing.ro",
        dataLansare: "25-08-2025",
        descriere:
        "Website de prezentare pentru servicii de detailing auto, cu newsletter integrat și panou de administrare.",
        documentatie: `Site de prezentare pentru servicii profesionale de detailing auto, structurat pentru claritate și conversie.

    Include sistem de abonare la newsletter și panou de administrare pentru gestionarea conținutului și a bazei de abonați.`,
        tehnologii: [
        { nume: "PHP", icon: FaPhp, color: "#777BB4" },
        { nume: "MY SQL", icon: SiMysql, color: "#4479A1" },
        { nume: "HTML", icon: SiHtml5, color: "#E34F26" },
        { nume: "CSS", icon: SiCss3, color: "#1572B6" },
        { nume: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        ],
        galerie: [
        "/galerieProiecte/joy-1.png",
        "/galerieProiecte/joy-2.png",
        "/galerieProiecte/joy-3.png",
        ],
    },
    {
        nume: "infinitylounge.ro",
        imagine: "/proiecte/infinitylounge.ro_ImageV2.png",
        url: "https://infinity-lounge.ro",
        dataLansare: "10-03-2025",
        descriere:
        "Site de prezentare pentru lounge, cu meniu inclus și prezentare detaliată a locației.",
        documentatie: `Website de prezentare pentru lounge, construit pentru a transmite atmosfera și identitatea locației.

    Include meniu digital integrat, prezentarea spațiului și informații esențiale pentru clienți.`,
        tehnologii: [
        { nume: "HTML", icon: SiHtml5, color: "#E34F26" },
        { nume: "CSS", icon: SiCss3, color: "#1572B6" },
        { nume: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        ],
        galerie: [
        "/galerieProiecte/infinitylounge-1.png",
        "/galerieProiecte/infinitylounge-3.png",
        "/galerieProiecte/infinitylounge-4.png",
        ],
    },
];

export default function Proiecte() {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.style.overflow = "hidden";
        } else {
            const timer = setTimeout(() => {
                document.body.style.overflow = "auto";
                document.body.style.paddingRight = "0px";
            }, 100); 
            return () => clearTimeout(timer);
        }
    }, [selectedProject]);

    return (
        <LazyMotion features={domMax}>
            <div id="proiecte" className={styles.bodyProiecte}>
                <div className={`${styles.fundalGrid} ${styles.mask}`}></div>
                <div className={styles.containerTitlu}>
                    <m.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Proiecte care aduc <strong>Valoare</strong>
                    </m.h2>
                    
                    <m.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        Fiecare proiect este diferit, iar soluțiile trebuie să fie la fel. De la strategie și structură până la design și performanță, fiecare detaliu este optimizat pentru rezultate reale.
                    </m.p>
                </div>
                
                <div className={styles.containerProiecte}>
                    {proiecte.map((p, i) => (
                        <m.div
                            key={i}
                            className={styles.cardProiect}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }} 
                            transition={{ duration: 0.55}}
                        >
                            <m.div className={styles.wrapperImagine} layoutId={`image-wrapper-${p.nume}`}>
                                <Image
                                    className={styles.imagineProiect}
                                    src={p.imagine}
                                    width={800}
                                    height={400}
                                    alt={p.nume}
                                    sizes="(max-width: 850px) 94vw, (max-width: 1100px) 45vw, 30vw"
                                />
                                <div className={styles.containerHover}>
                                    <div className={styles.continutHover}>
                                        <div className={styles.visitSite}>
                                            <ExternalLink onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(p.url, "_blank");
                                            }} size={24} strokeWidth={2.75} />
                                        </div>
                                        <div
                                         onClick={() => setSelectedProject(p)} 
                                         className={styles.detaliiProiect}>
                                            <Expand size={24} strokeWidth={2.5} />
                                        </div>
                                    </div>
                                </div>
                            </m.div>
                            
                            <div className={styles.contentCard}>
                                <m.p className={styles.numeProiect}>
                                    {p.nume}
                                </m.p>
                                <p className={styles.dataLanasare}>{p.dataLansare}</p>
                                <div className={styles.cardProdusBreakLine}></div>
                                <m.p className={styles.descriereProiect}>{p.descriere}</m.p>
                                
                                <div className={styles.techStack}>
                                    {p.tehnologii.map((tech, index) => { 
                                        const Icon = tech.icon;
                                        return (
                                            <div key={index} className={styles.techCard}>
                                                <Icon size={20} color={tech.color} />
                                                <p>{tech.nume}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <m.div
                            className={styles.modalOverlay}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                        >
                            <m.div
                                className={styles.modalContent}
                                onClick={(e) => e.stopPropagation()}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }} 
                            >
                                <m.button
                                    className={styles.closeModalBtn}
                                    onClick={() => setSelectedProject(null)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }} 
                                >
                                    <X size={28} />
                                </m.button>

                                <m.div className={styles.modalBody}>
                                    <m.div
                                        className={styles.modalImageContainer}
                                        layoutId={`image-wrapper-${selectedProject.nume}`}
                                    >
                                        <Image
                                            src={selectedProject.imagine}
                                            alt={selectedProject.nume}
                                            width={1000}
                                            height={1050}
                                            className={styles.modalImage}
                                            style={{ objectFit: "cover" }}
                                            sizes="100vw"
                                        />
                                    </m.div>

                                    <div className={styles.modalHeader}>
                                        <m.h2
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 , duration: 0.4 }}
                                            >
                                            {selectedProject.nume}
                                        </m.h2>
                                        <m.span 
                                            className={styles.dataLanasare}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 , duration: 0.4 }}
                                        >
                                            {selectedProject.dataLansare}
                                        </m.span>
                                    </div>
                                    
                                    <div className={styles.modalBreakLine}></div>

                                    <m.div
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.4 }} 
                                    >
                                        <div className={styles.sectionModal}>
                                            <h3>Descriere Proiect</h3>
                                            <p className={styles.modalDescriere}>
                                                {selectedProject.documentatie || selectedProject.descriere}
                                            </p>
                                        </div>

                                        <div className={styles.modalBreakLine}></div>

                                        {selectedProject.galerie && selectedProject.galerie.length > 0 && (
                                            <>
                                                <div className={styles.scrollerImages}>
                                                    {selectedProject.galerie.map((imagine, index) => (
                                                        <div key={index} className={styles.cardImageScroll}>
                                                            <Image
                                                                src={imagine}
                                                                width={800}
                                                                height={800}
                                                                alt={`Imagine ${index}`}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className={styles.modalBreakLine}></div>
                                            </>
                                        )}

                                        <div className={styles.sectionModal}>
                                            <h3 className={styles.headingTech}>Tehnologii Folosite</h3>
                                            <div style={{ margin: "12px 0 0 4px" }} className={styles.techStack}>
                                                {selectedProject.tehnologii.map((tech, index) => {
                                                    const Icon = tech.icon;
                                                    return (
                                                        <div key={index} className={styles.techCard}>
                                                            <Icon size={20} color={tech.color} />
                                                            <p>{tech.nume}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <button className={styles.modalVisitBtn} onClick={() => window.open(selectedProject.url, '_blank')}>
                                            Vezi Site-ul Live<ExternalLink size={20} strokeWidth={2.75} style={{ marginLeft: '8px' }} />
                                        </button>
                                    </m.div>
                                </m.div>
                            </m.div>
                        </m.div>
                    )}
                </AnimatePresence>
            </div>
        </LazyMotion>
    )
}