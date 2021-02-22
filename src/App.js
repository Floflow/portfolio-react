// App.jsx
import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import About from './Views/About.js';
import Resume from './Views/Resume.js';
import Projects from './Views/Projects';
import Navbar from './Components/Navbar';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar/>
        <Switch>
          <div className="App">
            <Route exact path="/"><About/></Route>
            <Route exact path="/">
              <Redirect to="/About" />
            </Route>
            <Route path="/Resume"><Resume/></Route>
            <Route path="/Projects"><Projects/></Route>
          </div>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
//<img src={logo} className="logo-image" alt="Logo Image" />
