//exemplos de tipos de dados:

let variavelString = "texto";
let variavelnumeroInteiro = 10;
let variavelFloat = 1.25;
let variavelBooleana1 = true;
let variavelBooleana2 = false;

//uso da função typeof

console.log("variavelString = " + typeof(variavelString));
console.log("variavelnumeroInteiro = " + typeof(variavelnumeroInteiro));
console.log("variavelFloat = " + typeof(variavelFloat));
console.log("variavelBooleana1 = " + typeof(variavelBooleana1));
console.log("variavelBooleana2 = " + typeof(variavelBooleana2));

//uso de array

let variavelArray = [];

variavelArray [0] = variavelString;
variavelArray.push = variavelnumeroInteiro;
variavelArray.push = variavelFloat;
variavelArray.push = variavelBooleana1;
variavelArray.push = variavelBooleana2;

console.log("variavelArray = " + typeof(variavelArray));

//Declarando objeto, localização e exibição no array
//Objeto

///APRESENTANDO ERRO DE OBJETO

let carro =
{
    cor: 'preto',
    ano: '2012',
    marca: 'volk',
    modelo: 'celta',
};
console.log("carro: " + typeof(carro));
variavelArray.push = carro;


//Inserindo no array


console.log("variavelArray = " + typeof(variavelArray));

//Lendo

console.log ("Conteúdo da variavel Array" + variavelArray);

//Para conseguir visualizar o que há no objeto, sabendo que ele foi incluído na posição 6
console.log("variavelArray = " + variavelArray);
console.log ("carro" + variavelArray[5]);
console.log (variavelArray[5]);

