import { ContainerNavbar, ImageLogo, Nav } from "./NavbarStyles";

import Logo from "../../assets/logoclp.png";

function Navbar() {
  return (
    <ContainerNavbar>
      <div>
        <h1>OlharCLP</h1>
      </div>

      <Nav>
        <a href="#">Home</a>|<a href="#">Lojas</a>|<a href="#">Sobre nós</a>|
        <a href="#">Novidades</a>|<a href="#">Anúnciar</a>|
        <a href="#">
          <img
            src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-png-0.png"
            alt="logo-whatsapp"
            style={{ width: 40 }}
          />
        </a>
      </Nav>
    </ContainerNavbar>
  );
}

export default Navbar;
