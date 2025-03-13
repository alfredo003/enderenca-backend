import { Router } from "express";
import { ProvinceController } from "./controllers/ProvinceController";
const routes = Router();


routes.post("/pronvices",  ProvinceController.create);

export default routes;
