/*
4. Para a realização de cálculos mais complexos, faz-se o uso de parênteses, para que o
computador entenda qual operação fazer primeiro. Para testarmos isto, crie 3 variáveis
chamadas A, B e C. Atribua o valor 3 para A, 4 para B e 5 para C. Neste ponto acrescente
os dois comandos abaixo e imprima as variáveis result1 e result2 para identificar as
diferenças ocasionadas pelo uso dos parênteses.
var result1 = A+B*C;
var result2 = (A+B)*C;
*/

const prompt = require('prompt-sync')();

var A = (3);
var B = (4);
var C = (5);


var result1 = ((A + B) * C);
var result2 = ((A + B) * C);

console.log(result1);
console.log(result2);