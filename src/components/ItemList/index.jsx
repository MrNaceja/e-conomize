import './style.css'

export default function ItemList({typeClass, itemData}) {
    return (
        <li className={'itemList ' + typeClass}>
            <h1 className='itemListName'>Receita/Despesa aqui</h1>
            <h2 className='itemListValue'><span>R$</span>1.233,98</h2>
            <h6 className='itemListDate'>16/02/2023</h6>
        </li>
    )
}