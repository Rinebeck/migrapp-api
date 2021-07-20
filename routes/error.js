import express from "express";

const router = express.Router();

/* Handles error responses */
router.get("/", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.status(400);
  res.end(
    JSON.stringify({
      message: "Bad request. Please specify a request route.",
    })
  );
});

export { router as errorRouter };
