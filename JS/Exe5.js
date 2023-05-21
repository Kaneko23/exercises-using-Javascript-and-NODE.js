/*
5. Faça um programa de computador que pergunte o nome do usuário, guarde o nome em
uma variável chamada N e imprima no console “Olá nomeUsu, seja bem-vindo!”.
Lembre-se de trocar a palavra nomeUsu pelo nome que o usuário digitou como resposta
e que você guardou na variável N.
*/
const prompt = require('prompt-sync')();

console.log("Insira seu nome de usuário");

var N = prompt(">>");

console.log(`Olá ` +

    `${N}` + `, seja bem-vindo!`);