import City from "./../models/city.js";

const CityController = {
  create(req, res) {
    return City.create({
      city_name: req.params.city_name,
      country_id: req.params.country_id,
    })
      .then((city) => res.status(200).send(city))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return City.findAll()
      .then((city) => res.status(200).send(city))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return City.findAll({
      where: {
        city_name: req.params.name,
      },
    })
      .then((city) => res.status(200).send(city))
      .catch((error) => res.status(400).send(error));
  },

  get(req, res) {
    return City.findAll({
      where: {
        id: req.params.id,
      },
    })
      .then((city) => res.status(200).send(city))
      .catch((error) => res.status(400).send(error));
  },
};

export default CityController;
