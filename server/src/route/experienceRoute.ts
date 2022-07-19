import { Router } from "express";
import experienceController from "../controllers/experiences/experienceController";
import updateController from "../controllers/experiences/updateController";
import insertController from "../controllers/experiences/insertController";
import deleteController from "../controllers/experiences/deleteController"

const router = Router();

router.get('/experiences',experienceController);
router.get('/experiences/:id',experienceController);
router.put('/experiences/:id', updateController);
router.post('/experiences', insertController.insertExperience);
router.delete('/experiences/:id', deleteController);

export default router;