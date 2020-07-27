import React from "react";
import "./App.css";
import { StoreProvider } from "./Provider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <StoreProvider>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route path="/checkout">
              <Header />
              <h1>Checkout</h1>
            </Route>
            <Route path="/login">
              <h1>Login page</h1>
            </Route>
          </Switch>
        </div>
      </StoreProvider>
    </Router>
  );
}

export default App;
