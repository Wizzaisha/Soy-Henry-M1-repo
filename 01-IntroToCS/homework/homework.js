'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let bin = [...num];

  let numDecimal = 0;

  //(bit * 2 ^ index)

  let index = 0;

  for (let position = bin.length - 1; position >= 0; position--) {

    numDecimal += (bin[index] * 2) ** position;

    index++;

  }

  return numDecimal;

}

function DecimalABinario(num) {
  // tu codigo aca
  let nbin = [];

  // dividir el numero x2 las veces que sean necesarias y leer de abajo hacia arriba

  while (num > 1) {

    nbin.unshift(Math.floor(num % 2));

    num /= 2;

  }

  return nbin.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}