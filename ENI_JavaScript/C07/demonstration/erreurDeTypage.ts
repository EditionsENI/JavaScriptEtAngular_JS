// C:\JavaScriptEtAngularJavaScript\C07\demonstration\erreurDeTypage.ts 
// Fonctions 
function addition(chiffre01, chiffre02) {
    return chiffre01 + chiffre02;
}
// Exploitation de la fonction addition 
let premierChiffre = 1;
let deuxiemeChiffre = 3
let chaineDeCaractere = "abc";
console.log(addition(premierChiffre, deuxiemeChiffre));
// Affiche 4 
console.log(addition(chaineDeCaractere, deuxiemeChiffre));
// /!\ Affiche abc3 / !\

// Fonctions 
function additionTypee(chiffre01, chiffre02) {
    return chiffre01 + chiffre02;
}
// Exploitation de la fonction addition 
let premierChiffreTypee: number = 1;
let deuxiemeChiffreTypee: number = 3
// let chaineDeCaractereTypee: number = "abc"; // Erreur à la transcompilation 
console.log(addition(premierChiffreTypee, deuxiemeChiffreTypee));
// console.log(addition(chaineDeCaractereTypee, deuxiemeChiffreTypee));