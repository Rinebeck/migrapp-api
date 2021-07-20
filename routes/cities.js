import express from "express";

const router = express.Router();
/* GET cities list */
router.get("/", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ "status-code": 200 }));
});

export { router as indexRouter };