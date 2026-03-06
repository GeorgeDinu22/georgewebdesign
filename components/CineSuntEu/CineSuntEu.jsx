import Image from 'next/image';
import styles from './styles.module.css';
import HartaWrapper from "./HartaWrapper";


export default function CineSuntEu(){

    return(
        <div id='despreMine' className={styles.bodyEu}>

        <div className={styles.leftPart}>
            <div className={`${styles.containerTitle}  animate`}>
                <h2>Despre mine</h2>
            </div>

            <div className={styles.containerEU}>

                <p className="animate">
                    Numele meu este <strong>Dinu George</strong> și mă ocup cu realizarea 
                    platformelor digitale și a site-urilor de prezentare moderne.
                </p>

                <p className="animate">
                    Scopul meu este ca fiecare client cu care lucrez să aibă o 
                    imagine curată în online, o prezență solidă și 
                    bine conturată, cu un aspect modern și orientat spre rezultate.
                </p>

               <p className="animate">
                    Când vine vorba de AI sau template-uri deja făcute, cred că nu poți avea 
                    performanțe excelente atunci când singura ta prezenta în online este identică 
                    cu a altor zeci de afaceri.
                </p>

                <p className="animate">
                    Diferența reală apare atunci când un site este construit de la zero 
                    pentru afacerea și nevoile tale, nu copiat dintr-un template sau 
                    generat rapid cu AI dintr-un prompt de câteva rânduri.
                </p>
            </div>
        </div>  

    <div className={styles.rightPart}>
        <div className={`${styles.wrapperImageEu} animate`}>
            <Image
            src="/CineSuntEuV3.webp"
            width={700}
            height={700}
            alt='Profile Image'
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 600px"
            />
        </div>
        </div>

        <HartaWrapper/>
    </div>
    )
}