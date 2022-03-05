import { BrowserRouter } from "react-router-dom";
import { MenuBar } from "./components/menu";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
