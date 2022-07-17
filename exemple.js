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
//                         #1.1 Exercise BMI Calculator 


function calculateBMI (weight, height) {  
    
    let sizeInMeters  = height / 100;
    let calculatedSize  = Math.pow(sizeInMeters, 2);        // = sizeInMeters * sizeInMeters;
    let result          = weight / calculatedSize;
    
    return result;
    
}

let weight   = prompt("What is your weight? (en kg)");
let height  = prompt("What is your size? (en cm)");

alert(calculateBMI(weight, height));


//                         #1.2 Exercise BMI calculator simplified code


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
//                          #40 . switch
// ochio ! le ; ne se place QUE au console.log() et break.


let consumable  = "chocolate";

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
//                          #41 . Verifier plusieurs conditions

//                && eperluette          || double pipe
let departureStation    = "Paris";
let arrivalStation      = "Monaco";
let driver              = ""

if ((departureStation != "" && arrivalStation != "") && driver != "") {
    console.log('The train is about to start');
} else {
    console.log('The train cannot start');
}

//___________________________________________________________________________________
//                          #43. Les conditions ternaires

// CONDITION ? TRUE : FALSE;


let x = 23;
x < 7 ? console.log("is less than three") : console.log("x is greater than three");


let departureStation    = "Paris";
let arrivalStation      = "Monaco";
let driver              = "Maëva";

driver != "" && arrivalStation != "" ? console.log("The train is about to start") : console.log('The train cannot start');
//___________________________________________________________________________________

let departureStation    = "Paris";
let arrivalStation      = prompt("Where do you want to go?") || "gare de Nice"; //gare de Nice sera une gare par defaul si l'user ne communique pas de nom de gare.
let driver              = ""

if ((departureStation != "" && arrivalStation != "")) {
    alert('The train is about to start to ' + arrivalStation + '.');
} else {
    alert('The train cannot start');
}

//___________________________________________________________________________________
//                          #44/45. Les boucles

// Une boucle sert a faire des operations tant que ma condition est "true"

// OCHIO !!!!!, les boucles peuvent faire planter mon ordi ! (boucles infinies)

let i = 1;

while (i < 5) {
    console.log('Line : ' + i);
    i++;
}

//___________________________________________________________________________________
//                        #46
let name1;

do {
    
    name1 = prompt('What is your name ?');
    
} while (name1 == "" ||  name1 == null);

alert('Hello ' + name1);

//___________________________________________________________________________________

do {
    
    var name1 = prompt('What is your name ?');
    
} while(name1 == "" ||  name1 == null)

alert('Hello ' + name1);

//___________________________________________________________________________________
//                          #47
for (let i = 1; i  < 5; i++) {
    console.log('Line : ' + i);
    
}

//                          #49. Casser la boucles : break/continue
// Break

let i = 0;

while (i < 5) {
    if (i == 3) {
        break;
    }
    console.log("Line : " + i);
    i++
}

// Continue (s'utilise rarement)

let i = 0;

while (i < 5) {
    if (i == 3) {
        i++             // a bien preciser ici le i++ sinon boucles infinies...
        continue;
    }
    console.log("Line : " + i);
    i++
}


//___________________________________________________________________________________
//                          #50. Gerer les exceptions
// Si je veux afficher des messages d'erreur personnalisables aux users
// mais sans utiliser de pop up


try {
  // Erreur ?
    let recompense = prompt("Choisissez une récompense : épée, arc, haches");
    let degats;

switch (recompense) {
    case "épée":
        degats = 40;
        break;
    case "arc":
        degats = 30;
        break;
    case "haches":
        degats = 20;
        break;
    default:
        throw new Error("Vous ne pouvez pas tricher.");
    }

    alert("Vous avez choisi : " + recompense + " (" + degats + " dégats).");
} 
catch (error) {
  // Erreur !
    alert(error);
} finally {
    alert("Fin du programme");
}

// finally s'utilise rarement
// sauf si je veux qu'une operation soit executer imperativement a chaque fois

//___________________________________________________________________________________
//                          #62. La portée des variables


// Ne pas utiliser var, elle detruit les anciennes variables.
let variableLet = "globale";
var variableVar = "globale";

if(true) {
  
  let variableLet = "locale";
  var variableVar = "locale";
  
  console.log("let : " + variableLet);
  console.log("var : " + variableVar);
  
}

console.log("let : " + variableLet);
console.log("var : " + variableVar);


function timer(secondes) { // 10
    
    if(secondes > 0) {
        console.log(secondes);
        timer(secondes - 1); // 9

            // afficher 9
            // timer(8)

                // afficher 8
                // timer(7)

                    // ...
    }
    else {
        console.log(0);
    }

}

timer(10);



//___________________________________________________________________________________
//                                      Les tableaux


//                          Tableau en 2D

let myArray2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']      // La derniere ligne n'a pas de virgule a la fin
];

//                            Les tableaux associatif //Associer des noms aux elements

let monTableauAssociatif = { 
    'firstName' : 'Mark',
    'lastName'  : 'Zuckerberg',
    'job'       : 'Facebook CEO'
};

monTableauAssociatif['nationality'] = 'American';
// console.log(monTableauAssociatif['job']);
console.log(monTableauAssociatif) 


join Array to String

let myArray = ['Mark', 'Jeff', 'Bill'];

console.log(myArray.join(' '));



// .shift()     supprime le premier élément d'un tableau
// .pop()       supprime le dernier élément d'un tableau
// .unshift()   ajoute un ou plusieurs éléments au début d'un tableau
// .push()      ajoute un ou plusieurs éléments à la fin d'un tableau  

// .delete()    supprimer un element d'un tableau associatif.

//indexOf('la valeur dans mon tableau')
// .join()      Transforme un Array en String
// .splice()    retirer, remplacer et ajouter des elements pour un tableau simple et a multidimension (pas dispo pour les tableaux associatifs)


//___________________________________________________________________________________
//                          Les boucles for...in

let panier = ['banana', 'apple', 'peach'];

for (const fruit in panier) {
    panier[fruit] = 'pomme;'
}
console.log(panier);

                            for...Of (la + utilisé maintenant)

let panier = ['banana', 'apple', 'peach'];

for (const fruit of panier) {
    console.log(fruit);
}


                            difference for...in, for...of

La boucle for...in renvoit dans sa variable l'index de l'element.
La boucle for...of renvoit dans sa variable  la valeur de l'element.
*/
