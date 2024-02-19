import * as fs from "fs";
import popPlaces from "./data/popularPlaces.json" assert { type: "json" };

// Task 1

fs.mkdir("Location", (err) => {
  err && console.log(err);
});

popPlaces.map((place) => {
  fs.mkdir(`Location/${place.city}`, (err) => {
    err ? console.log(err) : "file is working";
    place.places.map((city) => {
      fs.writeFile(
        `Location/${place.city}/${city.placeName}.txt`,
        `${city.placeDesc}`,
        (err) => {
          err && console.log(err);
        }
      );
    });
  });
});

// Thanks to Yogha XD
