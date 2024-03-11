const http = require("http");


const server = http.createServer((req,res)=>{
    // console.log(req.url);

    if(req.url=="/")
    {
        res.end("Hello from home side");
    }
    else if(req.url=="/about")
    {
        res.end("Hello from About side");
    }
   

});

server.listen(8000, "127.0.0.1",()=>{
    console.log("listen to the port 8000");
})