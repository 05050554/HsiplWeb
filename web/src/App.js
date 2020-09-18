import React from 'react';
import './App.css';

import Hamburger from './components/Hamburger'
import HamburgerLM from './components/HamburgerLM'
import HomePage from './components/HomePage1';
import { LabDirector } from './components/LabDirector';
import Introduction from './components/Introduction';
import Professor from './components/Professor';
import Members from './components/Members1';
import Equipment from './components/Equipment';
import Footer from './components/Footer';


import Research_interests from './components/Research_interests'
import Research_Posters from './components/Research_Posters'
import Awards from './components/Awards'

import { Projects, Talks, Service, Conference } from './components/Professor_Details'
import Professor1 from './components/Professor1';
import HamburgerDT from './components/HamburgerDT'




import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/LearnMore">
          <HamburgerLM />
          <Research_interests />
          <Research_Posters />
          <Awards />
        </Route>

        <Route exact path="/ProfessorDetail">
          <HamburgerDT />
          <Professor1 />
          <Projects />
          <Talks />
          <Service />
          <Conference />
          <Footer />
        </Route>

        <Route exact path="/">
          {/* <div className="App"> */}
          <Hamburger />
          <HomePage></HomePage>
          <LabDirector></LabDirector>
          <Introduction></Introduction>
          <Professor></Professor>
          <Members></Members>
          <Equipment></Equipment>
          <Footer />
          {/* </div> */}
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
