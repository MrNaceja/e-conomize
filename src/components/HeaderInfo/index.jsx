import styles from './style.module.css'

import { useContext } from 'react'
import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'

import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'

export default function HeaderInfo({typeInfo = EnumTypeInfo.TYPE_INFO_BALANCE, title, hasClickAction = true, selected = false}) {
    const {setSelectedInfo, valuePerformance, valueExpense} = useContext(ContextSelectedInfo)
    let cssClassHeaderInfoByTypeInfo = styles.headerInfoBalance
    let valueInfo = valuePerformance - valueExpense;
    switch (typeInfo) {
        case EnumTypeInfo.TYPE_INFO_PERFORMANCE:
            cssClassHeaderInfoByTypeInfo = styles.headerInfoPerformance
            valueInfo = valuePerformance
            break
        case EnumTypeInfo.TYPE_INFO_EXPENSE:
            cssClassHeaderInfoByTypeInfo = styles.headerInfoExpense
            valueInfo = valueExpense
    }
    
    let valueInfoFormattted = parseFloat(valueInfo.toFixed(2)).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})

    function onClickSelectInfo() {
        if (hasClickAction) {
            setSelectedInfo(typeInfo)
        }
    }

    return (
        <div 
        role={selected ? 'infoSelected' : 'infoNotSelected'}
        className={styles.headerInfo + ` ${cssClassHeaderInfoByTypeInfo}`}
        onClick = {onClickSelectInfo}>
            <h1 className={styles.headerInfoTitle}>{title}</h1>
            <h2 className={styles.headerInfoValue}>{valueInfoFormattted}</h2>
        </div>
    )
}