import * as fs from "fs";
import internsData from "./data/interns.json" assert {type: 'json'}

console.log(internsData);

// This is to create a directory or folder. 

fs.mkdir("newFolder", (err) => {
  err ? console.log(err) : console.log("folder created");
});

// This is to write a file inside a directory

fs.writeFile("newFolder/Hello.txt", "This is inside the folder", (err) => {
  err ? console.log(err) : console.log("file is created");
});


// This is to write a file normally on the root itself
fs.writeFile(
  "HelloWorld.txt",
  `What's happening inside the Hello World text ${new Date()}`,
  (err) => {
    err ? console.log(err) : console.log("File is updating");
  }
);
