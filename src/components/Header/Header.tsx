import sty from "./Header.module.scss"

export function Header() {
  return (
    <header>
      <div>
        <img className={sty.logoImage1} src="/logo-transparent-v1.png" width={228}></img>
        <img className={sty.logoImage2} src="/logo-transparent-v2.png" width={228}></img>
      </div>
      <nav className={sty.headerNavigator}>
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Serviços</span>
          </li>
          <li>
            <span>Contato</span>
          </li>
          <li>
            <span>Intranet</span>
          </li>
          <li className={sty.areaDoCondomino}>
            <span>Área do Condômino</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}