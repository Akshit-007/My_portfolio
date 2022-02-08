import React from 'react';
import Nav from './components/Nav'
import Home from './components/Home'
import Tools from './components/Tools'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import countapi from 'countapi-js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  countapi.hit("ae42216b-5ad7-413d-9be0-36f3b7b9aaa7").then((result) => { });

  return (
    // <div className="w-screen h-min-screen bg-gray-200">
    <div className="bground">

      <Router>

        <Nav />


        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/project" exact component={Project} />
          <Route path="/tools" exact component={Tools} />
          <Route path="/contact" exact component={Contact} />

        </Switch>
        <br />
        <Footer />

      </Router>




    </div>
  );
}

export default App;
