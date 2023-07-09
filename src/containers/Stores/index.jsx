import Navbar from "../../components/Navbar";
import { ContainerStore } from "./storeStyles";

function Store() {
  return (
    <ContainerStore>
      <Navbar />
      <h1>I am Store</h1>
    </ContainerStore>
  );
}

export default Store;
