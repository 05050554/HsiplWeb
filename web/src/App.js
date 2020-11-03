import React from 'react';
import './App.css';

import Hamburger from './components/Hamburger'
import HamburgerLM from './components/HamburgerLM'
import HomePage1 from './components/HomePage1';
import { About_HSIPL } from './components/About_HSIPL';
import Introduction from './components/Introduction';
import Professor from './components/Professor';
import Members from './components/Members1';
import Equipment from './components/Equipment';
import Footer from './components/Footer';
import Research_interests from './components/Research_interests'


import Alumnus from './components/Alumnus'
import Research_Posters from './components/Research_Posters'
import Honor from './components/Honor'

import { Projects, Talks, Service, Conference, Awards } from './components/Professor_Details'
import Professor1 from './components/Professor1';
import HamburgerDT from './components/HamburgerDT'



import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
  return (

    <Router>
      <Switch>
        <Route exact path='/LearnMore/:id' component={Alumnus,Research_Posters,Equipment} >
          {/* <ScrollToTop> */}
            <HamburgerLM />
            <Alumnus />
            <Research_Posters />
            <Equipment></Equipment>
            <Footer />
          {/* </ScrollToTop> */}
        </Route>

        <Route exact path="/ProfessorDetail" >
          <ScrollToTop>
            <HamburgerDT />
            <Professor1 />
            <Projects />
            <Talks />
            <Service />
            <Conference />
            <Awards />
            <Footer />
          </ScrollToTop>
        </Route>

        <Route exact path="/">
          {/* <div className="App"> */}
          <ScrollToTop>
            <Hamburger />
            <HomePage1></HomePage1>
            <About_HSIPL></About_HSIPL>
            {/* <Introduction></Introduction> */}
            <Professor></Professor>
            <Members></Members>
            <Research_interests />
            <Honor />
            <Footer />
            {/* </div> */}
          </ScrollToTop>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
