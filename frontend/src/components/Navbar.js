import React, { Component } from "react";
import GoogleAuth from "./authentication/GoogleAuth";

import Logout from "./authentication/Logout";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      isloggedIn: false,
    };
  }
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-md navbar-light"
          style={styles.Navbar}
        >
          <div className="container-fluid ml-4 mr-4">
            <a href="\" className="navbar-brand text-3xl fw-bold text-black ">
              Talking Mar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
              <div className="nav justify-content-end">
                {localStorage.getItem("name") ? (
                  <>
                    <div className="nav-item">
                      <button
                        className="btn btn-outline-secondary text-gray-800"
                        style={{ marginRight: 20,  }}
                      >
                        {localStorage.getItem("name")}
                      </button>
                      <Logout />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="nav-item dropdown dropstart ">
                      <button
                        className="btn dropdown-toggle btn-outline-secondary"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        
                      >
                        Login
                      </button>
                      <ul
                        className="dropdown-menu  dropdown-menu-end bg-white border-gray-3"
                        aria-labelledby="dropdownMenuButton1"
                        id="login-dp"
                      >
                        <li className="">
                          <div className="row">
                            <div className="col-md-12 text-white-500 md:text-gray-700">
                              Login via
                              <div className="social-buttons">
                                <GoogleAuth />
                             
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const styles = {
  Navbar: {
    borderBottom: "1px solid gray",
    backgroundColor: "",
    opacity: ".9",
    minHeight: 40,
    boxShadow:"1px 1px 10px 1px gray"
  },
};
export default Navbar;
