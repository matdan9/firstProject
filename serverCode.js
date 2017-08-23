var express = require ("express");
var bodyParser = require ("body-parser");
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var server = require("http");

var Code = require ("./public/js/check.js");
var answerConnection;
var answerCreation;

var firebase = require ("firebase")
var config = {
    apiKey: "AIzaSyDRPoIc0FVsCCp9ThCkFCr6ywpuA-4RFEw",
    authDomain: "loginpage-10812.firebaseapp.com",
    databaseURL: "https://loginpage-10812.firebaseio.com",
    projectId: "loginpage-10812",
    storageBucket: "loginpage-10812.appspot.com",
    messagingSenderId: "608993116980"
  };
firebase.initializeApp(config);
const auth = firebase.auth();
var database = firebase.database();
var ref = database.ref ("user");
var gridData = new Array;

var socket = require("socket.io");


app.set ("view engine", "ejs");
var server = app.listen(8000);
app.use ("/public/css", express.static (__dirname + "/public/css"));
app.use ("/public/js", express.static (__dirname + "/public/js"));
app.use ("/css", express.static (__dirname + "/public/css"));
app.use ("/styles", express.static(__dirname + "/styles"));
app.use ("/js", express.static (__dirname + "/public/js"));
app.use ("/js", express.static (__dirname + "/js"));
app.use ("/public/components", express.static (__dirname + "/public/components"));

var dataSend = false;
//set up socket.io
var io = socket(server);

//////////////////////////////////////////////////////////////////
app.get ("/Menue", function(req, res)
{
    res.sendFile (__dirname + "/Menue.html");
});

//////////////////////////////////////////////////////////////////
app.get ("/", function (req, res)
{
    res.sendFile (__dirname + "/Menue.html");
});

app.get ("/Creation", function(req, res)
{
    res.sendFile (__dirname + "/Creation.html");
});

console.log ("The server start!");



//////////////////////////////////////////////////////////////////

app.post("/log",urlencodedParser, function(req, res)
{
    promise = auth.signOut().then(function()
    {
        res.sendFile(__dirname + "/Menue.html");
    }, function(error)
    {
        console.log("logout error");
        res.render(__dirname + "/views/Log.ejs",{Gdata: nameUser, logError: error});
    });
});

app.post ("/", urlencodedParser ,function (req, res)
{
    var storedDataConnection = req.body;
    email = storedDataConnection.Username;
    pass = storedDataConnection.Password;
    
    promise = auth.signInWithEmailAndPassword (email, pass).catch (function(error)
    {
        errorMessage = error.message;
        errorCode = error.code;

        
        // make better error message
        if (errorCode == "auth/invalid-email")
            {
                res.render (__dirname + "/views/menue.ejs", {answer: errorMessage});
            }
        if (errorCode == "auth/user-disabled")
            {
                res.render (__dirname + "/views/menue.ejs", {answer: errorMessage});
            }
        if (errorCode == "auth/user-not-found")
            {
                res.render (__dirname + "/views/menue.ejs", {answer: errorMessage});
            }
        if (errorCode == "auth/wrong-password")
            {
                res.render (__dirname + "/views/menue.ejs", {answer: errorMessage});
            }
    });
    promise.then (function(result)
    {   
        ref.once ("value", gotData, errorData);

        var errorData = function(error)
        {
            console.log ("there is an error " + error);
        };
            function gotData (data)
            {
                var cp;
                var c;
                var users = data.val();
                var keys = Object.keys (users);
                var b = keys.length + 1;
                var nameUser;
                gridData = [];
                for (i = 0; i < keys.length; i++)
                    {
                        
                        var userConnect = function()
                        {
                            for(k = 0; k < keys.length; k++)
                                {
                                    
                                    var a = keys[k];
                                     c = users[a].connectionPoints + 1;
                                    

                                    if (users[a].email === email)
                                        {
                                            cp = firebase.database().ref().child("/user/" + a);
                                            cp.update({"connectionPoints": c});   //solve by: https://stackoverflow.com/questions/31906323/firebase-update-causing-nodejs-server-to-crash-cant-set-headers-after-they-a/38735270
                                            nameUser = users[a].username;
                                            break;
                                        }
                                }
                        }
                        userConnect();
                                var w = keys.length - 1;
                                var a = keys[i];
                                gridData.push (users[a]);
                                
                                if (i == w)
                                    {
                                        io.on("connection", function(socket)
                                        {
                                            socket.emit("gridD",
                                            {
                                                dataG: gridData
                                            });
                                        });
                                        console.log("we have send the data");
                                        res.render (__dirname + "/views/Log.ejs", {Gdata: nameUser, logError:" "});       
                                    }
                    }   
            }
    });
      
});


/////////////////////////////////////////////////////////////////////
app.post ("/Creation", urlencodedParser, function (req, res)
{
    var dataCreation = req.body;
    
    
    if (dataCreation.emailCreation === dataCreation.validateEmailCreation & dataCreation.usernameCreation === dataCreation.validateUsernameCreation & dataCreation.passwordCreation === dataCreation.validatePasswordCreation)
    {
            
        email = dataCreation.emailCreation;
        pass = dataCreation.passwordCreation;
        console.log (email);
            
        promise = firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error)
        {
            errorCode = error.code;
            errorMessage = error.message;
            if (errorMessage == "auth/weak-password")
            {
                res.render (__dirname + "/views/errorCreation.ejs", {answerC: errorMessage});
                console.log (errorMessage);
                console.log ("auth/weak-password");
            }
            if (errorMessage == "auth/invalid-email")
            {
                res.render (__dirname + "/views/errorCreation.ejs", {answerC: errorMessage});
                console.log (errorMessage);
                console.log ("auth/invalid-email");
            }
            if (errorMessage == "auth/email-already-in-use")
            {
                res.render (__dirname + "/views/errorCreation.ejs", {answerC: errorMessage});
                console.log (errorMessage);
                console.log ("auth/email-already-in-use");
            }
            if (errorMessage == "auth/operation-not-allowed")
            {
                res.render (__dirname + "/views/errorCreation.ejs", {answerC: errorMessage});
                console.log (errorMessage);
                console.log ("auth/operation-not-allowed");
            }
            else
            {
                res.render (__dirname + "/views/errorCreation.ejs", {answerC: errorMessage});
                console.log (errorMessage);
                console.log ("need at least 6 characters");
            }   
        });
        promise.then (function (result)
        {
             var data = 
            {
                username: dataCreation.usernameCreation,
                email: dataCreation.emailCreation,
                connectionPoints: 0
            };
            console.log (data);
            ref.push (data);
            res.render (__dirname + "/views/creation.ejs");
        });
    }
    else
    {
        res.render (__dirname + "/views/errorCreation.ejs", {answerC: "One or many of your validate version are wrong!"});
    }
});