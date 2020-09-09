import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import splashCSS from  "./splash.css";
const options = {
  "particles": {
      "number": {
          "value": 160,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 7,
          "random": true
      },
      "move": {
          "direction": "top",
          "out_mode": "out"
      },
      "line_linked": {
          "enable": false
      }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": true,
              "mode": "remove"
          },
          "onhover": {
            "enable": true,
            "mode": "repulse"
        }
      },
      "modes": {
          "remove": {
              "particles_nb": 10
          }
      }
  }
};

const Splash = () => {
  return(
    // <div>
    <section className="hero has-background-danger is-fullheight">
  <Particles  className= {`${splashCSS.particles}`} params={options} />
      <div className="hero-body ">
        <div className="container">
          <div  style={{zIndex:2}} >
          <h1 className="title" >
              Welcome to DVLP
          </h1>
          <h2 className="subtitle pd-4">
              A lab based in Jadavpur University
          </h2>
           </div>
          <br />
          <Link to="/home" className="button is-rounded has-background-primary pt-4" style={{zIndex:6}}>Welcome</Link>

        </div>
      </div>
  {/* </Particles> */}
    </section>
    // </div>
  )
};


export default Splash; 

