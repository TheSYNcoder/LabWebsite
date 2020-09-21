import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import "./splash.css";
import "tachyons";

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
    // const { innerWidth: width, innerHeight: height } = window;
    // console.log(height, width)
  return(
    <div class="jumbotron jumbotron-fluid backgroundG">
    <Particles  className='particles z-index-1' params={options} />
    <div class="container" >
      <h1 class="display-3 z-index-0">Welcome to DVLP</h1>
      <h2 className="display-4 z-index-0">
               Deep Vision & Language Processing
      </h2>
      <p class="lead z-index-0"> A lab based in Jadavpur University</p>
      <br/>
    <Link to="/home" className="btn btn-light grow z-index-2 f3">Welcome</Link>
    </div>
  </div>
//     // <div>
//     <div className="" >
//   {/* <Particles  className= 'particles' params={options} /> */}
//       <div className="hero-body ">
//         <div className="container">
//         tyle={{height:"100%"}}        <div  style={{zIndex:2}} >
//           <h1 className="title" >
//               Welcome to DVLP
//           </h1>
//           <h2 className="subtitle pd-4">
//               Deep Vision & Language Processing
//           </h2>
//           <h2 className="subtitle pd-4">
//              
//           </h2>
//            </div>
//           <br />
//           <Link to="/home" className="btn is-rounded has-background-primary pt-4" style={{zIndex:6}}>Welcome</Link>

//         </div>
//       </div>
//   {/* </Particles> */}
//     </section>
//     // </div>
  )
};


export default Splash; 

