import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import notesRoutes from "./routes/routes";
import NoteModel from "./models/notes";
import createHttpError, { isHttpError } from "http-errors";

const app = express();

app.use(express.json());

app.use("/api/notes",notesRoutes );
// app.use("/api/notes",notesRoutes)

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  res.status(statusCode).json({error:errorMessage})
});

export default app;
