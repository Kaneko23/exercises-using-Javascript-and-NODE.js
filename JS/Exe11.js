const prompt = require('prompt-sync')();

var x = prompt("Digite o valor de X: ");
var y = prompt("Digite o valor de Y: ");
var soma = 0;
for (var i = x; i <= y; i++) {
    if (i % 2 != 0) {
        soma += i;
    }
}
console.log(soma);