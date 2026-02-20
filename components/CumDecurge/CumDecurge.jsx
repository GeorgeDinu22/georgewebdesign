import CardParcurs from './CardParcurs';
import styles from './styles.module.css';

export default function CumDecurge(){

const pasi = [
    {
        id: 1,
        titlu: "Înțelegerea Proiectului",
        descriere: "Programăm o ședință online în care îmi povestești despre tine, afacerea ta, obiectivele și provocările tale. În câteva zile îți trimit documentația completă cu propunerea de structură, strategie și toate detaliile proiectului."
    },
    {
        id: 2,
        titlu: "Proiectare și Design",
        descriere: "Conturez structura site-ului, arhitectura și direcția sa vizuală. Pun accent pe experiența utilizatorului, claritate și o identitate vizuală care să reflecte personalitatea brandului tău."
    },
    {
        id: 3,
        titlu: "Dezvoltare și Optimizare",
        descriere: "Transform designul în realitate printr-o implementare curată și performantă. Optimizăm viteza, funcționalitățile și adaptabilitatea pe toate dispozitivele pentru o experiență impecabilă."
    },
    {
        id: 4,
        titlu: "Lansare",
        descriere: "Testez fiecare detaliu, verific funcționalitățile și public proiectul. Mă asigur că totul este configurat corect și pregătit pentru utilizatori."
    },
    {
        id: 5,
        titlu: "Rămânem Împreună pe Parcurs",
        descriere: "Colaborarea continuă și după lansare. Ofer suport, mentenanță și optimizări constante pentru ca proiectul tău să evolueze și să genereze rezultate pe termen lung."
    }
];

    return(
        <>
        <div className={styles.bodyCumDecurge}>
            <div className={styles.containerTitle}>
                <h2>Cum Decurge <span>Colaborarea?</span></h2>
                <p>
                    Îți prezint pas cu pas procesul meu de lucru, astfel încât să știi exact la ce să te aștepți. Transparența și comunicarea sunt esențiale pentru rezultate excelente.
                </p>
            </div>

            <div className={styles.contentParcurs}>
                <div className={styles.lineParcurs}></div>
                    {pasi.map((p) => (
                        <CardParcurs key={p.id} item={p}/>
                    ))}
            </div>
        </div>
        </>
    )
}