import styles from './style.module.css'

import FieldsetInput from '../FieldsetInput'
import ItemList from '../ItemList';

import { useContext, useState } from 'react'

import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'

import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'

export default function ViewListInfo({selected, listInfo, setListInfo}) {

    const {selectedInfo} = useContext(ContextSelectedInfo)

    const [nameInfo , setNameInfo]  = useState('');
    const [valueInfo, setValueInfo] = useState('');

    let cssClassTypeInfo   = '';
    let nameSelectedInfo   = '';
    let newListInfo        = []

    switch(selectedInfo){
        case EnumTypeInfo.TYPE_INFO_EXPENSE:
            cssClassTypeInfo = styles.infoExpense;
            nameSelectedInfo = 'Despesa'
        break
        case EnumTypeInfo.TYPE_INFO_PERFORMANCE:
            cssClassTypeInfo = styles.infoPerformance;
            nameSelectedInfo = 'Receita'
        break
    }

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
        newListInfo = [...listInfo, {
            name: nameInfo,
            value: parseFloat(valueInfo),
            insertAt: new Date()
        }]
        setListInfo(newListInfo)
        setNameInfo('')
        setValueInfo('')
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
                        title={nameSelectedInfo}
                        inputType='text'
                        widthField='60%'
                        value={nameInfo}
                        onChange={onChangeNameInfo}
                        placeholder={'informe um nome para a ' + nameSelectedInfo.toLowerCase()}
                    />
                    <FieldsetInput 
                        title='Valor'
                        inputType='number'
                        widthField='40%'
                        value={valueInfo}
                        onChange={onChangeValueInfo}
                        placeholder={'R$'}
                    />
                </div>
                <button type='button' onClick={onClickAddInfo}>+</button>
            </div>
            <ul className={styles.list}>
               {
               listInfo.length == 0 
               ? <h1 className={styles.msgListEmpty}>Não há informações inseridas, adicione acima ;)</h1>
               : listInfo.map((item) => {
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