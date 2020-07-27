import React,{useEffect} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Vision from "./components/pages/Vision";
import Mission from "./components/pages/Mission";
import Objectives from "./components/pages/Objectives";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const App=()=> {

  useEffect(()=>{
    Aos.init({duration:1500})
},[])
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/vision" component={Vision} />
        <Route exact path="/mission" component={Mission} />
        <Route exact path="/objectives" component={Objectives} />
        <Redirect to={Home}/>
      </Switch>
    </>
  );
}

export default App;
