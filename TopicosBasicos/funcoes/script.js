function soma1(num1, num2){
  return num1 + num2;
}

const soma2 = function(num1, num2) {
  return num1 + num2;
}

const soma3 = (num1, num2) => {
  return num1 + num2;
}

const soma4 = (num1,num2) => num1 + num2;

const dobro1 = function(num) {
  return num * 2;
}

const dobro2 = (num) => {
  return num * 2;
}

const dobro3 = num => num * 2;

//Funcao que nao tem retorno definido, por padrao ela retorna undefined;

function mostrarPreco(preco) {
  console.log("PRECO = " + preco);
}

// Variaveis definidas dentro do escopo da função nao vazam escopo

function areaCirculo(raio) {
  const pi = 3.14;
  return pi * raio * raio;
}

//function hoisting: funções no JS sao "movidas pra cima pelo motor do JS"
test(10);
function test(x) {
  console.log("teste =" + x);
}

//funcoes podem ser passadas como argumento

function triplo(num){
  return num * 3;
}

function aplicar(f, num) {
  const result = f(num);
  console.log("resultado: " + result);
}

aplicar(triplo, 10);
aplicar(dobro3, 10);



