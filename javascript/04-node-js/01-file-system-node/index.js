import * as fs from "fs";
import internsData from "./data/interns.json" assert { type: "json" };

const findIntern = internsData.find((value) => {
  return value.id === 1;
});

fs.writeFile("HelloWorld.txt", JSON.stringify(findIntern), (err) => {
    err ? console.log(err) : console.log("adding content")
})