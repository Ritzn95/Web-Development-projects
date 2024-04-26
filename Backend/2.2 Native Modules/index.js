const fs = require("fs");

// fs.writeFile("Message.txt", "Welcome to NodeJS", (err) => {
//     if(err) throw err;
//     console.log("The File has been saved!");
// });

fs.readFile('./Message.txt', "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 