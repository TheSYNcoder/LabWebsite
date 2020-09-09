import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <section className="hero has-background-danger is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
            Welcome to DVLP
        </h1>
        <h2 className="subtitle">
            A lab based in Jadavpur University
        </h2>
        <Link to="/home" className="button is-rounded has-background-primary">Welcome</Link>
      </div>
    </div>
  </section>
);
