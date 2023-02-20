import styles from './style.module.css'

import List          from '../List'
import FieldsetInput from '../FieldsetInput'

import { useContext } from 'react'

import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'

import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'

export default function ViewListInfo({selected}) {

    const {selectedInfo} = useContext(ContextSelectedInfo)

    let cssClassTypeInfo = '';
    switch(selectedInfo){
        case EnumTypeInfo.TYPE_INFO_EXPENSE:
            cssClassTypeInfo = styles.infoExpense;
        break
        case EnumTypeInfo.TYPE_INFO_PERFORMANCE:
            cssClassTypeInfo = styles.infoPerformance;
        break
    }

    if (selected) {
        cssClassTypeInfo += ` ${styles.infoSelected}`
    }

    return (
        <section 
            className={styles.viewListInfoContainer + ` ${cssClassTypeInfo}`}
        >
            <div className={styles.inputArea}>
            <div className={styles.inputData}>
                <FieldsetInput 
                    title='nome'
                    inputType='text'
                    widthField='60%'
                />
                <FieldsetInput 
                    title='valor'
                    inputType='number'
                    widthField='40%'
                />
            </div>
            <button type='button'>+</button>
            </div>
            <List/>
        </section>
    )
}