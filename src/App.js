// App.jsx
import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Projects from './Components/Projects.js';
import About from './Components/About.js';
import Resume from './Components/Resume.js';
import Contact from './Components/Contact.js';
import Project from './Components/Project';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <div className="App">
            <Navbar/>
            <Route exact path="/"><About/></Route>
            <Route path="/Resume"><Resume/></Route>
            <Route exact path="/"><Projects/></Route>
            <Route exact path="/"><Contact/></Route>
            <Route path='/:link'><Project/></Route>
          </div>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
//<img src={logo} className="logo-image" alt="Logo Image" />
