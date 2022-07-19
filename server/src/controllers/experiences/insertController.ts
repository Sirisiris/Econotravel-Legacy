import { Request, Response } from "express";
import experienceDAO from "../../model/experiences/dao";

const experienceController = async (req: Request, res: Response) => {
  try {
    
    const result = await experienceDAO.getExperiences();
    result
      ? res.json(result)
      : res.status(500).send("Failed to create a new user.");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
export default experienceController;
