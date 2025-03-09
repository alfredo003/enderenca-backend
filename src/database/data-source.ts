import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql", // Ou "postgres" dependendo do banco que você está usando
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "enderenca",
    synchronize: true, // Cuidado ao usar isso em produção
    logging: false,
    entities: ["../models/*.ts"], // Adicione suas entidades aqui
    migrations: ["./migrations/*.ts"], // Caminho para as migrações
})
