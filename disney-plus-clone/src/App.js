import React from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Hnav from "./components/Hnav";
import Detail from "./components/Detail";
import Listarmovie from "./components/Listarmovie";
import Dispositivo from "./pages/Dispositivo";
import CrudAd from "./pages/CrudAd";
import Crudslider from "./pages/Crudslider";
import Crudviewers from "./pages/Crudviewers";
import Footer from "./components/Footer";
import Listarmovieoriginal from "./components/Listarmovieoriginal";
import Listarmovieserie from "./components/Listarmovieserie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Formulario from "./components/Formulario";
import Formularioventa from "./components/Formularioventa";
import Formulariologin from "./components/Formulariologin";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/formulariologin">
            <Formulariologin />
          </Route>
          <Route path="/crudsviewers">
            <Crudviewers />
          </Route>
          <Route path="/crudslider">
            <Crudslider />
          </Route>
          <Route path="/formularioventa">
            <Formularioventa />
          </Route>
          <Route path="/formulario">
            <Formulario />
          </Route>
          <Route path="/listarmovieserie">
            <Listarmovieserie />
          </Route>
          <Route path="/listarmovieoriginal">
            <Listarmovieoriginal />
          </Route>
          <Route path="/footer">
            <Footer />
          </Route>
          <Route path="/dispositivo">
            <Dispositivo />
          </Route>
          <Route path="/crudad">
            <CrudAd />
          </Route>
          <Route path="/Listarmovie">
            <Listarmovie />
          </Route>
          <Route path="/hnav">
            <Hnav />
          </Route>
          <Route path="/detail/:id_movie">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
