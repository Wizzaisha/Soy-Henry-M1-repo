'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let bin = [...num];

  let numDecimal = 0;

  //(bit * 2 ^ index)

  bin.reverse();

  for (let i = 0; i < bin.length; i++) {
    numDecimal += (bin[i] * (2 ** i));
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