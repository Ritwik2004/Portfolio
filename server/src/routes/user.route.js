import { Router } from "express";
import { sendingMail } from "../controllers/user.controller.js";
const router = Router()

router.post("/sendMail", sendingMail)


export default router