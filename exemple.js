/* 
//                          Section 4 : Les Variables 

const firstName    = "Maëva";
const name         = "Duhamel"

//console.log('Bonjour ' + firstName + ' ' + name + ' !');

//___________________________________________________________________________________

let numberOne = 23, numberTwo = 7, result;
result = (numberOne + numberTwo) * 9;   // 270
result += + 2;      // 272
result++;           // 273
result--;           //272
console.log(result); 

//___________________________________________________________________________________
//                          Section 5 : Boites de dialogues

if(confirm('Do you want to confirm ?')) {
    // yes
    alert('Ok')
} else {
    // no
    alert('cancelation')
}

//___________________________________________________________________________________
const age = prompt("Enter you age :");
console.log("Hello, you are " + age + " years old");

//___________________________________________________________________________________
//                          Section 6 : function

function sayHello() {
    alert('Hello !')
}
sayHello();

function sayHello(name) {
    alert('Hello ' + name);
}

sayHello('Maeva');

//___________________________________________________________________________________
//                          Section 7 : les variables locale/globale

// variable locale = variable qui n'est reconnu QUE dans sa function.
// variable globale = variable déclarer avant ma function
//                    et accessible partout dans mon code.
// -> Eviter d'utiliser des variables globales, elles peuvent causer des problemes.

let crie = "Toujours plus bas";   // Globale

function battleCry() {
    let cry = "Toujours plus fort !";  //Variable locale
    console.log(cry);
}

battleCry();
console.log(cry);

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

function cooking(numberOfCakes, minutesOfPreparation = 10, cookingminutes = 15) {
    let result = numberOfCakes * (cookingminutes + minutesOfPreparation);
    return result;
}

let ChocolatePreparationTime = cooking(4);
let StrawberryPreparationTime = cooking(1, 20);

console.log(ChocolatePreparationTime + StrawberryPreparationTime);
//___________________________________________________________________________________

function askAge() {
    
    const age = prompt('Enter your age :');
    alert('You are ' + age + ' years old');
    
}
askAge();

// NE PAS OUBLIER D'APPELER MA FUNCTION POUR QU'ELLE FONCTIONNE...

//___________________________________________________________________________________
//                          String to number / Number to string.

function futurAge() {
    
    let age = prompt("Enter your age : ");
    
        age = Number(age);           // Solution #1. La plus recommandée.
    //  age = parseInt(age);        // Solution #2. Convertir (en nombre entier) une chaine de caractère en nombre.
    //  age = parseFloat(age);     // Solution #3. Va créer un nombre à virgule.
    
    //  numberToString = nombre.toString();     // Solution #1. Convertir un nombre en string.
    alert("Soon you will be " + (age + 1) + " years old");
    
}

futurAge();

//___________________________________________________________________________________
//                          Les functions anonymes
//          Façon #1 d'appeler une function anonyme

let functionAnonyme = function() {
    console.log('I am an anonymous function');
}

functionAnonyme();

//          Façon #2 : l'auto-executer.

( function() {console.log('I am also an anonymous function')} ) ();

//___________________________________________________________________________________
//                          Exercice
function travel(adultsNomber = 0, childrensNumber = 0, class = "Economic") {
    
    let amount = 0;
    
    if (class == "Economic") {
        amount = adultsNomber * 450 + childrensNumber * 100;
    } else if (class == "Business") {
        amount = adultsNomber * 950 + childrensNumber * 400;
    } else {
        amount = adultsNomber * 1450 + childrensNumber * 1000;
    }
    
    console.log("Good morning ! Welcome aboard. Here is the amount to pay: " + amount + " euros");
    
}

travel(2, 1, "firstClass");

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
//                         #1. Exercise BMI Calculator 


function calculateBMI (weight, height) {  
    
    let sizeInMeters  = height / 100;
    let calculatedSize  = Math.pow(sizeInMeters, 2);        // = sizeInMeters * sizeInMeters;
    let result          = weight / calculatedSize;
    
    return result;
    
}

let weight   = prompt("What is your weight? (en kg)");
let height  = prompt("What is your size? (en cm)");

alert(calculateBMI(weight, height));


//                         #2. Exercise BMI calculator simplified code


function calculateBMI (Weight, height) {  
    
    return weight / Math.pow((size/100), 2);
    
}

let weight   = prompt("What is your weight? (kg)");
let height  = prompt("What is your size? (cm)");

alert(calculateBMI(weight, height));

//___________________________________________________________________________________
//                          conditions
//  true/false.
// Pour qu'une condition soit executée il faut qu'elle soit "true"

// ==   ===    !==    !===  <   >   <=  >=  

let heure = 20;

if (heure < 12) {
    console.log("It's almost noon");
} else if (heure < 18) {
    console.log("It's the afternoon");
} else {
    console.log("it's evening");
}

//___________________________________________________________________________________
//                          check user age

let age = 30;

if (age < 18) {
    console.log("you are not of legal age");
} else if (age <= 20) {
    console.log("you are of legal age");
} else {
    console.log("you are of legal age everywhere, the casinos are yours!");
}

//___________________________________________________________________________________
//                          switch
// ochio ! le ; ne se place QUE au console.log() et break.

*/
let consumable = "chocolate";

switch(consumable) {

    case "zucchini":
    case "carrot":
    case "potato":
        console.log("This is a vegetable");
        break;
    case "banana":
    case "mango":
        console.log("This is a fruit");
        break;

    default: 
        console.log("This is neither a fruit, nor a vegetable.");
    
}

//___________________________________________________________________________________
//