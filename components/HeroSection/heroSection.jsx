import styles from './styles.module.css'; 
import ButtonContact from '../ButtonContact/ButtonContact';
import FloatingLinesClient from './FloatingLinesClient';

export default function HeroSection(){
    return(
        <div className={styles.heroSection}>
            {/*
           <div className={styles.aurora}>
                <FloatingLinesClient/>
            </div>
            */}
            {/*
             <div className={styles.aurora}>
                <video src={"/video.mov"} playsInline muted autoPlay loop>Browserul tau nu suporta video!</video>
            </div>
              */}

               <div className={styles.aurora}>
                <FloatingLinesClient/>
            </div>
               
            <div className={styles.contentHero}>
                <h1 className={styles.titleHero}>
                    Website-uri cu <span>impact</span> pe vânzări si <strong>Vizibilitate </strong>in Online
                </h1>
                <p className={styles.descriereHero}>
                    Site-uri de prezentare și aplicații web, dezvoltate de la zero, special pentru tine și afacerea ta.
                </p>
                <ButtonContact noRef={true} textBtn={"Vreau Website"}/>
            </div>
        </div>
    )
}