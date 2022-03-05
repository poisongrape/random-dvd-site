import { Link, Route, Routes } from "react-router-dom";
import Foo from "./Foo";
import Bar from "./Bar";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Foo />} />
        <Route path="/foo" element={<Foo />} />
        <Route path="/bar" element={<Bar />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
