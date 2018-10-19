const request = require("request");

const tmdb = {
  api_key: "&api_key=",
  base_uri: "http://api.themoviedb.org/3"
};

const uri =
  "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22";

function getData() {
  return new Promise((resolve, reject) => {
    request(tmdb.base_uri + uri + tmdb.api_key, (error, response, body) => {
      let results = JSON.parse(body).results[0];
      resolve([results]);
    });
  });
}

function resultsAreLoaded(results) {
  return Promise.resolve(results);
}

function doingCalculations(results) {
  console.log("Doing calculations..");
  return Promise.resolve(results);
}

function writingToFile(results) {
  return new Promise((resolve, reject) => {
    request(tmdb.base_uri + uri + tmdb.api_key, (error, response, body) => {
      let result = JSON.parse(body).results[1];
      results.push(result);
      resolve(results);
    });
  });
}

function readAll(results) {
    console.log(results);
    return Promise.resolve();
}

getData()
  .then(resultsAreLoaded)
  .then(doingCalculations)
  .then(writingToFile)
  .then(readAll)
  .catch(err => {
    console.log(err);
  });
