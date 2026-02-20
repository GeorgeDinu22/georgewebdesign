import styles from './styles.module.css';

export default function CardParcurs({item}){
    return(
            <div className={styles.cardParcurs}>
                    <div className={styles.number}>
                        {item.id}
                    </div>
                    <div className={styles.titleCardParcurs}>
                        {item.titlu}
                    </div>
                    <p>{item.descriere}</p>
            </div>
    )
}