import "./ThirdSection.scss"
import checkIcon from "../../assets/check-icon.svg"
import manImage from "../../assets/man-working.png"

export function ThirdSection() {
  return (
    <section className="sec sec-03">
      <div className="sec-03-content">
        <div className="title">
          <img alt="check" src={checkIcon} width={60}></img>
          <h3>Soluções para a administração<br></br><span>do seu condomínio</span></h3>
        </div>
        <div className="info">
          <p>Além de auxiliarmos o síndico, nossa equipe esta focada na busca de resultados
          para a vida condominial.</p>
          <p>Investimos em tecnologia para prestarmos serviços com qualidade.</p>
        </div>
        <div className="button">
          <a>Conheça nossos serviços</a>
        </div>
      </div>
      <img className="sec-02-img" alt="Man Working with Superlogica" src={manImage} height={500}></img>
    </section>
  )
}