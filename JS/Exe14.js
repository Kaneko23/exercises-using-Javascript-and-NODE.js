const prompt = require('prompt-sync')();

var x = prompt("Digite um número inteiro: >>");
while (x != 0) {
    for (var i = 1; i <= x; i++) {
        console.log(i);
    }
    x = prompt("Digite um número inteiro: >>");
}