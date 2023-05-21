const prompt = require('prompt-sync')();
var x = parseInt(prompt("digite o primeiro numero"));
var y = parseInt(prompt("digite o segundo numero"));

if (y < x) {
    let temp = x;
    x = y;
    y = temp;

}
for (let i = x; i <= y; i++) {
    if (i % 5 == 2 || i % 5 == 3) {
        console.log(i);
    }
}