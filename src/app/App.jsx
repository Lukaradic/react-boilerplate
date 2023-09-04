import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import Search from '../features/search/Search';
const App = () => {
    return (
      <div>
        <Search />
      </div>
    );
  };
  
  const contianer = document.getElementById("root");
  const root = createRoot(contianer);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );