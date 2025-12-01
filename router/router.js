import {Router} from "express";
import controller from "../container/container.js";
import validateCorredor from "../middlewares/validateCorredor.js";

const router = Router()

router.post("/", validateCorredor, controller.create)

export default router