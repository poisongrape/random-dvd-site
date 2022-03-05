import { BrowserRouter } from "react-router-dom";
import AppLinks from "./AppLinks";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppLinks />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
