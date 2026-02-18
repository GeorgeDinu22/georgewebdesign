import FloatingLines from '../FloatingLines';
import './styles.css';
import ButtonContact from '../ButtonContact/ButtonContact';
import FloatingLinesClient from './FloatingLinesClient';

export default function HeroSection(){
    return(
        <div className="heroSection">
            <div className="aurora">
                <FloatingLinesClient/>
            </div>
            <div className="contentHero">
                <h1 className="titleHero">Website-uri cu <span>impact</span> pe vânzări si <strong>Vizibilitate </strong>in Online</h1>
                <p className="descriereHero">Site-uri de prezentare și aplicații web, dezvoltate de la zero, special pentru tine și afacerea ta.</p>
                <ButtonContact textBtn={"Vreau Website"}/>
            </div>
        </div>
    )
}