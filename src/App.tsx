import sty from './App.module.scss'
import { Header } from './components/Header/Header'

function App() {

  return (
    <>
      <div className={sty.backgroundImage}></div>
      <Header />
    </>
  )
}

export default App
