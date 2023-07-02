import './App.scss'
import { Header } from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <section className="sec sec-01">
          <div className='title'>
            <h1>Bem vindo à <br></br><span>Harmony Condomínios</span></h1>
            <div></div>
            <h2>"Levamos Harmonia para o seu condomínio"</h2>
          </div>
        <div className="background-img"></div>
      </section>
      <section className="sec sec-02">
        <div>
          {/* <h3>Toda tranquilidade do seu condomínio <br></br><span>nas palmas da sua mão.</span></h3> */}
        </div>
      </section>
    </>
  )
}

export default App
