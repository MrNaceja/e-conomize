import styles   from './style.module.css'
import Logo     from '../../components/Logo'
import Header   from '../../components/Header'
import ViewList from '../../components/ViewList'

import InfoContext from '../../Contexts'

export default function App() {
  return (
    <InfoContext.Provider>
      <div className={styles.appContainer}>
        <Logo/>
        <Header/>
        <ViewList/>
      </div>
    </InfoContext.Provider>
  )
}
