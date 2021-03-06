import express from "express";

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.end(JSON.stringify({ message: 'Retrieved list of users' }));
});

export { router as usersRouter };
