import User from "../models/user";
import { OAuth2Client } from "google-auth-library";

var request = require("request");

request = require("google-oauth-jwt").requestWithJWT(request);
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const googleLogin = (req, res) => {
  const { tokenId } = req.body;
  client
    .verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    .then((response) => {
      const { email_verified, name, email } = response.payload;
      console.log(response.payload);
      if (email_verified) {
        User.findOne({ email: email }).exec((err, user) => {
          if (err) {
            return res.status(400).json({
              error: "Something went Wrong",
            });
          } else {
            if (user) {
              return { user };
            } else {
              new User({
                name,
                email,
              })
                .save()
                .then((newUser) => {
                  console.log("New user ", newUser);
                  return { newUser };
                });
            }
          }
        });
      }
    });
  console.log(tokenId);
};
export default googleLogin;
