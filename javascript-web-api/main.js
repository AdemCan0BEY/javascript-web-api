var express = require("express") // kurduğumuz express modülünü dahil ediyoruz
var app = express()
app.get('/', function (req, resp) { // get methodumuzu ekliyoruz
    var response = { message:"Merhaba Dünya" } //geriye döndürülecek modelimizi oluşturuyoruz
    resp.json(response); //json formatında döndürüyoruz
})
app.get('/hakkimda', function (req, resp) { 
    var response = { message:"Hakkimda" } 
    resp.json(response); 
})
//aşağıdaki kod ile  "http://localhost:1881" üzerinden web apimizi çalıştırıyoruz
//Dipnot: 1881 Atatürk'ün Doğum Tarihi 
app.listen("1881", () => console.log("localhost çalıştırıldı Port: 1881"))