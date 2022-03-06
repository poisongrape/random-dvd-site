import { Route, Routes } from "react-router-dom";
import { Path } from "./consts";
import { HomePage, DetailsPage, ListPage } from "./routes";


function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path={Path.home} element={<HomePage />} />
        <Route path={Path.details} element={<DetailsPage />}>
          <Route path=":dvdId" element={<DetailsPage />} />
        </Route>
        <Route path={Path.list} element={<ListPage />} />
        <Route path="*" element={
          <h1>Oops, nothing here!</h1>
        } />
      </Routes>
    </>
  );
}

export default AppRoutes;
