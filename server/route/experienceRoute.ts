import { Router } from "express";
import movieController from "../controller/experienceController";

const router = Router();

router.get('/movies',movieController.getAllMovies);
router.get('/movies/:id',movieController.getOneMovie);

export default router;