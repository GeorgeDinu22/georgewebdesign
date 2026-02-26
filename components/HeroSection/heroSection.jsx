import styles from './styles.module.css'; 
import ButtonContact from '../ButtonContact/ButtonContact';
import InteractiveCodeWindow from './CodeTab';

export default function HeroSection(){
    return(
        <div className={styles.heroSection}>
            <div className={styles.gradientContainer} />
            <div className={styles.glowOverlay} />



            <div className={styles.contentHero}>
                <h1 className={styles.titleHero}>
                    Website-uri cu <span>impact</span> pe vânzări și<strong> Vizibilitate</strong> în Online
                </h1>
                <p className={styles.descriereHero}>
                    Site-uri de prezentare și aplicații web, dezvoltate de la zero, special pentru tine și afacerea ta.
                </p>
                <ButtonContact noRef={true} textBtn={"Vreau Website"}/>
            </div>

            <InteractiveCodeWindow/>
        </div>
    );
}