import React from "react";
import "tachyons";
import "./profile.css";
import axios from "axios";
import Tcard, {ImageCard} from "./textCard";
import Footer from "./footer";
import https from "https";
import Layout from "./layout"

const Profile = ({data})=>{

        let EDUCON = data.education.map((it,i)=>{
            return <li className="f3 fw3" >{it}</li>
        })

        let ACHIEVECON = data.achievements.map((it,i)=>{
            return <li className="f3 fw3 pa2" >{it}</li>
        })
        
        let PROJECTSCON = data.projects.map((it,i)=>{
            return <Tcard text={it} />
        })
        return(
            <Layout>
        <div>
            <div class="jumbotron jumbotron-fluid backgroundP">
            <div class="container">
                {/* <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                
                <header class="tc pv4 pv5-ns">
                    <img src="http://tachyons.io/img/logo.jpg" class="br-100 pa1 ba b--black-10 h5 w5" alt="avatar" />
                    <h1 class="display-4 ">{data.name}</h1>
                    <h2 class="f4 gray fw3 ttu tracked">Specialized at: {data.specialization.join(" | ")}</h2>
                    <p class="lead">{data.email}</p>
                    <h2 class="f4 gray fw2 ttu tracked">Jadavpur University</h2>
                </header>
            </div>

            {EDUCON.length!==0 ?
            
            <div className="container pa2">
                <h2 className='f2 fw4 rcolor'>Education</h2>
                <ul className="ull">
                {EDUCON}
                </ul>
            </div>
            : <div /> 
            
            }

            { ACHIEVECON.length!==0 ?
            <div className="container pa2">
                <h2 className='f2 fw4 rcolor'>Projects</h2>
                    <ol className="oll">
                        {PROJECTSCON}
                    </ol>
            </div>
            :
            <div />
            }
            { PROJECTSCON.length!==0 ?
            <div className="container">
                <h2 className='f2 fw4 rcolor'>Achievements</h2>
                <ol className="oll">
                    {ACHIEVECON}
                </ol>
            </div>
            :
            <div />
            }
            </div>
        </div>
        </Layout>
    )
};

export default Profile;