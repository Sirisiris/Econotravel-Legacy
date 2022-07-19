import { Request, Response} from "express";
import experienceDAO from "../../model/experiences/dao";

const deleteController = async (req:Request,res:Response)=>{
    try {
        // hacemos una variable numerica para transformar id de string a numerico utilizando el parseFloat
        const numerico = parseFloat(req.params.id)
            const result = await experienceDAO.deleteExperience(req.body, numerico)
            
            result
                ? res.json(result)
                : res.status(500).send("Failed to update a new experience.");

    } catch (error: any) {
        res.status(400).send(error.message);
    }
}
export default deleteController;
