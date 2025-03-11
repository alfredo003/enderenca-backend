//import { AppDataSource } from "./database/data-source"
import express from "express"
import { AppDataSource } from "./database/data-source";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});


AppDataSource.initialize().then(async () => {
    app.listen(3000, () => {console.log("Server is running on port 3000")});
}).catch(error => console.log(error))
