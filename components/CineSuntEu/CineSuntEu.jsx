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
                    Diferența reală și rezultatele apar atunci când tehnologia este 
                    combinată cu gândire strategică, atenția la detalii și o abordare complet de la zero pentru viziunea ta.
                </p>
            </div>
        </div>  

    <div className={styles.rightPart}>
        <div className={`${styles.wrapperImageEu} animate`}>
            <Image
            src="/CineSuntEuV3.jpeg"
            width={700}
            height={700}
            alt=''
            />
        </div>
        </div>

        <HartaWrapper/>
    </div>
    )
}