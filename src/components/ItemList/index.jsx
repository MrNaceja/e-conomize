import styles from './style.module.css'

export default function ItemList({itemData}) {
    return (
        <li className={styles.itemList}>
            <h1 className={styles.itemListName}>Receita/Despesa aqui</h1>
            <h2 className={styles.itemListValue}><span>R$</span>1.233,98</h2>
            <h6 className={styles.itemListDate}>16/02/2023</h6>
        </li>
    )
}