import styles from './styles.module.css'; 
import ButtonContact from '../ButtonContact/ButtonContact';
import CodeWindow from './CodeWindow';
import Image from 'next/image';

export default function HeroSection(){
    return(
        <div className={styles.heroSection}>
            <Image
            className={styles.heroImage}
            width={2600}
            height={2400}
            src="/HeroBackground.webp"
            alt='Hero Section Background'
            priority
            />

            <div className={styles.contentHero}>
                <h1 className={styles.titleHero}>
                    Website-uri cu <span>impact</span> pe vânzări și<strong> Vizibilitate</strong> în Online
                </h1>
                <p className={styles.descriereHero}>
                    Site-uri de prezentare și aplicații web, dezvoltate de la zero, cu accentul pe tine și pe afacerea ta.
                </p>
                <ButtonContact noRef={true} textBtn={"Vreau Website"}/>
            </div>

            <CodeWindow/>
        </div>
    );
}