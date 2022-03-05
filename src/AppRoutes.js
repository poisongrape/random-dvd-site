import { Route, Routes } from "react-router-dom";
import { Path } from "./consts";
import { HomePage, DetailsPage, ListPage } from "./routes";


function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path={Path.home} element={<HomePage />} />
        <Route path={Path.details} element={<DetailsPage />} />
        <Route path={Path.list} element={<ListPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
