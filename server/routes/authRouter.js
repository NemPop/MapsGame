import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { signInUser, signUpUser, googleSignIn } from "../controllers/auth.js";
const authRouter = Router();

authRouter.post("/signup", signUpUser);
authRouter.post("/signin", signInUser);
authRouter.post("/google", googleSignIn);
export default authRouter;
