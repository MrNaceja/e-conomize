import styles from './style.module.css'

import FieldsetInput from '../FieldsetInput'
import ItemList from '../ItemList';

import { useContext, useState } from 'react'

import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'

import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'

export default function ViewListInfo({selected}) {

    const {
        selectedInfo, 
        setValuePerformance, 
        setValueExpense,
        valueExpense,
        valuePerformance
    } = useContext(ContextSelectedInfo)

    const [info, setInfo] = useState([])

    const [nameInfo, setNameInfo]   = useState('');
    const [valueInfo, setValueInfo] = useState('');

    let cssClassTypeInfo   = '';
    let nameSelectedInfo   = '';
    let newListInfo        = []
    let newValueHeaderInfoSelected = 0;

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
        newListInfo = [...info, {
            name: nameInfo,
            value: valueInfo,
            insertAt: new Date()
        }]
        setInfo(newListInfo)
        setNameInfo('')
        setValueInfo('')
        updateHeaderInfo()
        saveDataOnLocalStorage()
    }

    function updateHeaderInfo() {
        newListInfo.forEach(item => {
            newValueHeaderInfoSelected  += parseFloat(item.value)
        })
        switch(selectedInfo){
            case EnumTypeInfo.TYPE_INFO_EXPENSE:
                return setValueExpense(newValueHeaderInfoSelected)
            case EnumTypeInfo.TYPE_INFO_PERFORMANCE:
                return setValuePerformance(newValueHeaderInfoSelected)
        }
    }

    function saveDataOnLocalStorage() {
        localStorage.setItem(selectedInfo, newValueHeaderInfoSelected)
        localStorage.setItem('list_' + selectedInfo, JSON.stringify(newListInfo))
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