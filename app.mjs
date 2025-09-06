import express from "express";
import questionRoute from "./routes/questionRoute.mjs";
import answerRoute from "./routes/answerRoute.mjs";

const app = express();
const port = 4000;

app.use(express.json());
app.use("/questions", questionRoute);
app.use("/answers", answerRoute);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});