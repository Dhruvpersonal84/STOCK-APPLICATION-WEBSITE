const { Schema } = require("mongoose");

const HoldingSchema = new Schema({
    name:String,
    qty:String,
    avg:Number,
    price:Number,
    net:String,
    day:String
});


module.exports = {HoldingSchema};

