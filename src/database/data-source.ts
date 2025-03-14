import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "enderenca",
    logging: false,
    entities: ["./src/models/*.ts"],
    migrations: ["./src/database/migrations/*.ts"],
})
