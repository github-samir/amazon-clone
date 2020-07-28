import React from "react";
import "./App.css";
import StoreProvider from "./Provider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <h1>Login page</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
