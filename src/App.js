import React, { Component } from 'react';
import LandingPage from './landingPage/landingPage';
import Profile from './profile/profile';
import Skills from './skills/skills';
import Footer from './footer/footer.js';
import Projects from './projects/projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Profile />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
