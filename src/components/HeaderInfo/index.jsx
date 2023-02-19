import styles from './style.module.css'

import { useContext } from 'react'
import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'

import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'

export default function HeaderInfo({typeInfo = EnumTypeInfo.TYPE_INFO_BALANCE, title}) {
    
    const {setSelectedInfo} = useContext(ContextSelectedInfo)
    
    let cssClassHeaderInfoByTypeInfo = styles.headerInfoBalance
    switch (typeInfo) {
        case EnumTypeInfo.TYPE_INFO_PERFORMANCE:
            cssClassHeaderInfoByTypeInfo = styles.headerInfoPerformance
            break
        case EnumTypeInfo.TYPE_INFO_EXPENSE:
            cssClassHeaderInfoByTypeInfo = styles.headerInfoExpense
            break
        default: cssClassHeaderInfoByTypeInfo = styles.headerInfoBalance
    }

    return (
        <div 
        className={styles.headerInfo + ` ${cssClassHeaderInfoByTypeInfo}`}
        onClick = {() => { setSelectedInfo(typeInfo) }}>
            <h1 className={styles.headerInfoTitle}>{title}</h1>
            <h2 className={styles.headerInfoValue}><span>R$</span>0,00</h2>
        </div>
    )
}