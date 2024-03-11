const EventEmitter = require("events");

const event = new EventEmitter();

event.on("SayMyName",()=>{
   console.log("My name is Tulika");
});

event.on("SayMyName",()=>{
    console.log("My name is Niraj");
 });

 event.on("SayMyName",()=>{
    console.log("My name is Satya");
 });

 event.on("SayMyName",()=>{
    console.log("My name is Tulika sen");
 });



event.emit("SayMyName"); // event.emit se ham SayMyName ka ham event banae

// event.emit :- event call (In nodeJs me ek event se multiple function ko call kara sakte hai);