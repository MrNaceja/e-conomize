import styles from './style.module.css'

import HeaderInfo from '../HeaderInfo'

export default function Header() {
    return (
        <header className={styles.header}>
            <HeaderInfo 
                typeInfo="balance" 
                title="Saldo Atual"
            />
            <nav>
                <HeaderInfo 
                    typeInfo="performance" 
                    title="Receitas"
                    onClickFn = {()=>alert('hey')}
                 />
                <HeaderInfo 
                    typeInfo="expense" 
                    title="Despesas"    
                    onClickFn = {()=>alert('ola')}
                />
            </nav>
        </header>
    )
}