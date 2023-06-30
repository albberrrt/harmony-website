import { useEffect, useState, FC } from "react"
import "./Header.scss"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="header-content">
          <Logo isScrolled={isScrolled} />
          <nav className="header-nav">
            <ul>
              <li className="nav-active-page">Home</li>
              <li>Serviços</li>
              <li>Contato</li>
              <li>Intranet</li>
              <li className="nav-button">
                <a>Área do Condômino</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`header-background ${isScrolled ? 'show-background' : ''}`}></div>
      </header>
    </>
  )
}

type LogoProps = { isScrolled: boolean }
const Logo: FC<LogoProps> = ({ isScrolled }) => {
  const logoClassList = isScrolled ? 'logo-page-scrolled' : ''

  return (
    <>
      <div className={`logo-div ${logoClassList}`}>
        <img className="nav-logo logo-after" src="/logo-transparent-v1.png" width={228}></img>
        <img className="nav-logo logo-before" src="/logo-transparent-v2.png" width={228}></img>
      </div>
    </>
  )
}