/* Leia um valor inteiro, que é o tempo de duração em segundos de um determinado
evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.
*/

const { min } = require('mathjs');
const prompt = require('prompt-sync')();

var tempoprod = prompt("digite o tempo de duraçao do evento   >>")
var minutostotais = parseInt(tempoprod / 60);
var segundos = tempoprod % 60;
var horas = parseInt(minutostotais / 60);
var minutos = minutostotais % 60;

console.log(
    `o tempo total de duração do evento foi de `
    + `${horas.toString().padStart(2, '0')}:`
    + `${minutos.toString().padStart(2, '0')}:`
    + `${segundos.toString().padStart(2, '0')}`);
