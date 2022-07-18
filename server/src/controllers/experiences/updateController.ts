import { ObjectID } from "bson";
import { Request, Response} from "express";
import experienceDAO from "../../model/experiences/dao";

const updateController = async (req:Request,res:Response)=>{
    try {
            const result = await experienceDAO.updateExperience(req.body, req.params.id)
            result
                ? res.json(result)
                : res.status(500).send("Failed to update a new experience.");

    } catch (error: any) {
        res.status(400).send(error.message);
    }
}
export default updateController;