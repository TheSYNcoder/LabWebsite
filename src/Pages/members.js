import React, {useState, useEffect} from "react";
import Profile from "../Components/profile";
import axios from "axios";
import https from "https";
import Error404 from "./Error404";
import Loading from "../Components/loading";
import fs from "fs";

class Member extends React.Component{
    constructor(){
        super();
        this.state={
          name:'',
          specialization:[],
          email:'',
          route:'',
          profile:'',
          projects:[],
          achievements:[],
          education:[],
          status:0
        }
      }
      componentDidMount(){
        const id = this.props.rprops.match.params.url;
        // const cart = fs.readFileSync("../certs/ca.crt");
        // const ckey = fs.readFileSync("../certs/ca.key");
        // console.log(cart,ckey)
        console.log(process.env)
        axios.get(
             `https://gobackserve.herokuapp.com/user/${id}`,
            {
                httpsAgent: new https.Agent({
                  rejectUnauthorized: false,
                // cert: cart,
                // key: ckey,
                })
            }
        ).then(res => {
            if(res.status===200){
                const data=res.data;
            this.setState({...data,status:1})
            }
            else{
                this.setState({status:2})
            }  
            console.log(this.state)
        })
        .catch(err => {
            this.setState({status:2})
        })

    }
    //   console.log(id)
    // const [state, setState] = useState(0);
    // useEffect(()=>{
    // axios.get(
    //     `https://34.71.76.188/user/${id}`,
        
    //     {
    //         httpsAgent: new https.Agent({
    //         rejectUnauthorized: false
    //         })
    //     }
    
    //     ).then(res => {
    //         if(res.status === 200){
    //             setState(1)
    //             console.log(res)
    //         }
    //     })
    //     .catch(err => {})
    // },[])
    render(){
        
    return(
        <div>
        {this.state.status === 0 && <Loading />}
        {this.state.status===1 && <Profile data={this.state} />}
        { this.state.status===2 && <Error404 />}
        </div>
    )
    }
    
}

export default Member;
