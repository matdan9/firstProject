var express = require ("express");

var app = express();

app.listen(8080);

app.get ("/", function (req, res)
{
    res.sendFile (__dirname + "/html/Menue.html");
});