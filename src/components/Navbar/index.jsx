import { ContainerNavbar, ImageLogo, Nav } from "./NavbarStyles";

import Logo from "../../assets/logoclp.png";

function Navbar() {
  return (
    <ContainerNavbar>
      <ImageLogo src={Logo} alt="logo-olhar-clp" />

      <Nav>
        <a href="#">Home</a>
        <a href="#">Lojas</a>
        <a href="#">Sobre nós</a>
        <a href="#">Novidades</a>
        <a href="#">Anúnciar</a>
      </Nav>
    </ContainerNavbar>
  );
}

export default Navbar;
