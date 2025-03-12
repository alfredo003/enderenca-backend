import { Router } from "express";
import { ProvinceController } from "./controllers/ProvinceController";
const routes = Router();

routes.get("/pronvice", (req, res) => {
    res.status(200).json({message:"Ok"});
});
routes.post("/pronvices", ProvinceController.create);

export default routes;