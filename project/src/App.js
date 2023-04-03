import React from 'react'
import { Routes,Route } from 'react-router-dom';
import INavbar from './components/INavbar';
import Aboutus from './pages/Aboutus';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Qualifications from './pages/Qualifications';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contactme from './pages/Contactme';
import Workshops from './pages/Workshops';

import './App.css';
function App() {
  return (
    <div className="App">
      <INavbar/>
    <Routes>
      <Route path = "Aboutus" element ={<Aboutus/>}/>
      <Route path = "Skills" element ={<Skills/>}/>
      <Route path = "Hobbies" element ={<Hobbies/>}/>
      <Route path = "Qualifications" element ={<Qualifications/>}/>
      <Route path = "Experience" element ={<Experience/>}/>
      <Route path = "Projects" element ={<Projects/>}/>
      <Route path = "Certifications" element ={<Certifications/>}/>
      <Route path = "Contactme" element ={<Contactme/>}/>
      <Route path = "Workshops" element ={<Workshops/>}/>
          </Routes>
          </div>

  );
}

export default App;
