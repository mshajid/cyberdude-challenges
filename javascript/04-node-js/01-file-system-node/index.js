import * as fs from "fs";

fs.mkdir('newFolder',(err) => {
    err ? console.log(err) : console.log("folder created")
})

fs.writeFile(
  "HelloWorld.txt",
  `What's happening inside the Hello World text ${new Date()}`,
  (err) => {
    err ? console.log(err) : console.log("File is updating");
  }
);
