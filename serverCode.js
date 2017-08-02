var express = require ("express");
var bodyParser = require ("body-parser");
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

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

app.set ("view engine", "ejs");
app.listen(8000);
app.use ("/public/css", express.static (__dirname + "/public/css"));
app.use ("/public/js", express.static (__dirname + "/public/js"));
app.use ("/Menue", express.static(__dirname));
app.use ("/css", express.static (__dirname + "/public/css"));
var lo = "coucou";


//////////////////////////////////////////////////////////////////
app.get ("/Menue", function(req, res)
{
    res.render (__dirname + "/views/errorCreation.ejs", {answerC: lo});
});

//////////////////////////////////////////////////////////////////
app.get ("/", function (req, res)
{
    res.render (__dirname + "/views/errorCreation.ejs", {answerC: lo});//res.sendFile (__dirname + "/Menue.html");
    
});

app.get ("/Creation", function(req, res)
{
    res.sendFile (__dirname + "/Creation.html");
});

console.log ("The server start!");



//////////////////////////////////////////////////////////////////

app.post ("/", urlencodedParser ,function (req, res)
{
    var storedDataConnection = req.body;
    
    
    Code.checkConnection (storedDataConnection.Username, storedDataConnection.Password);

    console.log (storedDataConnection);
    console.log ("this is the username from the server = " + storedDataConnection.Username);
    console.log ("This is the passwordCheck from the server before the test " + Code.passwordCheck);
    
    if (Code.passwordCheck === true)
    {
        console.log ("if");
        console.log (Code.passwordCheck);

        res.sendFile (__dirname + "/Log.html");
    }
    else
    {
        answerConnection = "Wrong password or username!";

        console.log (Code.passwordCheck);
        console.log ("else");

        res.render (__dirname + "/views/menue", {answer: answerConnection});
    }
    
    
});


/////////////////////////////////////////////////////////////////////
app.post ("/Creation", urlencodedParser, function (req, res)
{
    var dataCreation = req.body;
    
    
    if (dataCreation.emailCreation === dataCreation.validateEmailCreation & dataCreation.usernameCreation === dataCreation.validateUsernameCreation & dataCreation.passwordCreation === dataCreation.validatePasswordCreation)
        {
            email = dataCreation.emailCreation;
            pass = dataCreation.passwordCreation;
            
            var promise = auth.createUserWithEmailAndPassword (email, pass);
            promise.catch (function (error) // essaye un .then aulieu d,un .catch 
            {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorMessage == "auth/weak-password")
                {
                    res.render (__dirname + "/views/errorCreation.ejs", {answerC: lo});
                }
                else if (errorMessage == "auth/invalid-email")
                {
                    res.render (__dirname + "/views/errorCreation.ejs", {answerC: lo});
                }
                else if (errorMessage == "auth/email-already-in-use")
                {
                    res.render (__dirname + "/views/errorCreation.ejs", {answerC: lo});
                }
                 else if (errorMessage == "auth/operation-not-allowed")
                {
                    res.render (__dirname + "/views/errorCreation.ejs", {answerC: lo});
                }
                else
                {
                    res.render (__dirname + "/views/errorCreation.ejs", {answerC: lo});
                }
            
            
            });
            promise.then (function (result)
            {
                res.render (__dirname + "/views/creation.ejs");
            });
        }   
    
    
    
    
    
    
    
    /*
    Code.checkCreation(dataCreation.emailCreation, dataCreation.validateEmailCreation, dataCreation.usernameCreation, 
        dataCreation.validateUsernameCreation, dataCreation.passwordCreation, dataCreation.validatePasswordCreation);

        console.log ("the crationAnswer = " + Code.creationTest);
        
        if (Code.creationTest === true)
            {
                user = dataCreation.usernameCreation;
                email =  dataCreation.emailCreation;
                pass = dataCreation.passwordCreation;
                console.log ("email: " + email + "/ password: "+ pass);
                
                auth.createUserWithEmailAndPassword (email, pass);
                res.render (__dirname + "/views/creation.ejs");
                console.log ("create account!");

            }
        else
            {
                console.log ("account not created");
                errorMessage = error.message;
                res.render (__dirname + "/views/errorCration.ejs", {answerC: errorMessage});
            }
    
    
    
  
            


    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var dataCreation = req.body;

    Code.checkCreation (dataCreation.usernameCreation, dataCreation.validateUsernameCreation, 
    dataCreation.passwordCreation, dataCreation.validatePasswordCreation)

    if (Code.create === true)
    {
        res.render (__dirname + "/views/creation.ejs");
    }
    else 
    {
        answerCreation = "This username is already use!";
        res.render (__dirname + "/views/errorCreation.ejs", {answerC: answerCreation});
    }
    */
});

/////////////////////////////////////////////////////////////////////
// esj firebase express body-parser

/*
var Player1 = new object;

Player1.race = "elf";

if (Player1.race === "elf")
    {
        Player1.Speed = 50;
    }
*/