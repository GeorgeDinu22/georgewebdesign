import './styles.css';
import CardRecenzie from './CardRecenzie';

export default function Recenzii(){

    const recenzii = [{
        nume:"Costi Pasa",
        src:"/costipasaRecenzie.mp4",
        proiecte:[
            "mombubyinfinity.ro",
            "infinitylounge.ro"
        ],
    },
    {
        nume:"Costi Grigore",
        src:"/joyDetailingRecenzie.mp4",
        proiecte:[
            "joydetailing.ro",
        ],
    }
    ]

    return(
        <>
        <div className="bodyRecenzii">
            <div className="containerTitle">
               <h2>Părerea Clienților <strong>Contează</strong></h2>
                <p>
                Am lucrat cu oameni din diferite domenii, fiecare cu provocări diferite,
                nevoi complexe și un scop clar, creșterea vizibilității lor în <span>online</span>
                </p>

            </div>
            <div className="containerRecenzii">
                {recenzii.map((recenzie, index) => (
                    <CardRecenzie 
                        key={index} 
                        recenzie={recenzie}
                    />
                ))}
            </div>
        </div>
        </>
    )
}