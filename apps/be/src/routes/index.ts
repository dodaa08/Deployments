import { Router } from "express";
const router  = Router();
import convertRouter from "./convert/route";

router.use("/url", convertRouter);
export default router;