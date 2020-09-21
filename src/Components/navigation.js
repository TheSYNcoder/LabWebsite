import React, {useState,useEffect} from 'react';
import logoName from "./logoName.png"
import { Link, useLocation } from 'react-router-dom';
import logo from "./logo.jpg"
import "tachyons"
import "./nav.css"

function Navigation() {

  const loc= useLocation().pathname;
  // console.log(location.pathname)
  const [mobile,setMobile] = useState(false);
  useEffect(()=>{
    if(window.innerWidth<=500){
      setMobile(true);
    }
  });

  let map = new Map([
    ['/home',1],
    ['/affiliates',2],
    ['/courses',3],
    ['/blog',4],
    ['/contacts',5],
    ['/contribute',6]
  ]);

  const [active,setActive] = useState(map.get(loc))
  const [mess, setMess] = useState("Academic Login")
  // useEffect(()=>{

  // },[])
  const onChange = (x)=> {
      setActive(x)
  }
  return (
<nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-5">
        <div class="navbar-brand" href="#">
        <Link to="/" >
          <img alt="" height="50" src={logo} />
          <img alt="" height="45" src={logoName} /> 
        </Link>
        </div>
   
        <button class="navbar-toggler grow navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          style={{
            backgroundColor:"#820001",
            border: "none",
            outline: "white",
          }}
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" ></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto f5 helvetica">
            <li class="nav-item ">
                <Link to='/home' class={`nav-link grow ${active===1 ? "active": ""} ${!mobile && active===1 ? "bbi": ""}`} onClick= {()=>onChange(1)}>
                {/* <Link to="/home" style={{textDecoration: 'none'}} > */}
                Home <span class="sr-only">(current)</span>
                </Link>
                {/* </a> */}
            </li>
            <li class="nav-item ">
                <Link to="/affiliates" class={`nav-link grow ${active===2 ? "active": ""} ${!mobile && active===2 ? "bbi": ""}`} onClick= {()=>onChange(2)}>
                Affiliates</Link>
            </li>
            <li class="nav-item">
                <Link to="/courses"  class={`nav-link grow ${active===3 ? "active ": ""} ${!mobile && active===3 ? "bbi": ""}`}  onClick= {()=>onChange(3)}>
                Courses</Link>
            </li>
            <li class="nav-item">
                <Link to="/blog" class={`nav-link grow ${active===4 ? "active": ""} ${!mobile && active===4 ? "bbi": ""}`} onClick= {()=>onChange(4)}>
                Blog
                </Link>
            </li>
            <li class="nav-item ">
                <Link to="/contacts"  className={`nav-link grow ${active===5 ? "active ": ""} ${!mobile && active===5 ? "bbi": ""}`}  onClick= {()=>onChange(5)}>
                
                Contacts
                </Link>
            </li>
            <li class="nav-item">
                <Link to="/contribute"  class={`nav-link grow ${active===6 ? "active ": ""} ${!mobile && active===6 ? "bbi": ""}`} onClick= {()=>onChange(6)}>
                Contribute
                </Link>
            </li>
            <li class="nav-item">
            <Link to="/login"  className="btn text-light grow pointer pa2 br2" style={{backgroundColor:"#820001"}}>
              <strong>Academic Login</strong>
            </Link>
            </li>
            {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li> */}
            {/* <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li> */}
            </ul>
        </div>
  
    </nav>
  );
}

export default Navigation;
