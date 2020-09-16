import React from 'react';
import { Link } from 'react-router-dom';
// import HeaderC from './header.css';
// import logo from "../resources/img/logo.jpg";
// import logoName from "../resources/img/logoName.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      select:false
    };
  }

  toggleMenuBar(e) {
    const { open } = this.state;
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.setState({
      open: !open,
    });
  }

  closeMenuBar() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      // <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          // role="navigation"
          // aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <div className="navbar-item">
                <Link to="/">
                  {/* <strong>DVLP</strong> */}
                  {/* <div style={{height:100}}> */}
                  {/* <img alt="" height="50" src={logo}/> */}
                  
                  {/* </div> */}
                {/* </Link>
                <Link to="/"> */}
                  {/* <img alt="" height="50"  src={logoName}/> */}
                {/* </div> */}
              </Link>
              </div>
              <button
                type="button"
                onClick={e => this.toggleMenuBar(e)}
                className={`navbar-burger has-text-weight-bold ${open ? "is-active" : ""}`}
                aria-label="menu"
                aria-expanded="false"
                style={{
                  background: "#820001",
                  border: "none",
                  outline: "white",
                  color:'white',
                }}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
            <div className={`navbar-menu ${open ? "is-active" : ""}`}>
            <div className="navbar-end">
              <Link
                className="navbar-item pl-5 pr-5"
                to="/home"
                onClick={() => this.closeMenuBar()}
              >
               Home
              </Link>
              <Link
                className="navbar-item"
                to="/global-local-css"
                onClick={() => this.closeMenuBar()}
              >
                Affiliates
              </Link>
              <Link
                className="navbar-item"
                to="/typescript-counter"
                onClick={() => this.closeMenuBar()}
              >
                Courses
              </Link>
              <Link
                className="navbar-item"
                to="/skeleton-loading"
                onClick={() => this.closeMenuBar()}
              >
                Contacts
              </Link>
              {/* <Link
                className="navbar-item"
                to="/image-optimization"
                onClick={() => this.closeMenuBar()}
              >
                Image Optimization
              </Link>
              <Link
                className="navbar-item"
                to="/login"
                onClick={() => this.closeMenuBar()}
              >
                Auth
              </Link> */}
              <Link
                className="navbar-item"
                to="/contribute"
                onClick={() => this.closeMenuBar()}
              >
                Contribute
              </Link>
              <hr class="navbar-divider" />

  <div className="navbar-item">
    <div className="buttons">
    <a className="button has-text-light" style={{backgroundColor:"#820001"}}>
      <strong>Internal</strong>
    </a>
    </div>
  </div>
</div>



            </div>
          </div>
        </nav>
      // </div>
    );
  }
}
