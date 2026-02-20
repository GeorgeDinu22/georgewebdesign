"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiNextdotjs, SiSupabase, SiReact, SiMysql, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { FaStripe, FaPhp } from "react-icons/fa";
import { ExternalLink, Expand, X } from 'lucide-react';
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";

const proiecte = [
        {
            nume:"statemihai.ro",
            imagine:"/proiecte/statemihai.ro_ImageV2.png",
            url:"https://www.statemihai.ro",
            dataLansare:"04-02-2026",
            descriere: "Aplicație online pentru antrenament personalizat, cu plăți integrate și management complet al utilizatorilor",
            documentatie:
                "Aplicație online completă pentru antrenament personalizat, concepută pentru antrenori și clienți care doresc o experiență digitală modernă, eficientă și scalabilă.\n\n" +
                "Platforma permite crearea și gestionarea programelor de antrenament personalizate, adaptate obiectivelor, nivelului de experiență și progresului fiecărui utilizator.\n\n" +
                "Sistemul include management avansat al utilizatorilor, cu roluri diferite (antrenor / client), autentificare securizată și profiluri personalizate.\n" +
                "Antrenorii pot urmări evoluția clienților, pot actualiza planurile de antrenament în timp real și pot oferi feedback direct din platformă.\n\n" +
                "Plățile sunt complet integrate prin Stripe, oferind abonamente recurente, plăți sigure și gestionarea automată a facturării.\n" +
                "Utilizatorii au acces rapid la istoricul plăților și la statusul abonamentului, iar antrenorii pot administra cu ușurință pachetele disponibile.\n\n" +
                "Platforma este construită cu focus pe performanță, scalabilitate și experiență premium, folosind tehnologii moderne precum Next.js, React și Supabase.\n" +
                "Interfața este optimizată pentru desktop și mobile, oferind o experiență fluidă și intuitivă pe orice dispozitiv.",
            tehnologii:[
                { nume:"Next JS", icon:SiNextdotjs, color: "#ffffff" },
                { nume:"Supabase", icon:SiSupabase, color: "#3ECF8E" },
                { nume:"React", icon:SiReact, color: "#61DAFB" },
                { nume:"Stripe", icon:FaStripe, color: "#635BFF" }
            ],
            galerie:[
                "/galerieProiecte/statemihai-1.png",
                 "/galerieProiecte/statemihai-1.png",
                "/galerieProiecte/statemihai-2.png"
            ]
        },
        {
            nume:"mihaistate-abonare.ro",
            imagine:"/proiecte/mihaistate-abonare.ro_Image.png",
            url:"https://www.mihaistate-abonare.ro",
            dataLansare:"06-11-2025",
            descriere: "Aplicație online pentru antrenament personalizat, cu plăți integrate și management complet al utilizatorilor",
            documentatie:"",
            tehnologii:[
                { nume:"PHP", icon:FaPhp, color: "#777BB4" },
                { nume:"MY SQL", icon:SiMysql, color: "#4479A1" },
                { nume:"HTML", icon:SiHtml5, color: "#E34F26" },
                { nume:"CSS", icon:SiCss3, color: "#1572B6" },
                { nume:"Java Script", icon:SiJavascript, color: "#F7DF1E" }
            ],
            galerie:[
                "/galerieProiecte/mihaistate-abonare-3.png",
                 "/galerieProiecte/mihaistate-abonare-2.png"
            ]
        },
        {
            nume:"mombubyinfinity.ro",
            imagine:"/proiecte/mombu.png",
            url:"https://www.mombubyinfinity.ro",
            dataLansare:"08-10-2025",
            descriere: "Aplicație online pentru antrenament personalizat, cu plăți integrate și management complet al utilizatorilor",
            documentatie:"",
            tehnologii:[
                { nume:"PHP", icon:FaPhp, color: "#777BB4" },
                { nume:"MY SQL", icon:SiMysql, color: "#4479A1" },
                { nume:"HTML", icon:SiHtml5, color: "#E34F26" },
                { nume:"CSS", icon:SiCss3, color: "#1572B6" },
                { nume:"Java Script", icon:SiJavascript, color: "#F7DF1E" }
            ],
            galerie:[
                "/galerieProiecte/mombu-3.png",
                "/galerieProiecte/mombu-2.png",
                "/galerieProiecte/mombu-4.png"
            ]
        },
        {
            nume:"joydetailing.ro",
            imagine:"/proiecte/joydetailing.ro_ImageV2.png",
            url:"https://www.joydetailing.ro",
            dataLansare:"25-08-2025",
            descriere: "Aplicație online pentru antrenament personalizat, cu plăți integrate și management complet al utilizatorilor",
            documentatie:"",
            tehnologii:[
                { nume:"PHP", icon:FaPhp, color: "#777BB4" },
                { nume:"MY SQL", icon:SiMysql, color: "#4479A1" },
                { nume:"HTML", icon:SiHtml5, color: "#E34F26" },
                { nume:"CSS", icon:SiCss3, color: "#1572B6" },
                { nume:"Java Script", icon:SiJavascript, color: "#F7DF1E" }
            ],
            galerie:[
                "/galerieProiecte/joy-1.png",
                "/galerieProiecte/joy-2.png",
                "/galerieProiecte/joy-3.png"
            ]
        },
        {
            nume:"infinitylounge.ro",
            imagine:"/proiecte/infinitylounge.ro_ImageV2.png",
            url:"https://infinity-lounge.ro",
            dataLansare:"10-03-2025",
            descriere: "Aplicație online pentru antrenament personalizat, cu plăți integrate și management complet al utilizatorilor",
            documentatie:"",
            tehnologii:[
                { nume:"HTML", icon:SiHtml5, color: "#E34F26" },
                { nume:"CSS", icon:SiCss3, color: "#1572B6" },
                { nume:"Java Script", icon:SiJavascript, color: "#F7DF1E" }
            ],
            galerie:[
                "/galerieProiecte/infinitylounge-1.png",
                "/galerieProiecte/infinitylounge-3.png",
                "/galerieProiecte/infinitylounge-4.png",
            ]
        }
    ]

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
        <div className="bodyProiecte">
            <div className="fundalGrid mask"></div>
            <div className="containerTitlu">
                <h2>Proiecte care aduc <strong>Valoare</strong></h2>
                <p>Fiecare proiect este diferit, așa că necesită un proces amplu de dezvoltare și un set de tehnologii concepute special pentru acea misiune.</p>
            </div>
            
            <div className="containerProiecte">
                {proiecte.map((p, i) => (
                    <motion.div
                        key={i}
                        className="cardProiect"
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }} 
                        transition={{ duration: 0.4}}
                    >
                        <motion.div className="wrapperImagine" layoutId={`image-wrapper-${p.nume}`}>
                            <Image
                                className="imagineProiect"
                                src={p.imagine}
                                width={1000}
                                height={1050}
                                alt={p.nume}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="containerHover">
                                <div className="continutHover">
                                    <div className="visitSite">
                                        <ExternalLink onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(p.url, "_blank");
                                        }} size={24} strokeWidth={2.75} />
                                    </div>
                                    <div
                                     onClick={() => setSelectedProject(p)} 
                                     className="detaliiProiect">
                                        <Expand size={24} strokeWidth={2.5} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        <div className="contentCard">
                            <motion.p className="numeProiect">
                                {p.nume}
                            </motion.p>
                            <p className="dataLanasare">{p.dataLansare}</p>
                            <div className="cardProdusBreakLine"></div>
                            <motion.p className="descriereProiect">{p.descriere}</motion.p>
                            
                            <div className="techStack">
                                {p.tehnologii.map((tech, index) => { 
                                    const Icon = tech.icon;
                                    return (
                                        <div key={index} className="techCard">
                                            <Icon size={20} color={tech.color} />
                                            <p>{tech.nume}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modalOverlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="modalContent"
                            onClick={(e) => e.stopPropagation()}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }} 
                        >
                            <motion.button
                                className="closeModalBtn"
                                onClick={() => setSelectedProject(null)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }} 
                            >
                                <X size={28} />
                            </motion.button>

                            <motion.div className="modalBody">
                                <motion.div
                                    className="modalImageContainer"
                                    layoutId={`image-wrapper-${selectedProject.nume}`}
                                >
                                    <Image
                                        src={selectedProject.imagine}
                                        alt={selectedProject.nume}
                                        width={1000}
                                        height={1050}
                                        className="modalImage"
                                        style={{ objectFit: "cover" }}
                                        sizes="100vw"
                                    />
                                </motion.div>

                                <div className="modalHeader">
                                    <motion.h2>
                                        {selectedProject.nume}
                                    </motion.h2>
                                    <motion.span 
                                        className="dataLanasare"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {selectedProject.dataLansare}
                                    </motion.span>
                                </div>
                                
                                <div className="modalBreakLine"></div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }} 
                                >
                                    <div className="sectionModal">
                                        <h3>Descriere Proiect</h3>
                                        <p className="modalDescriere">
                                            {selectedProject.documentatie || selectedProject.descriere}
                                        </p>
                                    </div>

                                    <div className="modalBreakLine"></div>

                                    {selectedProject.galerie && selectedProject.galerie.length > 0 && (
                                        <>
                                            <div className="scrollerImages">
                                                {selectedProject.galerie.map((imagine, index) => (
                                                    <div key={index} className="cardImageScroll">
                                                        <Image
                                                            src={imagine}
                                                            width={800}
                                                            height={800}
                                                            alt={`Imagine ${index}`}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="modalBreakLine"></div>
                                        </>
                                    )}

                                    <div className="sectionModal">
                                        <h3>Tehnologii Folosite</h3>
                                        <div style={{ margin: "12px 0 0 4px" }} className="techStack">
                                            {selectedProject.tehnologii.map((tech, index) => {
                                                const Icon = tech.icon;
                                                return (
                                                    <div key={index} className="techCard">
                                                        <Icon size={20} color={tech.color} />
                                                        <p>{tech.nume}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <button className="modalVisitBtn" onClick={() => window.open(selectedProject.url, '_blank')}>
                                        Acceseaza Website<ExternalLink size={18} style={{ marginLeft: '8px' }} />
                                    </button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}