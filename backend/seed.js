const mongoose = require('mongoose');

const DashPlayer = require('./models/dashPlayers.model');


mongoose.connect('mongodb://localhost:27017/cdPlay', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Mongo connection open")
    })
    .catch(err=>{
        console.log("Error")
        console.log(err)
    })

const seedProducts = [
    {
      pid: 234675,
      name: "Ravindra Jadeja"
    },
    {
      pid: 398439,
      name: "Karun Nair"
    },
    {
      pid: 26421,
      name: "Ravichandran Ashwin"
    },
    {
      pid: 253802,
      name: "Virat Kohli"
    },
    {
      pid: 28763,
      name: "Gautam Gambhir"
    }
  ]

  DashPlayer.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })