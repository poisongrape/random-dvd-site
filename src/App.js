import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { MenuBar } from "./components/menu";
import AppRoutes from "./AppRoutes";
import { store } from "./reducers/reducer";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MenuBar />
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
