import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import feedbackRoutes from "./routes/feedback.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import analyticsRoutes from "./routes/analytics.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Feedback API Running",
  });
});

app.use("/api/feedback",feedbackRoutes);
app.use("/api/analytics", analyticsRoutes);
// Global Error Middleware (Always Last)
app.use(errorHandler);

export default app;