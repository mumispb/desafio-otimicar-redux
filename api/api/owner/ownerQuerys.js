/* const Owner = require("./owner");
const Car = require("../car/car");

const ownersWithCars = (req, res, next) => {
  const urlParameter = req.params.name;
  // Find the objet by name
  Owner.find({ name: urlParameter }, (err, Owner) => {
    if (err) {
      return handleError(err);
    } else {
      res.json(owner);
    }
  });
};

const ownerWithCar = (req, res, next) => {
  var car = {
    plate_number: req.body.car.plate_number,
    brand: req.body.car.brand,
    model: req.body.car.model,
    color: req.body.car.color,
    state: req.body.car.state,
    manufacturing_year: req.body.car.manufacturing_year,
    model_year: req.body.car.model_year
  };

  var carData = new Car(car);
  carData.save().then(function(resp, err) {
    var owner = {
      name: req.body.name,
      cpf: req.body.cpf,
      birth_date: req.body.birth_date,
      email: req.body.email,
      phone: req.body.phone,
      cars: [resp._id]
    };

    if (err) {
      return handleError(err);
    }
    var data = new Owner(owner);
    data.save().then((resp2, err2) => {
      if (err) {
        return handleError(err2);
      } else {
        res.json(resp2);
      }
    });
  });
};

module.exports = { ownerWithCar };
 */
