import express from "express"
import { AppDataSource } from "./database/data-source";
import routes from "./routes";

const app = express();

app.use("/api",routes);

AppDataSource.initialize().then(async () => {
    app.listen(3000, () => {console.log("Server is running on port 3000")});
}).catch(error => console.log(error))
