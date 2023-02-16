import './style.css'

import HeaderInfo from '../HeaderInfo'

export default function Header() {
    return (
        <header className='header'>
            <HeaderInfo typeClass="balance" title="Saldo Atual"/>
            <nav>
                <HeaderInfo typeClass="performance" title="Receitas" onClickFn = {()=>alert('hey')}/>
                <HeaderInfo typeClass="expense" title="Despesas" onClickFn = {()=>alert('ola')} />
            </nav>
        </header>
    )
}