const http = require("http");
const fs = require("fs");
const requests = require('requests');

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) =>{

    // I Get the value in Kelvin so it convert in to Kelvin to Celsius 

    // let temp_min_kelvin = orgVal.main.temp_min;
    // let temp_min_celsius = temp_min_kelvin - 273.15;

  let temperature =  tempVal.replace("{% tempval %}",(orgVal.main.temp - 273.15).toFixed(2));
  temperature = temperature.replace("{% tempmin %}", (orgVal.main.temp_min - 273.15).toFixed(2));
  temperature =  temperature.replace("{% tempmax %}",(orgVal.main.temp_max-273.15).toFixed(2));
  temperature =  temperature.replace("{% location %}",orgVal.name);
  temperature =  temperature.replace("{% country %}",orgVal.sys.country);
  temperature =  temperature.replace("{% tempstatus %}",orgVal.weather[0].main);

  return temperature;
}
const server = http.createServer((req, res) =>{
  
    if(req.url = "/"){
       
        requests("https://api.openweathermap.org/data/2.5/weather?q=patna&appid=7abbf5cf95d7042bf22e4199307fc899")
        .on("data",(chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            // console.log(arrData[0].main.temp);
            const realTimeData = arrData
               .map((val) => replaceVal(homeFile, val))
               .join("");
                res.write(realTimeData);
            

        })
        .on("end", (err) => {
            if(err) return console.log("connection closed due to errors", err);
            res.end();
        });

    }


})

server.listen(8000, "127.0.0.1",()=>{
    console.log("listen to the port 8000");
})