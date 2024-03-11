const fs = require("fs");
// fs.writeFileSync("read.txt","welcome to my chanel");

// fs.writeFileSync:- This is create a new file and if file is exit then only add the text else create file and add the text
// fs.writeFileSync("hello.txt","welcome how are you");

//  fs.appendFileSync :- This is use to add the data in hello.text file
// fs.appendFileSync("hello.txt", "\nI love  you ");


// Node js add addition data type called Buffer , Buffer is store binary data, while reading from file
// const buff_data = fs.readFileSync('hello.txt')
// console.log(buff_data)

// let org_data = buff_data.toString();
// console.log(org_data);

// To rename the file

fs.renameSync("hello.txt", "readWrite.txt");

