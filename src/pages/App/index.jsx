import styles   from './style.module.css'
import Logo     from '../../components/Logo'
import Header   from '../../components/Header'
import ViewList from '../../components/ViewList'

import { useState, useEffect} from 'react'

import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'

import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'

export default function App() {

  let lastValuePerformanceSave = localStorage.getItem(EnumTypeInfo.TYPE_INFO_PERFORMANCE)          | 0
  let lastValueExpenseSave     = localStorage.getItem(EnumTypeInfo.TYPE_INFO_EXPENSE)              | 0
  let lastListExpenseSave      = localStorage.getItem('list_' + EnumTypeInfo.TYPE_INFO_EXPENSE)    | []
  let lastListPerformanceSave  = localStorage.getItem('list_' + EnumTypeInfo.TYPE_INFO_PERFORMANCE)| []
  let lastValueBalanceSave     = localStorage.getItem(EnumTypeInfo.TYPE_INFO_BALANCE)              | 0

  // localStorage.setItem(EnumTypeInfo.TYPE_INFO_BALANCE, lastValuePerformanceSave - lastValueExpenseSave)

  // Criar estados globais para lista das informações OLHAR AQUI

  const [selectedInfo    , setSelectedInfo    ] = useState(EnumTypeInfo.TYPE_INFO_PERFORMANCE)
  const [valuePerformance, setValuePerformance] = useState(lastValuePerformanceSave)
  const [valueExpense    , setValueExpense    ] = useState(lastValueExpenseSave)

  useEffect(() => {
  


  })
  

  return (
    <ContextSelectedInfo.Provider 
      value={{
        selectedInfo,
        setSelectedInfo,
        valuePerformance,
        setValuePerformance,
        valueExpense,
        setValueExpense
      }}
    >
      <div className={styles.appContainer}>
        <Logo/>
        <Header/>
        <ViewList/>
      </div>
    </ContextSelectedInfo.Provider>
  )
}
