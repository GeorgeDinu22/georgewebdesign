import ButtonContact from '../ButtonContact/ButtonContact';
import { AtSign } from 'lucide-react';
import styles from './styles.module.css';

export default function BodyCta1(){
    return(
        <>
        <div className={styles.bodyCta1}>
            <div className={styles.containerTitle}>
                <h2>Încă mai crezi că poți vinde <br className={styles.breakTextDesktop}/> <strong>fără un site?</strong></h2>
            </div>
            <div className={styles.containerCta1}>
                <div className={styles.paragrafCta1}>
                    <p className={styles.highlighted}>Realitatea online-ului de azi</p>
                    <p>
                        În zilele noastre, totul se mișcă repede.
                        Conținutul este consumat în doar câteva secunde, scroll-ul a ajuns un obicei involuntar,
                        iar tu te aștepți ca cineva să-și rupă câteva minute din timp ca să
                        caute prin postări doar ca să găsească o informație neclară sau slab prezentată.
                    </p>
                </div>

                <div className={styles.paragrafCta1}>
                    <p className={styles.highlighted}>
                        De ce social media nu e <span>suficient</span>
                    </p>

                    <p>
                        Postările și reel-urile se pierd rapid. Rămâi doar o amintire în istoricul lor de vizualizări.
                        <br /><br />
                        Chiar dacă ai norocul să fie interesați de serviciile tale, singurul loc unde i-ai putea trimite este către "mesaj în privat".
                    </p>
                </div>


                <div className={styles.paragrafCta1}>
                    <p className={styles.highlighted}>
                        Despre site-urile făcute în <span>5 minute</span>
                    </p>

                    <p>
                        AI-ul nu-ți face nici treaba, nici site-ul de unul singur.
                        <br /><br />
                        Dacă crezi că un site făcut în 5 minute te va scoate în evidență, e bine să știi un lucru simplu:
                        în același timp, alți zeci de oameni își construiesc exact același site, cu același design,
                        aceleași texte și aceleași impresii care durează doar până când utilizatorul închide pagina.
                    </p>
                </div>

                <div className={styles.paragrafCta1}>
                    <p className={styles.highlighted}>Conteaza pentru <span>reputatia ta!</span></p>

                    <p>
                        Imaginează-ți că ești unul dintre potențialii tăi clienți și încerci să decizi dacă să oferi o șansă unui business.
                        Cauți informații, dar în afară de un cont de social media nu găsești nimic concret. Nu apare nicăieri, iar singura modalitate de contact este un mesaj pe Facebook sau Instagram.
                        <br /> <br />

                        <span></span>Ai avea încredere?

                        Acum gândește din nou, dar de data aceasta ai un website modern,  sectiune interactiva a serviciilor pe care le oferi, plata securixata integrata, formular de contact și adresă de email <AtSign size={20} strokeWidth={2.25} color='#FF8A00' className={styles.IconText}/>domeniul_tău.
                    </p>
                </div>

                <div className={styles.paragrafCta1}>
                    <p className={styles.highlighted}>
                        Lucrăm <span>împreună</span> ca să fie clar ce faci și de ce contează
                    </p>

                    <p className={styles.textWhy}>
                        Structurăm informația într-un website bine organizat și ușor de parcurs,
                        unde utilizatorul intră să te cunoască și în câteva minute, completează formularul,
                        se programează sau deja merge către <span>Finalizare Comandă.</span>
                    </p>
                </div>

                <ButtonContact textBtn={"Solicită Ofertă"}/>
            </div>
        </div>
        </>
    )
}