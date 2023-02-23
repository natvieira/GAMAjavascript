//x = (a + b - c) / d * e;

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

let x = a + b;

console.log("Soma : " + "(" + a + "+" + b + "):", x);
console.log(x);

//subtração

let old_x = x;
x = x - c;
// pode ser escrito como x -= c;
console.log("Subtração : (" + old_x + "-" + c + "):", x);

//divisão
old_x = x;
x = x / d;
console.log("Divisão : (" + old_x + "/" + d + "):", x);

//multiplicação
old_x = x;
x = x * e;
console.log("Multiplicação: (" + old_x + "*" + e + "):", x);

//verificar se é par ou ímpar

x = parseInt(x); //função que garante que ele será inteiro

let mod = x % 2;
console.log("Módulo (Resto)" + "(" + x + "% 2):", mod);

old_x = x;

if (mod === 0){
    x++;
    console.log("Incremento" + "(" + old_x + "++):", x);
}else {
    x--;
    console.log("Decremento" + "(" + old_x + "--):", x);
}

console.log("Resultado final:" + x);