const { model } = require("mongoose");

const { OdersSchema } = require("../schema/OdersSchema");

const OdersModel = new model("order", OdersSchema);

module.exports = { OdersModel };