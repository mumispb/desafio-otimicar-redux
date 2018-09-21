/* const Car = require('./car');

const searchByName = (req, res, next) => {
    const urlParameter = req.params.name;
    // Find the objet by name
    Car.find({'name' : urlParameter}, (err, car) => {
        if (err) {
            return handleError(err);
        } else {
            res.json(car);
        }
    });
};

module.exports = { searchByName } */
