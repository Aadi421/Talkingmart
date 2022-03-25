import React, { Component } from "react";

class Logout extends Component {
  render() {
    const logout = () => {
      localStorage.clear();
      window.location.href = "/";
    };
    return (
      <>
        <button
          className="btn btn-outline-secondary text-gray-800"
          onClick={logout}
          
        >
          Logout
        </button>
      </>
    );
  }
}

export default Logout;
