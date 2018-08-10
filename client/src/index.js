// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));


import ReactDOM from 'react-dom';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import { makeMainRoutes } from './routes';
import { makeMainRoutes } from './App';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
