import React from 'react';
import Background from './bg.jpg';
import './contribute.css'
import Laout from "../Components/layout";
import "tachyons";
import SHUV from "./shuv.jpg";
import BIS from "./bis.jpeg";

const About=()=>{
    return (
        <Laout>
        {/* <div className= 'bgg' style={{backgroundImage: `url(${Background})`,minWidth: "100vw",minHeight: "100vh"}} > */}
        
                          <div className="jumbotron jumbotron-fluid jjj ">
                          <header class="tc pv2 pv2-ns">
                          <div class="container pa1 ">
                            <h1 class="display-2 rcolor ">{`DVLP Jadavpur University`}</h1>
                            <p class="lead" > The source code of the website is made open source. The Backend is exclusively written in Golang to encourage flourishing developers into microservices. Please feel free to make a pull request.</p>
                            <p className='lead b'>Keep contributing</p>
                            <div className='tc '>
                            <p><a class="btn btn-danger h-5 w-20 grow" href="https://github.com/DVLP-CMATERJU" role="button" target='_blank'>About DVLP &raquo;</a></p>
                            <p><a class="btn btn-danger h-5 w-20 grow" href="https://github.com/TheSYNcoder/LabWebsite" role="button" target='_blank'>
                            <svg class="dib h2 w2 pa1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                              Code &raquo;</a></p>
                            </div>

                          </div>
                          </header>
                            

            <div class="container tc" >
                            <h2 class="f1 fw3 rcolor caseS" >Promising Developers</h2>
            </div> 
            
    <div class="flex">
          <div class=" w-50 pa3 mr2">

          <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 grow">
  <div class="tc">
    <img src={BIS} class="br-100 h4 w4 dib" title="Bisakh" />
    <h1 class="f3 rcolor">Bisakh Mondal</h1>
    <hr class="bb bw1 b--black-10" />
  </div>
  <p class="lh-copy measure tc center f6 black-70">
  <a class="btn btn-primary  grow" href="https://github.com/bisakhmondal" role="button" target='_blank'>
                            <svg class="dib h2 w2 pa1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                              GitHub &raquo;</a>
  </p>
</article>


          </div>
          <div class=" w-50 pa3 mr2">

          <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 grow">
  <div class="tc">
    <img src={SHUV} class="br-100 h4 w4 dib" title="Shuvayan" />
    <h1 class="f3 rcolor">Shuvayan Ghosh Dastidar</h1>
    <hr class=" bb bw1 b--black-10" />
  </div>
  <p class="lh-copy measure tc center f6 black-70">
  <a class="btn btn-primary  grow" href="https://github.com/TheSYNcoder/" role="button" target='_blank'>
                            <svg class="dib h2 w2 pa1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                              GitHub &raquo;</a>
  </p>
</article>

          </div>
    </div>
 

    
   </div>
   {/* </div> */}
   </Laout>
      
    )
};

export default About;