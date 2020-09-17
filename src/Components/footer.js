import React from 'react';
import "./footer.css";

import { Row , Col , Container } from "reactstrap";

import theme from '../Theme';

export default function Footer(){
    return (
        <footer class="section footer-classic context-dark bg-image" style={{background: theme.palette.primary.main }}>
         <Container>
         <Row>
             <Col xs={12} lg={4} className="pr-xl-4 pt-xl-4">
                <h1 className="p-0">DVLP</h1>
                <h2>Jadavpur University</h2>
                <p class="rights"><span>©  </span><span class="copyright-year">2020</span><span> </span><span>. </span><span>All Rights Reserved.</span></p>
             </Col>
             <Col xs={12} lg={4} >
                <h5 className="mt-4">Contacts</h5>
                <dl class="contact-list">
                    <dt>Address:</dt>
                    <dd>188, Raja S.C. Mallick Rd,<br/>
                        Kolkata 700032.Ph:+9133-24146666</dd>
                </dl>
                <dl class="contact-list">
                    <dt>email:</dt>
                    <dd><a href="mailto:#">nibaran.das@jadavpuruniversity.in</a></dd>
                </dl>
                {/* <dl class="contact-list">
                    <dt>phones:</dt>
                    <dd><a href="tel:#">https://karosearch.com</a> <span>or</span> <a href="tel:#">https://karosearch.com</a>
                    </dd>
                </dl> */}
             </Col>
             <Col xs={12} lg={4} >
             
              <ul class="nav-list p-3" >
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
             </Col>
         </Row>
          
          </Container>

        
      </footer>
    )
}