import './styles.css';

export default function CardParcurs({item}){
    return(
            <div className="cardParcurs">
                    <div className="number">
                        {item.id}
                    </div>
                    <div className="titleCardParcurs">
                        {item.titlu}
                    </div>
                    <p>{item.descriere}</p>
            </div>
    )
}