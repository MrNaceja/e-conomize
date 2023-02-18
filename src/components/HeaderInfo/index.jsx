import styles from './style.module.css'

export default function HeaderInfo({typeClass, title, onClickFn}) {
    return (
        <div className={styles.headerInfo} onClick={onClickFn}>
            <h1 className={styles.headerInfoTitle}>{title}</h1>
            <h2 className={styles.heaferInfoValue}><span>R$</span>0,00</h2>
        </div>
    )
}