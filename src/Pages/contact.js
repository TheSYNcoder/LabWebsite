import React from "react";
import "tachyons";
import "./contact.css"
import Layout from "../Components/layout"
const Contact = () =>{
    return(
        <Layout >
        <div class="jumbotron jumbotron-fluid backgroundP">
            {/* <div className="container">
            
            </div> */}
            <div class="container">
                {/* <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                
                <header class="tc pv2 pv2-ns">
                    <h1 class="display-3 rcolor fw4">Contacts</h1>
                </header>
                <div class="container">
                    <h2 class="f3 gray  ttu tracked rcolor">Lab Supervisor</h2>
                    <p class="lead pb0">Prof. Nibran Das</p>
                    <p class="f5 pv0">Jadavpur University</p>
                </div>
                <div class="container">
                    <h2 class="f3 gray ttu rcolor caseS">Phd Scholars</h2>
                    <p class="lead pb0">Prof. Nibran Das</p>
                    <p class="f5 pv0">Jadavpur University</p>
                </div>
                <div class="container">
                    <h2 class="f3 gray ttu rcolor caseS">Website Maintainers</h2>
                    <div class="flex">
                        <div class=" w-50 pa3 mr2">
                            <p class="lead pb0">Bisakh Mondal</p>
                            <p class="f5 pv0">Jadavpur University</p>
                        </div>
                        <div class=" w-50 pa3 mr2">
                            <p class="lead pb0">Shuvayan Ghosh Dastidar</p>
                            <p class="f5 pv0">Jadavpur University</p>
                        </div>
                        </div>
                    
                </div>

                <div class="container tc" >
                    <h2 class="f1 fw3 rcolor caseS" >Find us on</h2>
                </div>

                <div class="tc pv2 pv2-ns">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1910275582422!2d88.36888805965646!3d22.497014900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271234003e379%3A0x62b2304c5d096063!2sDepartment%20of%20Computer%20Science%20and%20Engineering!5e0!3m2!1sen!2sin!4v1600380945980!5m2!1sen!2sin" 
                
                 height="400"  allowFullScreen="" width="800"
                frameBorder="0" style={{border:0}} aria-hidden="false" tabIndex="0"></iframe>
                </div>

                {/* </header> */}

                {/* </header> */}
            </div>
        </div>
        </Layout>
    )
};

export default Contact;
