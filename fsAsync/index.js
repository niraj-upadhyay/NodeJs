const fs = require("fs");
// fs.writeFile("read.txt","Today is Friday",(err)=>{

// console.log("File is created");
//   console.log(err);
// });

// fs.appendFile("read.txt","\n I love my India",(err)=>{

    
// console.log("Added Sucessfully");
// console.log(err);

// });

fs.readFile("read.txt", "utf-8",(err, data)=>{

    console.log(err);
    console.log(data);
})
        