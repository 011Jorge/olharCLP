import Navbar from "../../components/Navbar";
import { ContainerHome, ContainerImage } from "./homeStyles";

function Home() {
  return (
    <ContainerHome>
      <ContainerImage>
        <Navbar />
        <h1>Seja Notado por onde passa!</h1>
      </ContainerImage>
      {/* <div>
        <h1>Hello</h1>
      </div> */}
    </ContainerHome>
  );
}

export default Home;
