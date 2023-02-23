import styles from './style.module.css'

import { useContext } from 'react'

import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'
import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'
import EnumCoresMain from '../../Enum/EnumCoresMain.json'

export default function ItemList({name, value, insertAt}) {

    const {selectedInfo} = useContext(ContextSelectedInfo)
    
    let colorInfo = EnumCoresMain['COLOR-SHADOW']
    if (selectedInfo == EnumTypeInfo.TYPE_INFO_PERFORMANCE) {
        colorInfo = EnumCoresMain['COLOR-PRIMARY']
    }
    if (selectedInfo == EnumTypeInfo.TYPE_INFO_EXPENSE) {
        colorInfo = EnumCoresMain['COLOR-SECONDARY']
    }

    const dateFormatted = insertAt.toLocaleString('pt-BR', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    })

    return (
        <li className={styles.itemList}>
            <h1 className={styles.itemListName}>{name}</h1>
            <h2 
                style={{color: colorInfo}}
                className={styles.itemListValue}
            ><span>
                R$</span>{parseFloat(value).toFixed(2)}
            </h2>
            <h6 className={styles.itemListDate}>{dateFormatted}</h6>
        </li>
    )
}