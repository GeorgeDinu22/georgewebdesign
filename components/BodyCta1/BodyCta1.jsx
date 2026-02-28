"use client";
import ButtonContact from '../ButtonContact/ButtonContact';
import { AtSign } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';

export default function BodyCta1() {
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
    useEffect(() => {
        const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // Aplicăm delay pentru efectul de cascadă (stagger)
                        entry.target.style.transitionDelay = `${index * 150}ms`;
                        entry.target.classList.add(styles.show);
                    }
                });
            },
            { threshold: 0.2 } // Redus pragul pentru o declanșare mai fluidă pe mobil
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.bodyCta1}>
            <div ref={ref} className={`${styles.containerTitle} ${isVisible ? styles.show : ""}`}>
                <h2>Încă mai crezi că poți vinde  <strong>fără un site?</strong></h2>
            </div>

            <div className={styles.containerCta1}>
                <div className={`${styles.paragrafCta1} ${styles.animateOnScroll}`}>
                    <p className={styles.highlighted}>Realitatea online-ului de azi</p>
                    <p className={styles.descriereCta}>
                        În zilele noastre, totul se mișcă repede.
                        Conținutul este consumat în doar câteva secunde, scroll-ul a ajuns un obicei involuntar,
                        iar tu te aștepți ca cineva să-și rupă câteva minute din timp ca să
                        caute prin postări doar ca să găsească o informație neclară sau slab prezentată.
                    </p>
                </div>

                <div className={`${styles.paragrafCta1} ${styles.animateOnScroll}`}>
                    <p className={styles.highlighted}>
                        De ce social media nu e <span>suficient</span>
                    </p>
                    <p className={styles.descriereCta}>
                        Postările și reel-urile se pierd rapid. Rămâi doar o amintire în istoricul lor de vizualizări.
                        <br /><br />
                        Chiar dacă ai norocul să fie interesați de serviciile tale, singurul loc unde i-ai putea trimite este către "mesaj în privat".
                        <br /><br />
                        Un profil social nu îți aparține cu adevărat. Nu controlezi platforma, regulile sau vizibilitatea.
                        Un website, în schimb, este <span className={styles.colorText}>spațiul tău</span>, unde mesajul, oferta și imaginea sunt exact așa cum vrei tu să fie.
                    </p>
                </div>

                <div className={`${styles.paragrafCta1} ${styles.animateOnScroll}`}>
                    <p className={styles.highlighted}>
                        Despre site-urile făcute în <span>5 minute</span>
                    </p>
                    <p className={`${styles.descriereCta} ${styles.textWhy2}`}>
                        AI-ul nu-ți face nici treaba, nici site-ul de unul singur.
                        <br /><br />
                        Dacă crezi că un site făcut în 5 minute te va scoate în evidență, e bine să știi un lucru simplu:
                        în același timp, alți zeci de oameni își construiesc <span>exact același site,</span> cu același design,
                        aceleași texte și aceleași impresii care durează doar până când utilizatorul închide pagina.
                    </p>
                </div>

                <div className={`${styles.paragrafCta1} ${styles.animateOnScroll}`}>
                    <p className={styles.highlighted}>Conteaza pentru <span>reputatia ta!</span></p>
                    <p className={styles.descriereCta}>
                        Imaginează-ți că ești unul dintre potențialii tăi clienți și încerci să decizi dacă să oferi o șansă unui business.
                        Cauți informații, dar în afară de un cont de social media nu găsești nimic concret. Nu apare nicăieri, iar singura modalitate de contact este un mesaj pe Facebook sau Instagram.
                        <br /><br />
                        <span className={styles.focus}>Ai avea încredere? </span>
                        Acum gândește din nou, dar de data aceasta ai un website modern, secțiune interactivă a serviciilor pe care le oferi, plată securizată integrată, formular de contact și adresă de email <AtSign size={20} strokeWidth={2.25} color='#FF8A00' className={styles.IconText} />domeniul_tău.
                    </p>
                </div>

                <div className={`${styles.paragrafCta1} ${styles.animateOnScroll}`}>
                    <p className={styles.highlighted}>
                        Lucrăm <span>împreună</span> ca să fie clar ce faci și de ce contează
                    </p>
                    <p className={`${styles.descriereCta} ${styles.textWhy}`}>
                        Structurăm informația într-un website bine organizat și ușor de parcurs,
                        unde utilizatorul intră să te cunoască și în câteva minute, completează formularul,
                        se programează sau deja merge către <span>Finalizare Comandă.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}