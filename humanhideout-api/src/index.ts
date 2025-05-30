import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ status: "API is running successfully!" });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
