import './style.css'

import ItemList from '../ItemList';

export default function List() {
    return (
        <ul className='list'>
            <ItemList/>
            <ItemList/>
            <ItemList/>
        </ul>
    )
}