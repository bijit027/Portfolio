//npm install react-bootstrap bootstrap
//npm install --save styled-component
//use netlify.com for deploy this project
//npm install typewriter-effect
//npm i react-parallax
//npm i react-reveal
//npm i react-tilt
//npm i @merc/react-timeline
//npm i react-particles-js
import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import Fade from 'react-reveal';
import Slide from "react-reveal/Slide";

import { Parallax } from "react-parallax";

import Mynavbar from './components/my-navbar/my-navbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component.jsx';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Experience from './pages/experience/experience.component';
import ProjectTimeline from './components/project-timeline/project-timeline.component';
import ContactForm from './pages/contact-form/contact-form.component';
import FooterPanel from './components/footer/footer.component';
import { Container } from 'react-bootstrap';
import Particles from 'react-particles-js';
import {particlesOptions} from './particalOption';
function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Mynavbar />
      <MyCarousal />
      <TitleMessage />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      {/*About section*/}
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Slide duration={500}>
                <About />
              </Slide>
            </Container>
          </div>
        </Parallax>
      </div>
      
      {/*Skills*/}
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Slide duration={500}>
              <hr />
                <Skills />
              </Slide>
            </Container>
          
            </div>
        </Parallax>
        
      </div>
    {/*Experience*/}
    <div>
     {/*  <Container className="container-box rounded">
          <Slide duration={500}>
            <hr />

          <Experience />
            
          </Slide>
        </Container>
        */} 

      </div>

      {/*Projects - Timeline*/}

      <div>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <hr />

            <ProjectTimeline />
          </Slide>
        </Container>
      </div>
      {/*Contact*/}
      <div>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <hr />

            <ContactForm />
          </Slide>
        </Container>
      </div>
      {/*Footer*/}
      <div>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <hr />

            <FooterPanel />
          </Slide>
        </Container>
      </div>


      
    
    </div>
  );
}

export default App;
