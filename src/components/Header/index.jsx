import styles from './style.module.css'

import HeaderInfo from '../HeaderInfo'

export default function Header() {
    return (
        <header className={styles.header}>
            <HeaderInfo typeClass="balance" title="Saldo Atual"/>
            <nav>
                <HeaderInfo typeClass="performance" title="Receitas" onClickFn = {()=>alert('hey')}/>
                <HeaderInfo typeClass="expense" title="Despesas" onClickFn = {()=>alert('ola')} />
            </nav>
        </header>
    )
}