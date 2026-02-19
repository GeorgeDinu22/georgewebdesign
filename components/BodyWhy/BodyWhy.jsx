
import './styles.css';
import CardWhy from './CardWhy';

export default function BodyWhy(){
    
    const avantaje = [
  {
    titlu: "Cod scris de la zero",
    descriere: "Proiectul tău este gândit și creat de la zero, adaptat nevoilor tale și brandului tău.",
    icon: "Code"
  },
  {
    titlu: "Încredere garantată",
    descriere: "Un domeniu propriu și un design bine realizat transmit seriozitate, încredere și te diferențiază de competiție.",
    icon: "Handshake"
  },
  {
    titlu: "Design strategic",
    descriere: "Fiecare element vizual are un rol clar: să atragă atenția, să transmită mesajul corect și să vândă.",
    icon: "Palette"
  },
  {
    titlu: "Performanță ridicată",
    descriere: "Site rapid, optimizat pentru mobil și construit pentru o experiență fluidă, fără timpi de încărcare lungi și clienți pierduți.",
    icon: "Zap"
  },
  {
    titlu: "Panou de administrare",
    descriere: "Un panou bine structurat îți permite să setezi produse, prețuri, anunțuri importante și să gestionezi programări și comenzi.",
    icon: "LayoutDashboard"
  }
];


    return(
        <>
        <div className='bodyWhy'>
            <div className="containerTitle">
                <h2><span>De Ce</span> să lucrăm împreună?</h2>
            </div> 
            <div className="containerWhy">
                {avantaje.map((avantaj,index) => (
                    <CardWhy key={index} index={index} item={avantaj}/>
                ))}
            </div>
        </div>
        </>
    )
}