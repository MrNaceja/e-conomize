import './style.css'

import Logo     from '../../components/Logo'
import Header   from '../../components/Header'
import ViewList from '../../components/ViewList'

export default function App() {
  return (
    <div className="appContainer">
      <Logo/>
      <Header/>
      <ViewList/>
    </div>
  )
}
