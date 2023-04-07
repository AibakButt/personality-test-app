import express, { Application } from "express";
import QuestionRoutes from "../src/routes/question.route";

const CORS = require("cors")

const app: Application = express();

app.use(CORS())

app.use("/api/questions", QuestionRoutes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});