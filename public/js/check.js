var connectionAnswer;
var connectionTest;
var creationAnswer;
var creationTest;
var test = "lo";


module.exports.checkCreation = function (email, emailValidate, username, usernameValidate, password, passwordValidate)
{
    while (email === emailValidate & username === usernameValidate & password === passwordValidate)
        {
            if (password.length < 6)
            {
                exports.creationAnswer = "username need at least 6 Characters";
                exports.creationAnswer = false;
                console.log ("if");
                break;
            }
            else
            {
                exports.creationTest = true;
                console.log ("else");
                break;
            }
        }
};

module.exports.checkConnection = function(email, username, password)
{

};




/*
var passwordSave = ["haha"];
var usernameSave = ["coucou"];
var passwordCheck;
var create = false;
var maxAccountID = 0;
var nextAccountID = 1;

module.exports.checkConnection = function (username, password)
{
    console.log ("Making a password test");

    accountId = usernameSave.indexOf (username);
    var wantedPassword = passwordSave [accountId];

    console.log (accountId);
    console.log ("password we want " + wantedPassword);
    console.log ("password he got " + password);
    console.log (passwordCheck);

    if (wantedPassword === password)
    {
        exports.passwordCheck = true;
        console.log (passwordCheck);

    }
    else
    {
        exports.passwordCheck = false;
        console.log (passwordCheck);
    }
};



////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports.checkCreation = function (usernameCreation, usernameCreationValidate, passwordCreation, passwordCreationValidate)
{
    create = false;
    accountID = 0;
    console.log (usernameSave [accountID])
    console.log (usernameCreation);
    
    while (usernameCreation === usernameCreationValidate & passwordCreation === passwordCreationValidate)
    {
        if (usernameCreation == usernameSave [accountID])
        {
            exports.create = false;
            console.log ("create = false");
            break;
        }
        else if (accountID == maxAccountID)
        {
            nextAccountID ++;
            maxAccountID ++;
            accountID = 0;
            
            usernameSave.push (usernameCreation);
            passwordSave.push (passwordCreation);
            
            exports.create = true;
            console.log ("create = true");
            break;
        }
        else
        {
            accountID ++;
            console.log ("onde loop");
            continue;
        }
    }
};
*/