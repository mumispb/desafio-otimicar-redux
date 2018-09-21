const restful = require("node-restful");
const mongoose = restful.mongoose;

let Schema = mongoose.Schema;

const ownerSchema = new Schema(
    {
        fullName: { type: String },
        cpf: { type: String }, //ver sintaxe igual a 11 o front tb
        birthDate: { type: Date },
        email: { type: String }, //ver sintaxe pra validacao email no front
        phone: { type: String },
        plateNumber: { type: String },
        brand: { type: String },
        model: { type: String },
        color: { type: String },
        plateState: { type: String },
        manufYear: { type: Number },
        modelYear: { type: Number }
    } //ver sntaxe igual a 11 no front tb
    /*   cars: [{ type: Schema.Types.ObjectId, ref: "Car" }] */
);

module.exports = restful.model("Owner", ownerSchema);
