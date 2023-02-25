import styles from './style.module.css'

import { useContext } from 'react'
import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'

import HeaderInfo from '../HeaderInfo'

import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'

export default function Header() {

    const {
        selectedInfo,
        listInfoPerformance,
        listInfoExpense
    } = useContext(ContextSelectedInfo)

    function getValueHeaderInfoPerformance() {
        return listInfoPerformance.map(item => {
            return item.value;
        }).reduce((prevSum, currentValueToSum) => { return prevSum + currentValueToSum}, 0)
    }
    function getValueHeaderInfoExpense() {
        return listInfoExpense.map(item => {
            return item.value;
        }).reduce((prevSum, currentValueToSum) => { return prevSum + currentValueToSum}, 0)
    }
    function getValueHeaderInfoBalance() {
        return getValueHeaderInfoPerformance() - getValueHeaderInfoExpense()
    }

    return (
        <header className={styles.header}>
            <HeaderInfo 
                title="Saldo Atual" 
                hasClickAction = {false}
                value = {getValueHeaderInfoBalance()}
            />
            <nav>
                <HeaderInfo 
                    typeInfo={EnumTypeInfo.TYPE_INFO_PERFORMANCE}
                    title="Receitas"
                    selected = {selectedInfo == EnumTypeInfo.TYPE_INFO_PERFORMANCE}
                    value = {getValueHeaderInfoPerformance()}
                 />
                <HeaderInfo 
                    typeInfo={EnumTypeInfo.TYPE_INFO_EXPENSE}
                    title="Despesas" 
                    selected = {selectedInfo == EnumTypeInfo.TYPE_INFO_EXPENSE}
                    value = {getValueHeaderInfoExpense()}
                />
            </nav>
        </header>
    )
}