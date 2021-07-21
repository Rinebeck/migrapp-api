import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { errorRouter } from "./routes/error.js";
import { citiesRouter } from "./routes/cities.js";
import { usersRouter } from "./routes/users.js";

const api = express();

api.use(morgan("dev"));
api.use(express.json());
api.use(express.urlencoded({ extended: false }));
api.use(cookieParser());

api.use("/", errorRouter);
api.use("/cities", citiesRouter);
api.use("/users", usersRouter);

// catch 404 and forward to error handler
api.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.status(400);
  res.end(JSON.stringify({ message: "Endpoint not found" }));
});

// error handler
api.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // return error code
  res.setHeader("Content-Type", "application/json");
  res.status(500);
  res.end(
    JSON.stringify({ message: "The server could not process your request." })
  );
});

export default api;
