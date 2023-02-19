import styles from './style.module.css'

import ItemList from '../ItemList';

import { useContext } from 'react';

import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'

export default function List() {

    const {selectedInfo} = useContext(ContextSelectedInfo)
    
    return (
        <ul className={selectedInfo === 'expense' ? styles.listTest : styles.list}>
            <ItemList />
            <ItemList />
            <ItemList />
        </ul>
    )
}