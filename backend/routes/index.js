import express from "express";
import googleLogin from "../controller/googleAuth";


const router = express.Router();




router.post("/auth/google", googleLogin);



export default router;
