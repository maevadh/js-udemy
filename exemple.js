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
*/

function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15) {
    let result = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
    return result;
}

let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1, 20);

console.log(tempsDePreparationChocolat + tempsDePreparationFraisier);