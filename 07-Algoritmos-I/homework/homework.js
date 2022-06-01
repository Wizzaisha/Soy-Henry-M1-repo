'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let n = 2;
  let arr = [1];

  while (num > 1) {
    if (num % n === 0) {
      arr.push(n);
      num /= n;
      n = 2;
    } else {
      n++;
    }
  }


  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let count = 0;

  while (count < array.length) {
    for (let i = 0; i < array.length - 1; i++) {

      let curr = array[i];
      let next = array[i + 1];

      if (next < curr) {
        array[i] = next;
        array[i + 1] = curr;
      }

    }
    count++;
  }

  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {

    let j = i - 1;
    let aux = array[i];

    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }

  return array;
}


function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {

    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = [j]; // Se queda con el indice
      }
    }
    if (i !== min) {
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }

  return array;


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};