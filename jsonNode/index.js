const fs = require("fs");

const biodata = {
    name : "Niraj",
    age: "22",
    channel: "thappa technical"
};

// console.log(biodata.name);
// console.log(biodata.age);


// JSON.stringify :- It is use to convert object into  json
// const jsonData = JSON.stringify(biodata);

// console.log(jsonData);

// JSON.parse :- It is use to convert json  into  object
// const objData = JSON.parse(jsonData);
// console.log(objData);


// ++++++++++++

const jsonData = JSON.stringify(biodata);

// fs.writeFile("json1.json", jsonData,(err)=>{
   
//     console.log(err);
//     console.log("file created");
// })

fs.readFile("json1.json","utf8",(err,data)=>{
    // console.log(data);
    const originData = JSON.parse(data);
    console.log(originData);
})