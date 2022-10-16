import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

var urix = require("urix")
urix()
import App from './Components/app/App';

import "./styles/index.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
          <Provider store={store}>
               <Router >
                    <App />
               </Router >
          </Provider>
     </React.StrictMode>
);

