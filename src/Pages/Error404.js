import React from "react";
import Layout from "../Components/layout";
import "./contribute.css";
import { Typography } from "@material-ui/core";

const Error404 = () =>{
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
                        ERROR 404!!
                   </Typography>
                   <Typography variant="h3">
                       Page Not Found.
                   </Typography>
               
             </div>
         </Layout>
        
         </div>

    )
}

export default Error404;