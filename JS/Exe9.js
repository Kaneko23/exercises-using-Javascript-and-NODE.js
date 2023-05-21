/*A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo
com a tabela abaixo:
Salário Percentual de Reajuste
0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Acima de 2000.00
15%
12%
10%
7%
4%
Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste
ganho e o índice reajustado, em percentual.
*/
const prompt = require('prompt-sync')();

var salario = parseFloat(prompt("Qual seu salário?"));
var reajuste = 0;
var indice = 0;
if (salario <= 400) {
    reajuste = salario * 0.15;
    indice = 15;
    }else if (salario <= 800) {
        reajuste = salario * 0.12;
        indice = 12;
        }else if (salario <= 1200) {
            reajuste = salario * 0.10;
            indice = 10;
            }else if (salario <= 2000) {
                reajuste = salario * 0.07;
                indice = 7;
                    }else {
                        reajuste = salario * 0.04;
                        indice = 4;
                    }
                    
var total = salario + reajuste;
console.log(`Seu salário era de R$ ${salario} agora seu salario é:R$${total} 
seu salario aumentou R$${reajuste} e seu índice de reajuste é de ${indice}%.`);