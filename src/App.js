import React from 'react';
import Nav from './components/Nav'
import Home from './components/Home'
import Tools from './components/Tools'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="w-screen h-screen bg-gray-200">

      <Router>

        <Nav />


        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/project" exact component={Project} />
          <Route path="/tools" exact component={Tools} />
          <Route path="/contact" exact component={Contact} />

        </Switch>

        <Footer />

      </Router>




    </div>
  );
}

export default App;
