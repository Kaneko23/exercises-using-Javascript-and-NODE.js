/*
6. Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de
vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15%
de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês,
com duas casas decimais.
*/

const prompt = require('prompt-sync')();

var nome = prompt("qual seu nome?");
var salario = parseFloat(prompt("qual seu salario?"));
var vendas = parseFloat(prompt("vendas efetuadas"));
var porcent = vendas * 0.15;
var result = salario + porcent;
console.log("olá " + nome, "salário: " + salario, "você vendeu o total de: "
    + vendas, "total de comissão: " + porcent, "Salário total:" + result.toFixed(2),);