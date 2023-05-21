const prompt = require('prompt-sync')();

var x = prompt("Digite o valor de X: ");
var y = prompt("Digite o valor de Y: ");
if (x == 0 && y == 0) {
    console.log("O ponto está na origem");
} else if (x > 0 && y > 0) {
    console.log("O ponto está no primeiro quadrante");
} else if (x < 0 && y > 0) {
    console.log("O ponto está no segundo quadrante");
} else if (x < 0 && y < 0) {
    console.log("O ponto está no terceiro quadrante");
} else if (x > 0 && y < 0) {
    console.log("O ponto está no quarto quadrante");
} else if (x == 0) {
    console.log("O ponto está sobre o eixo y");
} else if (y == 0) {
    console.log("O ponto está sobre o eixo x");
} else {
    console.log("O ponto está fora dos eixos cartesianos");
}