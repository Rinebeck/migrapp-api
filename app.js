import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { errorRouter } from "./routes/error.js";
import { citiesRouter } from "./routes/cities.js";
import { usersRouter } from "./routes/users.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", errorRouter);
app.use("/cities", citiesRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ "status-code": 404 }));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // return error code
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ "status-code": 404 }));
});

export default app;
