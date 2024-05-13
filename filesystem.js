const fs = require("node:fs");

const content = "Hello node.";

const oldFilePath = "Welcome.txt";
const newFilePath = "hello.txt";

fs.writeFile(oldFilePath, content, (err) => {
  if (err) {
    console.error(`Got an error trying to write the file: ${err.message}`);
  } else {
    console.log("File has been created successfully!");

    fs.rename(oldFilePath, newFilePath, (err) => {
      if (err) {
        console.error(
          `Got an error trying to rename the folder: ${err.message}`
        );
      } else {
        console.log("Folder has been renamed successfully!");

        fs.readFile("hello.txt", "utf8", (err, data) => {
          if (err) {
            console.error("error reading the data", err);
            return;
          }
          console.log(data);
        });
      }
    });
  }
});
