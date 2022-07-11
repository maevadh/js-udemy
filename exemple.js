/* 
//                          Section 4 : Les Variables 

const prenom    = "Maëva";
const nom       = "Duhamel"

//console.log('Bonjour ' + prenom + ' ' + nom + ' !');

//___________________________________________________________________________________

let numberOne = 23, numberTwo = 7, result;
result = (numberOne + numberTwo) * 9;   // 270
result += + 2;      // 272
result++;           // 273
result--;           //272
console.log(result); 

//___________________________________________________________________________________
//                          Section 5 : Boites de dialogues

if(confirm('Souhaitez-vous confirmer ?')) {
    // oui
    alert('Ok')
} else {
    // non
    alert('Annulation')
}

//___________________________________________________________________________________
const age = prompt("Entrez votre age :");
console.log("Bonjour, vous avez " + age + " ans");

//___________________________________________________________________________________
//                          Section 6 : function

function sayHello() {
    alert('Hello !')
}
sayHello();

function sayHello(name) {
    alert('Bonjour ' + name);
}

sayHello('Maëva');

//___________________________________________________________________________________
//                          Section 7 : les variables locale/globale

// variable locale = variable qui n'est reconnu QUE dans sa function.
// variable globale = variable déclarer avant ma function
//                    et accessible partout dans mon code.
// -> Eviter d'utiliser des variables globales, elles peuvent causer des problemes.

let crie = "Toujours plus bas";   // Globale

function crieDeGuerre() {
    let crie = "Toujours plus fort !";  //Variable locale
    console.log(crie);
}

crieDeGuerre();
console.log(crie);

//___________________________________________________________________________________

let numberA = 23, numberB = 7;

function addition(numberOne, numberTwo) {
    
    let result = numberOne + numberTwo;
    // console.log(result);        // Affiche un resultat
    return result;                 // Retourne un resultat, tout ce qui viendra apres cette ligne ne sera pas executé.
}

function division(numberOne, numberTwo) {
    
    let result = numberOne + numberTwo;
    // console.log(result); 
    return result;
}

let resultaAddition = addition(numberA, numberB);
let resultaDivision = division(numberA, numberB);

console.log(resultaAddition * resultaDivision);
//___________________________________________________________________________________

function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15) {
    let result = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
    return result;
}

let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1, 20);

console.log(tempsDePreparationChocolat + tempsDePreparationFraisier);
//___________________________________________________________________________________

function demanderAge() {
    
    const age = prompt('Entrez votre age :');
    alert('Vous avez ' + age + ' ans');
    
}
demanderAge();

// NE PAS OUBLIER D'APPELER MA FUNCTION POUR QU'ELLE FONCTIONNE...

//___________________________________________________________________________________
//                          String to number / Number to string.

function futurAge() {
    
    let age = prompt("Entrez votre age : ");
    
    age = Number(age);              // Solution #1. La plus recommandée.
    //  age = parseInt(age);        // Solution #2. Convertir (en nombre entier) une chaine de caractère en nombre.
    //  age = parseFloat(age);      // Solution #3. Va créer un nombre à virgule.
    
    //  nombreEnString = nombre.toString();     // Solution #1. Convertir un nombre en string.
    alert("Bientot vous aurez " + (age + 1) + " ans");
    
}

futurAge();
//___________________________________________________________________________________
//                          Les functions anonymes
//          Façon #1 d'appeler une function anonyme

let functionAnonyme = function() {
    console.log('Je suis une function anonyme');
}

functionAnonyme();

//          Façon #2 : l'auto-executer.

( function() {console.log('Je suis aussi une function anonyme')} ) ();

//___________________________________________________________________________________
//                          Exercice
function voyager(nombreAdultes = 0, nombreEnfants = 0, classe = "Economique") {
    
    let montant = 0;
    
    if (classe == "Economique") {
        montant = nombreAdultes * 450 + nombreEnfants * 100;
    } else if (classe == "Business") {
        montant = nombreAdultes * 950 + nombreEnfants * 400;
    } else {
        montant = nombreAdultes * 1450 + nombreEnfants * 1000;
    }
    
    console.log("Bonjour ! Bienvenue à bord. Voici le montant à payer : " + montant + " euros.");
    
}

voyager(2, 1, "Premiere");

//___________________________________________________________________________________
//                          Exercice abracadabra

function abracadabra() {
    
    let prenom  = prompt("Quel est ton prénom ? ");
    let surnom  = prompt("Quel est ton surnom ? ");
    let age     = prompt("Quel est ton age ? ");
    
    alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, " 
    + prenom 
    + " ! Euh... Je veux dire... Madame la grande magicienne " 
    + surnom 
    + " ! Cela fait déjà " 
    + age 
    + " ans que vous faites rayonner notre contrée !" );
}

abracadabra();
//___________________________________________________________________________________
//                         #1. Exercice Calculateur d'IMC       


function calculerIMC (poids, taille) {  
    
    let tailleEnMetres  = taille / 100;
    let tailleCalculee  = Math.pow(tailleEnMetres, 2);        // = tailleEnMetres * tailleEnMetres;
    let result          = poids / tailleCalculee;
    
    return result;
    
}

let poids   = prompt("Quel est ton poids ? (en kg)");
let taille  = prompt("Quel est ta taille ? (en cm)");

alert(calculerIMC(poids, taille));


//                         #2. Exercice Calculateur d'IMC code simplifié


function calculerIMC (poids, taille) {  
    
    return poids / Math.pow((taille/100), 2);
    
}

let poids   = prompt("Quel est ton poids ? (en kg)");
let taille  = prompt("Quel est ta taille ? (en cm)");

alert(calculerIMC(poids, taille));
*/

//___________________________________________________________________________________
