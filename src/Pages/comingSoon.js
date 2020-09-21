import React from "react";
import Layout from "../Components/layout";
import "./contribute.css";
import { Typography } from "@material-ui/core";

const Comingsoon = () =>{
    return (
        <div>
        
        
        {/* <ComingSoon 
        image="https://react-coming-soon.maksv.me/default-image.jpeg"
      bgColor="#fff"
      textColor="#000"
      illustration="development"
         /> */}
         <Layout>
             <div className="bg">
               
                   <Typography p="h1" variant="h1" color="primary">
                        COMING SOON
                   </Typography>
                   <Typography variant="h3">
                       DVLP Jadavpur University
                   </Typography>
               
             </div>
         </Layout>
        
         </div>

    )
}

export default Comingsoon;