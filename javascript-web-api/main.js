var express = require("express") // we include the express module we installed
var app = express()
app.get('/', function (req, resp) { // We add our get method
    var response = { message:"Hello, world" } //We create our model to be reverted
    resp.json(response); //We return in json format
})
app.get('/about', function (req, resp) { 
    var response = { message:"About" } 
    resp.json(response); 
})
//with the code below  "http://localhost:1881" We run our web ap via
//Dipnot: 1881 Atatürk'ün Date of birth 
app.listen("1881", () => console.log("localhost executed Port: 1881"))
