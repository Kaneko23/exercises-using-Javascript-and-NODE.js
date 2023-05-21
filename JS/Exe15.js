/*
15. Leia um valor e faça um programa que coloque o valor lido na primeira posição de um
vetor N[10]. Em cada posição subsequente, coloque o dobro do valor da posição
anterior. Por exemplo, se o valor lido for 1, os valores do vetor devem ser 1,2,4,8 e assim
sucessivamente. Mostre o vetor em seguida.
*/
const prompt = require('prompt-sync')();

var num = prompt("digite o valor de N >>");
var vetor = [];
vetor[0] = num;
for (var i = 1; i < 10; i++) {
    vetor[i] = vetor[i - 1] * 2;
}
console.log(vetor);