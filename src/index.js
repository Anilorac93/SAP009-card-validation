import validator from './validator.js';

const form = document.querySelector('#form')

const campo = document.querySelector('.campo')

form.addEventListener('submit',function(event){
    event.preventDefault()

    const input = campo.value

    console.log(input)
})













// const number = document.querySelector("#number");

// const button = document.querySelector("#botao");

// const message = document.querySelector("#verificar");

// buton.addEventListner ("click", cardvalidation);

// function cardvalidation(event){
// event.preventDefault()

// const numeroDigitado = number.value

// const validado = validator.isValid(numeroDigitado)

// if (numeroDigitado === "") {
// console.log ("Por gentileza, digite um número válido de cartão.")
// }

// else if(
//  numeroDigitado === "0000000000000000" ||
//   numeroDigitado === "000000000000000" ||
//   numeroDigitado === "00000000000000" ||
//   numeroDigitado.length <= 13){
//  console.log ("Por favor digite um número válido")
//  }

// else if(validado === true){
//     return(message.innerHTML = "Validado")
// }

// else if(validado === false)
// return(message.innerHTML = "Não validado")
// }


// number.addEventListner("keyup", clone);
// function clone (){
//     const value = document.getElementById("numero").value

//     const ocult= validator.maskify(value)
    
//     const clone= document.getElementById("clone").value = ocult
// }


