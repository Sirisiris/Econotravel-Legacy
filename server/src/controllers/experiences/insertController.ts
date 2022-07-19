import { Request, Response } from "express";
import experienceDAO from "../../model/experiences/dao";
import Experience from '../../model/experiences/model';


const insertController = {
  insertExperience: async (req: Request, res: Response) => {
  try {
    const { title, ...Experience } = req.body as Experience;
    console.log(req.body)
    const result = await experienceDAO.insertExperience({ title, ...Experience  });
    result
      ? res.status(201).json(result)
      : res.status(500).send("Failed to create a new user.");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
};
export default insertController;
