import FloatingLines from '../FloatingLines';
import './styles.css';
import ButtonContact from '../ButtonContact/ButtonContact';

export default function HeroSection(){
    return(
        <div className="heroSection">
            <div className="aurora">
              <FloatingLines 
                enabledWaves={["top","middle","bottom"]}
                linesGradient={["#FF8A00", "#ffb347"]}
                lineCount={4}
                lineDistance={5}
                bendRadius={5}
                bendStrength={-0.5}
                interactive={false}
                parallax={true}
            />
            </div>
            <div className="contentHero">
                <h1 className="titleHero">Website-uri cu <span>impact</span> pe vânzări si <strong>Vizibilitate </strong>in Online</h1>
                <p className="descriereHero">Site-uri de prezentare și aplicații web, dezvoltate de la zero, special pentru tine și afacerea ta.</p>
                <ButtonContact textBtn={"Vreau Website"}/>
            </div>
        </div>
    )
}