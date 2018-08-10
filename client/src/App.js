// import React from "react";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import Main from "./components/Main";
// import NotFound from "./components/NotFound";

// const App = () => (
//   <Router>
//       <Switch>
//    <Route path="/order" component={Main} />
//    <Redirect from="/" to="/order" />
//         <Route component={NotFound} />
//       </Switch>
//   </Router>
// );

//export default App;

///////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import AppLogin from './AppLogin';
import Main from "./components/Main";
import Manager from "./components/Manager";
import NotFound from "./components/NotFound";
import About from './components/About';
//import Order from './Order/Order';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Footer from "./components/Footer";

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const container = {
  height: "100%",
  maxHeight: "100%"
}


export const makeMainRoutes = () => {
  return (
    <div style={container}>
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <AppLogin auth={auth} {...props} />} />
          <Route path="/about" component={About} />
          <Route path="/manager" render={(props) => <Manager auth={auth} {...props} />} />
          <Route path="/order" component={Main} />
          <Redirect from="/" to="/about" />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>

        </div>
      </Router>
    </div>
  );
}
