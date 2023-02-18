import styles from './style.module.css'

import ItemList from '../ItemList';

export default function List() {
    return (
        <ul className={styles.list}>
            <ItemList/>
            <ItemList/>
            <ItemList/>
        </ul>
    )
}