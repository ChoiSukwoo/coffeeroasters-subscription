import { Routes, Route } from "react-router";

import About from "@pages/About";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Plan from "@pages/Plan";

const Router = () => {
  return (
    <Routes>
      <Route path={"*"} element={<NotFound />} />
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/plan"} element={<Plan />} />
    </Routes>
  );
};

export default Router;
