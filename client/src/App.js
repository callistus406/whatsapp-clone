import { Provider } from "react-redux";
import "./App.css";
import Home from "./components/Home/Home";
import { store } from "./Redux-State/store";
import Status from "./components/Status/Status";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Status />
      </div>
    </Provider>
  );
}

export default App;
