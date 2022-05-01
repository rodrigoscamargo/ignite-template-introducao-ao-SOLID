import express from "express";

import { swaggerRoutes } from "./routes/swagger.routes";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/api-docs", swaggerRoutes);

export { app };
