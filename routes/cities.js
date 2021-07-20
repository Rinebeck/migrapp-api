import express from "express";

const router = express.Router();

/* GET cities listing. */
router.get("/", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.end(JSON.stringify({ message: "Retrieved list of clients" }));
});

export { router as citiesRouter };
