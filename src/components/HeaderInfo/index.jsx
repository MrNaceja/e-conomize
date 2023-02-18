import styles from './style.module.css'

export default function HeaderInfo({typeInfo, title, onClickFn}) {
    /** Fiz assim mas tambem daria pra adotar o padrão de nomenclatura dos aruqivos de estilo
     * como nomeComponente.module.css assim daria para no pai q renderiz este componente realizar
     * o import do estilo deste componentes e passar como prop a classe necessária css conforme as definidas
     * no arquivo de estilo :) #aprendendoreact
     */
    const getComponentClassNameByTypeInfo = () => {
        console.log(typeInfo)
        switch (typeInfo) {
            case 'performance':
                return styles.headerInfoPerformance
            case 'expense':
                return styles.headerInfoExpense
            default: 
            return styles.headerInfoBalance
        } 
    }
    return (
        <div 
        className= {styles.headerInfo + ' '+ getComponentClassNameByTypeInfo()}
        onClick={onClickFn}>
            <h1 className={styles.headerInfoTitle}>{title}</h1>
            <h2 className={styles.headerInfoValue}><span>R$</span>0,00</h2>
        </div>
    )
}