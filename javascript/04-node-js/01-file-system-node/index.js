import { error } from "console";
import * as fs from "fs";

fs.writeFile(
  "HelloWorld.txt",
  "What's happening inside the Hello World text",
  (err) => {
    console.log("writing the file");
  }
);
