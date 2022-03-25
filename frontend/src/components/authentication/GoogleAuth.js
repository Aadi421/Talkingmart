import React, { Component } from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";

class GoogleAuth extends Component {
  render() {
    const responseGoogle = (response) => {
      this.setState({
        isloggedIn: true,
        name: response.profileObj.name,
        email: response.profileObj.email,
      });
      localStorage.setItem("name", response.profileObj.name);
      localStorage.setItem("email", response.profileObj.email);
      console.log(response);
      window.location.href = "/";
      axios({
        method: "POST",
        url: "/auth/google",
        data: { tokenId: response.tokenId },
      })
        .then((res) => {
          console.log("Google Login Success", res);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    return (
      <>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="btn btn-go"
            >
              <i class="fa fa-google"></i>&nbsp;Google
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </>
    );
  }
}

export default GoogleAuth;
