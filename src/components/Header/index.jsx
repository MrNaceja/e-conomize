import styles from './style.module.css'

import HeaderInfo from '../HeaderInfo'

import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'

export default function Header() {
    return (
        <header className={styles.header}>
            <HeaderInfo title="Saldo Atual" key = {EnumTypeInfo.TYPE_INFO_BALANCE}/>
            <nav>
                <HeaderInfo 
                key = {EnumTypeInfo.TYPE_INFO_PERFORMANCE}
                    typeInfo={EnumTypeInfo.TYPE_INFO_PERFORMANCE}
                    title="Receitas"
                 />
                <HeaderInfo 
                key = {EnumTypeInfo.TYPE_INFO_EXPENSE}
                    typeInfo={EnumTypeInfo.TYPE_INFO_EXPENSE}
                    title="Despesas"    
                />
            </nav>
        </header>
    )
}