import ReduxPage from "./Pages/Redux/ReduxPage";
import UseContextPage from "./Pages/UseContext/UseContextPage";
import "./App.css";

import Context from "./Pages/UseContext/Context";
import { Provider } from "react-redux";
import UserStore from "./Pages/Redux/store";

function App() {
  return (
    <div id="Layout">
      <Provider store={UserStore}>
        <ReduxPage />
      </Provider>

      <Context>
        <UseContextPage />
      </Context>
    </div>
  );
}

export default App;
