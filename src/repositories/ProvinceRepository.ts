import { Repository } from "typeorm";
import { Province } from "../models/Province";
import { AppDataSource } from "../database/data-source";

export const ProvinceRepository:Repository<Province> =AppDataSource.getRepository(Province);