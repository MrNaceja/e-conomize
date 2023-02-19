import styles   from './style.module.css'
import Logo     from '../../components/Logo'
import Header   from '../../components/Header'
import ViewList from '../../components/ViewList'

import { useState } from 'react'

import ContextSelectedInfo from '../../Contexts/ContextSelectedInfo'

import EnumTypeInfo from '../../Enum/EnumTypeInfo.json'

export default function App() {

  const [selectedInfo, setSelectedInfo] = useState(EnumTypeInfo.TYPE_INFO_PERFORMANCE)

  return (
    <ContextSelectedInfo.Provider 
      value={{
        selectedInfo,
        setSelectedInfo
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
