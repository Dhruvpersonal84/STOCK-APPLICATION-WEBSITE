require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser")
const {HoldingModel,holdings} = require("./models/HoldingModel");
const {PositionModel,positions} = require("./models/PositionModel");
const {OdersModel} = require("./models/OdersModel");
const authRoute = require("./Auth/authRoute");
const app = express();

const PORT = process.env.PORT || 8552 ;
const URL = process.env.MONGO_URL ;

app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use("/api", authRoute);


app.listen(PORT,()=>{
    console.log("connected to port succesfully")
    mongoose.connect(URL)
    console.log("DB connected")
})

app.get("/",(req,res)=>{
    res.send("connected");
})

app.get("/allholdings",async(req,res)=>{
    let allholding = await HoldingModel.find({})
    res.json(allholding);
})

app.get("/allposition",async (req,res)=>{
    let allposition = await PositionModel.find({})
    res.json(allposition);
})

app.post("/newOrder", async (req, res) => {
  let newOrder = new OdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.get("/allorders",async (req,res)=>{
    let allorders = await OdersModel.find({})
    res.json(allorders);
})




/*app.get("/addholdings",(req,res)=>{
    holdings.forEach((item)=>{
        let newholdings = new HoldingModel({
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: item.price,
            net: item.net,
            day: item.day,
        })
        newholdings.save();
    })
    res.send("added");
})*/
/*app.get("/addposition",(req,res)=>{
    PositionModel.insertMany(positions)
    res.send("Done");
})*/