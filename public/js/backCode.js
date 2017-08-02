//variables from other codes
var Code = require("./Code");


//MENUE
var RealUsernameNB = "MyNameIsTest";
var EnterPassWord = "nothing";
var EnterUserName = "nothing";
var PasswordTest = false;
var TargettingPassWord;
var PassWordSave = ["haha"];
var UserNameSave = ["coucou"];
var passwordAnswer;

// MENUE & CREATION
var AccountID = 0;
var NextAccountID = 1;
var AccountIDTotal = 0;

//CREATION
var EnterPassWordCreation;
var EnterPassWordCreationValidate;
var EnterUserNameCreation;
var EnterUserNameCreationValidate;
var EnterEmailCreation;
var EnterEmailCreationValidate;
var creationAnswer;

PasswordTestFunction = function()
{
    
    console.log = ("PASSWORDTEST");
    //GET THE DATA OF THE HTML INPUT
    EnterUserName = document.getElementById("UsernameInput").value;
    EnterPassWord = document.getElementById ("PasswordInput").value;
    
    //GET THE INDEX NUMBER OF THE USERNAME ENTER IN THE INPUT
    RealUsernameNB = UserNameSave.indexOf(EnterUserName);
    //GET THE PASSWORD EXPECTING FROM THE USER BY TAKING THE PASWORD SAVE WITH THE SAME INDEX OF HIS USERNAME ASIGNE
    TargettingPassWord = PassWordSave [RealUsernameNB];
    
    //TEST IF THE EXPECTING PASSWORD IS ENTER IN TE HTML INPUT
    if (EnterPassWord === TargettingPassWord)
        {
            PasswordTest = true;
            console.log (PasswordTest);
            document.location.href = "file:///C:/Users/Poste/Documents/ProjetFinalDuStage/script/html/Log.html";
        }
    else
        {
            passwordAnswer = document.getElementById("passwordAnswer");
            passwordAnswer.innerText = "Your password is wrong!";
            console.log = (PasswordTest);
        }
};

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
