import { Router } from "express";
import experienceController from "../controllers/experiences/experienceController";
import updateController from "../controllers/experiences/updateController";

const router = Router();

router.get('/experiences',experienceController);
router.put('/experiences/:id', updateController);
router.get('/')

export default router;