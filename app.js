var app = {};
var apiLib = require("./lib/api");
var fs = require("fs");

app.config = {
  height: process.argv[2],
  weight: process.argv[3],
};
app.init = () => {
  const response = apiLib.getAPI(app.config.height, app.config.weight);
};
app.init();
