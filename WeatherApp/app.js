const express = require("express");
const https = require("https");
const bodyParser= require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: true}))

app.get("/", function (req, res) {
 res.sendFile(__dirname + "/index.html");

app.post("/",function(req,res){
  //This req from client to our server with get
const quary=req.body.cityName;
const unit="metric";
const keyId="8a4a3f25da07ba920bb87b9718ffeb62";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid="+ keyId +"&q="+ quary+"&units="+ unit +"";

  https.get(url, function (resp) {
    //This req from our server to weather server to feitch data in the client side with get
    console.log(resp.statusCode);

    resp.on("data", function (data) {
      //This on method to read the data fron url
      const weatherData = JSON.parse(data);
      const weatherDes = weatherData.weather[0].description;
      const windspeed = weatherData.wind.speed;
      const icon=weatherData.weather[0].icon;
      const imgURL="http://openweathermap.org/img/wn/"+ icon +"@2x.png"

      res.write(" <p> the wind speed today is " + windspeed +"</p>");
      res.write(" <h1>the weather description today is "+ weatherDes + "</h1>");
      res.write("<img src="+ imgURL+">")
      res.send();
    });
  });
});

 })


app.listen(3000, function () {
  console.log("server is running on 3000 ouii");
});
