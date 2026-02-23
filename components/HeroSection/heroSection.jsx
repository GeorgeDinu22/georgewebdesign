import styles from './styles.module.css'; 
import ButtonContact from '../ButtonContact/ButtonContact';
import Image from 'next/image';

export default function HeroSection(){
    return(
        <div className={styles.heroSection}>

            <div className={styles.aurora}>
                <Image
                    src="/heroVideoV2.jpg" 
                    alt="Background Hero"
                    width={1000}
                    height={1000}
                    priority 
                    quality={100}
                />
                <video src={"/heroVideo.mp4"} preload="metadata" playsInline muted autoPlay loop>Browserul tau nu suporta video!</video>
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