'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let bin = [...num];

  let numDecimal = 0;

  //(bit * 2 ^ index)

  let index = 0;

  for (let position = bin.length - 1; bin.length <= 2 ? position > 0 : position >= 0; position--) {

    numDecimal += (bin[index] * 2) ** position;

    index++;

  }

  return numDecimal;

}

function DecimalABinario(num) {
  // tu codigo aca
  let nBin = (num % 2).toString();

  while (num > 1) {
    num = parseInt(num / 2);
    nBin = (num % 2) + nBin;
  }

  return nBin;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}