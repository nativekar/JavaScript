const csvFilePath = "../restaurants.csv";
const csv = require("csvtojson");
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
  });

// Async / await usage
const jsonArray = csv().fromFile(csvFilePath);
