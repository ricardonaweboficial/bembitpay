import React, { useEffect, ReactElement } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
// import Routes from "./routes";
import Routes from "./routes/index";
import GlobalStyles from "./styles/global";

import "./config/ReactotronConfig";
import { store, persistor } from "./store";
import ThemeProvider from "./styles/themeProvider";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
