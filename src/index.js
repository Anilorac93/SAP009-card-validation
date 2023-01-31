import validator from './validator.js';

const button = document.getElementById("button");
const input = document.getElementById("campo");
const resposta = document.getElementById("resposta");

button.addEventListener("click", verificar);

function verificar(e) {
  e.preventDefault();
  const valorDigitado = input.value;
  const validation = validator.isValid(valorDigitado);

  
  if (
    valorDigitado.trim() === "" ||    
    valorDigitado === "0000000000000000" ||
    valorDigitado === "000000000000000" ||
    valorDigitado === "00000000000000" ||
    valorDigitado.length <= 13
  ) {
    return (resposta.innerHTML = "NÃO É UM CARTÃO. POR FAVOR, DIGITE UM NÚMERO DE CARTÃO!");
  }  
  else if (validation === true) {
    return (resposta.innerHTML = `CARTÃO ${validator.maskify(valorDigitado)} VÁLIDO`);
  }
  else if (!validation) {  
    return (resposta.innerHTML = `CARTÃO ${validator.maskify(valorDigitado)} INVÁLIDO`);
  } 

}