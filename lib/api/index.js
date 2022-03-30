const axios = require("axios");
var fs = require("fs");
var api = {};

api.getAPI = (height, weight) => {
  const options = {
    method: "GET",
    url: "https://body-mass-index-bmi-calculator.p.rapidapi.com/metric",
    params: { weight: `${weight}`, height: `${height}` },
    headers: {
      "X-RapidAPI-Host": "body-mass-index-bmi-calculator.p.rapidapi.com",
      "X-RapidAPI-Key": "87cd0412d2msh09018f4c8886585p19026cjsn805829dfedc5",
    },
  };
  return axios
    .request(options)
    .then(function (response) {
      const bmi = Math.floor(response.data.bmi);
      console.log(
        `Your height is ${response.data.height} meters.\nYour weight is ${response.data.weight} Kgs.\nYour BMI is: ${bmi}.`
      );
      fs.appendFile(
        __dirname + "/logs/log.txt",
        new Date() +
          "=> " +
          "Height: " +
          height +
          " Weight: " +
          weight +
          " and BMI: " +
          bmi +
          "\r\n",
        function (err) {
          if (err) console.log("error", err);
          console.log("File Updated!");
        }
      );
    })
    .catch(function (error) {
      console.error(error);
    });
};
module.exports = api;
