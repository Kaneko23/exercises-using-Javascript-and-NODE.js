//2. Faça um programa que contenha uma variável, qual deverá armazenar o seu nome.
//Depois imprima essa variável no console.
const prompt = require('prompt-sync')();

console.log("qual seu nome?");

var nome = prompt(">>");

console.log(`Olá ` +

    `${nome}` + `!`);