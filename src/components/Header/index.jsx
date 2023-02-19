import styles from './style.module.css'

import { useContext } from 'react'
import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'

import HeaderInfo from '../HeaderInfo'

import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'

export default function Header() {

    const {selectedInfo} = useContext(ContextSelectedInfo)

    return (
        <header className={styles.header}>
            <HeaderInfo title="Saldo Atual" hasClickAction = {false}/>
            <nav>
                <HeaderInfo 
                    typeInfo={EnumTypeInfo.TYPE_INFO_PERFORMANCE}
                    title="Receitas"
                    selected = {selectedInfo == EnumTypeInfo.TYPE_INFO_PERFORMANCE}
                 />
                <HeaderInfo 
                    typeInfo={EnumTypeInfo.TYPE_INFO_EXPENSE}
                    title="Despesas" 
                    selected = {selectedInfo == EnumTypeInfo.TYPE_INFO_EXPENSE}
                />
            </nav>
        </header>
    )
}