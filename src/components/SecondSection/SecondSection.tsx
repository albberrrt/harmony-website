import "./SecondSection.scss"
import assetUrl from "../../assets/woman-at-phone.png"

export function SecondSection() {
  return (
    <section className="sec sec-02">
      <div className="title">
        <h3>Toda tranquilidade do seu condomínio <br></br>na <span>palma da sua mão.</span></h3>
      </div>
      <div className="sec-02-container">
          <img alt="Woman at blue phone" src={assetUrl} width={450}></img>
        <div className="content">
          <p>Prestamos serviços com auxílio da tecnologia de informação, com aplicativo exclusivo para o morador.</p>
          <ul>
            <li>Prestação de contas</li>
            <li>Comunicados</li>
            <li>Segunda via de cota condominial</li>
            <li>Assembleias gerais virtuais</li>
            <li>Documentos Digitalizados</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
