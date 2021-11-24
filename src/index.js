import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import Controller from './screens/Controller';

import store from "./common/Redux/store"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Controller />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
registerServiceWorker();
