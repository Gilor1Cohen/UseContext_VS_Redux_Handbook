import ReduxPage from "./Pages/Redux/ReduxPage";
import UseContextPage from "./Pages/UseContext/UseContextPage";

import Context from "./Pages/UseContext/Context";

import { Provider } from "react-redux";
import UserStore from "./Pages/Redux/store";

import "./App.css";

function App() {
  return (
    <div id="Layout">
      {/* Redux store provider: makes the store available to all nested components */}
      <Provider store={UserStore}>
        <ReduxPage />
      </Provider>

      {/* Context provider: makes userContext values available to nested components */}
      <Context>
        <UseContextPage />
      </Context>
    </div>
  );
}

export default App;
