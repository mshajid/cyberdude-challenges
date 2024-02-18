import * as fs from "fs";

fs.writeFile(
  "HelloWorld.txt",
  `What's happening inside the Hello World text ${new Date()}`,
  (err) => {
    err ? console.log(err) : console.log("File is updating")
  }
);
