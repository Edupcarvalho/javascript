//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

// alert("Hello World");

//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let v = 2;

if(typeof v === "number"){
    console.log("É um número")
}else{
    console.log("Não é um número")
}

//Crie um script que declare uma variável e verifique se o seu valor
// é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let value = "Eduardo";

if(typeof value === "string"){
    console.log("A variável é uma string");
}else{
    console.log("A variável não é uma string");
}

//Crie um script que declare uma variável e verifique se o seu valor é um booleano.
// Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let d = true;

if(typeof d === "boolean"){
    console.log("É um booleano")
}else{
    console.log("Não é um booleano")
}

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.


function sub(a, b){
    return a-b;
}

console.log(sub(4,2));

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

function multi(a,b){
    return a*b;
}
console.log(multi(4,2));

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

function divi(a,b){
    return a/b;
}
console.log(divi(4,2));

//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem
// "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let a = 32;

if( a % 2 === 0){
    console.log("É um número par");
}else{
    console.log("Não é um número par");
}

//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem
// "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let c = 15;
if(c % 3 === 0){
    console.log("É um número ímpar");
}else{
    console.log("Não é um número ímpar")
}