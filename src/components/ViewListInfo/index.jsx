import styles from './style.module.css'

import FieldsetInput from '../FieldsetInput'
import ItemList from '../ItemList';

import { useContext, useState } from 'react'

import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'

import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'

export default function ViewListInfo({selected}) {

    const {selectedInfo} = useContext(ContextSelectedInfo)

    const [info, setInfo] = useState([])

    const [nameInfo, setNameInfo]   = useState('');
    const [valueInfo, setValueInfo] = useState('');

    function onChangeNameInfo(newName) {
        setNameInfo(newName)
    }
    function onChangeValueInfo(newValue) {
        setValueInfo(newValue)
    }

    function onClickAddInfo() {
        if (nameInfo === '' || valueInfo === '') {
           return alert('Preencha os campos para adicionar uma informação!')
        }
        setInfo([...info, {
            name: nameInfo,
            value: valueInfo,
            insertAt: new Date()
        }])
        setNameInfo('')
        setValueInfo('')
    }

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
                        value={nameInfo}
                        onChange={onChangeNameInfo}
                    />
                    <FieldsetInput 
                        title='valor'
                        inputType='number'
                        widthField='40%'
                        value={valueInfo}
                        onChange={onChangeValueInfo}
                    />
                </div>
                <button type='button' onClick={onClickAddInfo}>+</button>
            </div>
            <ul className={styles.list}>
               {
               info.length == 0 
               ? <h1 className={styles.msgListEmpty}>Não há informações inseridas, adicione acima ;)</h1>
               : info.map((item) => {
                return <ItemList 
                    key={item.insertAt.toLocaleString()}
                    name = { item.name }
                    value = { item.value }
                    insertAt = { item.insertAt }
                />
               })}
            </ul>
        </section>
    )
}