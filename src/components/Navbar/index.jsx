import Logo from "../../assets/logo.png";
import { ContainerNavbar, ContainerLogo, ContainerLink } from "./navbarStyles";

function Navbar() {
  return (
    <ContainerNavbar>
      <ContainerLogo>
        <img src={Logo} alt="logo-clp" />
        <h2>OlharCLP</h2>
      </ContainerLogo>
      <ContainerLink>
        <a href="#">Home</a>
        <a href="#">Lojas</a>
        <a href="#">Sobre nós</a>
        <a href="#">Anunciar</a>
      </ContainerLink>
    </ContainerNavbar>
  );
}

export default Navbar;
