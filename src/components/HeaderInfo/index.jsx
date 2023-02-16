import './style.css'

export default function HeaderInfo({typeClass, title, onClickFn}) {
    return (
        <div className={"headerInfo " + typeClass} onClick={onClickFn}>
            <h1 className='headerInfoTitle'>{title}</h1>
            <h2 className='headerInfoValue'><span>R$</span>0,00</h2>
        </div>
    )
}