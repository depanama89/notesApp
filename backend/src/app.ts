import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import notesRoutes from "./routes/routes";
import NoteModel from "./models/notes";
import createHttpError, { isHttpError } from "http-errors";
import categoriesRoutes from "./routes/categories";
import cors from "cors";
const app = express();

const allowedOrigins = ['http://localhost:3000'];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Origine non autorisée par CORS'));
    }
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions))
app.use(express.json());


app.use("/api/categories",categoriesRoutes)
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
