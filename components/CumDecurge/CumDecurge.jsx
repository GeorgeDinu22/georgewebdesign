import CardParcurs from './CardParcurs';
import './styles.css';

export default function CumDecurge(){
const pasi = [
    {
        id: 1,
        titlu: "Înțelegerea Proiectului",
        descriere: "Programăm o ședință online în care îmi povestești despre tine, afacerea ta, obiectivele și provocările tale. În câteva zile îți trimit documentația completă cu propunerea de structură, strategie și toate detaliile proiectului."
    },
    {
        id: 2,
        titlu: "Strategie și Planificare",
        descriere: "După aprobarea propunerii, stabilim pașii concreți de implementare. Definim structura, funcționalitățile, direcția de design și calendarul de livrare."
    },
    {
        id: 3,
        titlu: "Dezvoltare și Implementare",
        descriere: "Încep procesul de lucru și îți ofer actualizări constante privind progresul proiectului. Ajustăm detaliile necesare pentru a ajunge la cea mai bună variantă."
    },
    {
        id: 4,
        titlu: "Lansare și Optimizare",
        descriere: "Testăm totul în detaliu, lansăm proiectul și ofer suport pentru eventuale ajustări, astfel încât totul să funcționeze perfect."
    }
];

    return(
        <>
        <div className="bodyCumDecurge">
            <div className="containerTitle">
                <h2>Cum Decurge <span>Colaborarea?</span></h2>
                <p>
                    Îți prezint pas cu pas procesul meu de lucru, astfel încât să știi exact la ce să te aștepți. Transparența și comunicarea sunt esențiale pentru rezultate excelente.
                </p>
            </div>

            <div className="contentParcurs">
                <div className="lineParcurs"></div>
                    {pasi.map((p) => (
                        <CardParcurs key={p.id} item={p}/>
                    ))}
            </div>
        </div>
        </>
    )
}