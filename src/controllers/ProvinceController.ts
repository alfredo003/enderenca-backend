import { Province } from "../models/Province";
import { ProvinceRepository } from "../repositories/ProvinceRepository";

export class ProvinceController {

  static async create(req, res):Promise<Province> {
    const {name} = req.body;
    if (!name) {
      return res.status(400).json({message: "Name is required"});
    }

    const lastProvince = await ProvinceRepository.findOne({ order: { cod: 'DESC' } });
    const newCod = lastProvince ? lastProvince.cod + 1 : 1;

    const pronvice = ProvinceRepository.create({
        name,
        cod: newCod,
    });
    const provinceSave = await ProvinceRepository.save(pronvice);
    if(!provinceSave) {
      return res.status(400).json({message: "Error to save pronvice"});
    }
    return res.status(201).json(provinceSave);
  }
}