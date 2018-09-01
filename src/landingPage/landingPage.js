import React from 'react';
import Header from './header/header';
import Profile from './profile/profile';
import Skills from './skills/skills';
import Footer from './footer/footer.js';
import Projects from './projects/projects';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Profile />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default LandingPage;
