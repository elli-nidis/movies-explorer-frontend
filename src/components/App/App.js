import React from 'react';

import './App.css';
import { Promo } from '../Promo/Promo';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { AboutMe } from '../AboutMe/AboutMe';

function App() {
  return (
    <div className="page">
      {/* <Header /> */}
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      {/* <Portfolio /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
