import express from "express";
import CityController from "../controllers/city.js";

const router = express.Router();

/* GET cities listing. */
router.get("/", CityController.list);

router.post(
  "/create/city_name/:city_name/country_id/:country_id",
  CityController.list
);

router.get("/find/:name", CityController.find);

router.get("/get/:id", CityController.get);

export { router as citiesRouter };
