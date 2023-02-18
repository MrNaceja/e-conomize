import styles   from './style.module.css'
import Logo     from '../../components/Logo'
import Header   from '../../components/Header'
import ViewList from '../../components/ViewList'

export default function App() {
  return (
      <div className={styles.appContainer}>
        <Logo/>
        <Header/>
        <ViewList/>
      </div>
  )
}
