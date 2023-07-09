import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Store from "../containers/Stores";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lojas" element={<Store />} />
    </Routes>
  );
}

export default Router;
