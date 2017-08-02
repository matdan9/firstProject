// Variables from other codes
//var Code = require("./serverCode");

//MENUE
    //var RealUsernameNB = "MyNameIsTest";
var EnterPassWord = "nothing";
var EnterUserName = "nothing";
    //var PasswordTest = false;
    //var TargettingPassWord;
    //var PassWordSave = ["haha"];
    //var UserNameSave = ["coucou"];
var passwordAnswer;

// MENUE & CREATION
    //var AccountID = 0;
    //var NextAccountID = 1;
    //var AccountIDTotal = 0;

//CREATION
var EnterPassWordCreation;
var EnterPassWordCreationValidate;
var EnterUserNameCreation;
var EnterUserNameCreationValidate;
var EnterEmailCreation;
var EnterEmailCreationValidate;
    //var creationAnswer;

(function AccountCreation ()
{
    
    EnterUserNameCreation = document.getElementById ("UserNameCreation").value;
    EnterUserNameCreationValidate = document.getElementById ("UserNameCreationValidate").value;
    EnterPassWordCreation = document.getElementById ("PassWordCreation").value;
    EnterPassWordCreationValidate = document.getElementById ("PassWordCreationValidate").value;
    
    if (EnterUserNameCreation === EnterUserNameCreationValidate & EnterPassWordCreation === EnterPassWordCreationValidate)
        {
        
            // cré une variable pour savoir si la loop tourne
            var isTheLoopOn = true;

            // setter nos variavles par défaux avant le test
            isTheLoopOn = true;
            AccountID = 0;

            // la loop s'active si le variable isThLoopOn est = true pour commencer les test
            while (isTheLoopOn === true) 
            {
                // test si le username du premier compte soi quand AccountID = 0 est = au username entrer par l'utilisateur
                if (UserNameSave [AccountID] === EnterUserNameCreation)
                {
                    // si les condition sont remplit la loop est fermer et annonce que le username est déja utiliser
                    alert ("this user name is alreadu use");
                    isTheLoopOn = false;
                    console.log ("Retard alert");
                    break;
                }    
                
              // test si le username du premier compte soi quand AccountID = 0 est !== au username entrer par l'utilisateur et si le AccountID est == au AccountIDTotal pour tester si toue les username déjà existant on déja passer le test
                if (UserNameSave [AccountID] !== EnterUserNameCreation & AccountID === AccountIDTotal)
                {
                    // si les conditions son accepter, il entre les donnés entrer par l'utilisateur dans ses saves, il remet ses variables par défaut et ferme la boucle
                    UserNameSave[NextAccountID] = EnterUserNameCreation;
                    PassWordSave[NextAccountID] = PassWordCreation;
        
                    AccountID = 0;
                    NextAccountID ++;
                    AccountIDTotal ++;
                    isTheLoopOn = false;
                    
                    console.log (UserNameSave);
                    
                    document.location.href ="file:///C:/Users/Poste/Documents/ProjetFinalDuStage/script/html/Menue.html";
                    
                    break; 
                }
                
                // si aucune des autre condition son rempli
                else 
                {
                    // il set le AccountID soit le prochain username que l'on vas tester
                    AccountID ++;
                    console.log ("Testing a new array index");
                }

            }       
        }
        
    else
    {
        creationAnswer = document.getElementsByClassName ("CreationAnswer");
        creationAnswer[0].innerText = "Your password or your username is not the same as is validate version";
    }
});






enterMenue = function ()
{
    
    // module.exports doit etre seulement utiliser avec le node js soit le serveur
    EnterUserName = document.getElementById("UsernameInput").value;
    EnterPassWord = document.getElementById ("PasswordInput").value;
};


/*
enterCreation = function()
{
    module.exports.EnterUserNameCreation = document.getElementById ("UserNameCreation").value;
    module.exports.EnterUserNameCreationValidate = document.getElementById ("UserNameCreationValidate").value;
    module.exports.EnterPassWordCreation = document.getElementById ("PassWordCreation").value;
    module.exports.EnterPassWordCreationValidate = document.getElementById ("PassWordCreationValidate").value;
}
*/

var menueButton = document.getElementById("button");

menueButton.onclick = function() 
{
    Code.menuePasswordCheck ();
}



// pas 2 fois le meme username (créer une loop qui test pour chauqe iD si le user name est égale et à la fin de 
//chaue loop on fait ++ à l'ID que l'on test et se jusqu'a ce que tout les ID on passé au test)
// garder les saves
// add a age limit

//template (it is like html but worl to load the request things like in a shop website)

//database (mango)

//web application ex(node.js)

// iffe  Immediately-Invoked Function Expression (function nomDeLaFunction() 
/////////////////////////////////////////////////{"code"} ())

// object can use methode and propreties

/*Really, you need to back up and read some of the links posted above. But as a quick example:

var house = {} ;
house.isDoorOpen = false ;
house.openDoor = function(){
    house.isDoorOpen = true ;
}
Here house is the object. It has a property: house.isDoorOpen. Here, it is more like an adjective. 
Either the door is open (true) or closed (false). As it sounds, it describes a property of the house.
Also, it has a method openDoor (which is used like this: house.openDoor() ). That's something that it can do. 
In this case, the action openDoor affects the isDoorOpen property, making it true. */

//McGill ici a Montreal
//Ontario a Waterloo
//var Code = require("./backCode");
// module.exportes.LENOM = NOMvARIABLE;