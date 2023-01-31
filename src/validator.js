const validator = {isValid(creditCardNumber){	    
  const array = [];
  for (let indice = 0; indice < creditCardNumber.length; indice++) {
    const numeroDigitado = parseInt(creditCardNumber[indice]); //A função parseInt converte seu primeiro argumento para uma string, analisa, e retorna um inteiro ou NaN
    array.push(numeroDigitado);
    //O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
  }
  const reversed = array.reverse(); //O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
  for (let indice = 0; indice < reversed.length; indice++) { //A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0. 
    if ((indice + 1) % 2 === 0) {
      reversed[indice] = reversed[indice] * 2;
    }
    if (reversed[indice] >= 10) {
      reversed[indice] = reversed[indice] - 9; // todo numero maior que 10 e menor que 20, se vc subtrair 9 o resultado é a soma deles
    }
  }
  let total = 0;
  for (let indice = 0; indice < reversed.length; indice++) {
    total = total + reversed[indice];
  }
  return total % 10 === 0
},

maskify: function  (creditCardNumber) {
  const quatroDigitos = creditCardNumber.slice(-4);
  const caracteres = creditCardNumber.length -4;
  const mascara = "#".repeat(caracteres) + quatroDigitos;
  return mascara
}
}



export default validator;