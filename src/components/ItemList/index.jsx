import styles from './style.module.css'

import { useContext } from 'react'

import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'
import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'
import EnumCoresMain from '../../Enum/EnumCoresMain.json'

export default function ItemList({itemData}) {

    const {selectedInfo} = useContext(ContextSelectedInfo)
    
    let colorInfo = EnumCoresMain['COLOR-SHADOW']
    if (selectedInfo == EnumTypeInfo.TYPE_INFO_PERFORMANCE) {
        colorInfo = EnumCoresMain['COLOR-PRIMARY']
    }
    if (selectedInfo == EnumTypeInfo.TYPE_INFO_EXPENSE) {
        colorInfo = EnumCoresMain['COLOR-SECONDARY']
    }

    return (
        <li className={styles.itemList}>
            <h1 className={styles.itemListName}>Receita/Despesa aqui</h1>
            <h2 
                style={{color: colorInfo}}
                className={styles.itemListValue}
            ><span>
                R$</span>1.233,98
            </h2>
            <h6 className={styles.itemListDate}>16/02/2023</h6>
        </li>
    )
}