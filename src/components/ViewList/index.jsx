import styles from './style.module.css'

import ViewListInfo from '../ViewListInfo'

import { useContext } from 'react'

import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'
import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'

export default function ViewList() {

    const {
        selectedInfo, 
        listInfoPerformance,
        setListInfoPerformance,
        listInfoExpense,
        setListInfoExpense
    } = useContext(ContextSelectedInfo)

    return (
        <section className={styles.viewList}>
            <ViewListInfo 
                listInfo = {listInfoPerformance}
                setListInfo = {setListInfoPerformance}
                selected = {selectedInfo == EnumTypeInfo.TYPE_INFO_PERFORMANCE}
            />
            <ViewListInfo 
                listInfo = {listInfoExpense}
                setListInfo = {setListInfoExpense}
                selected = {selectedInfo == EnumTypeInfo.TYPE_INFO_EXPENSE}
            />
        </section>
    )
}