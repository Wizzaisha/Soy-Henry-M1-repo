'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  } else {

    let pivot = array[Math.floor(Math.random() * (array.length))];

    let right = [];
    let left = [];
    let equals = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else if (array[i] > pivot) {
        right.push(array[i]);
      } else {
        equals.push(array[i]);
      }
    }

    return quickSort(left).concat(equals).concat(quickSort(right));
  }
}

function ourSplit(arr) {
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return [left, right];
}

function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let array = []

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array.push(left[leftIndex]);
      leftIndex++;
    } else {
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) {
    return array;
  } else {

    let div = ourSplit(array);
    let left = div[0];
    let right = div[1];

    return merge(mergeSort(left), mergeSort(right));
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};