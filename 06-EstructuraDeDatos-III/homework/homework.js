"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {

    // Comparar el valor para saber si es derecha o izquierda
    // 

    if (value < this.value) {
      // Derecha

      // Recursion
      // Caso base
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {

        // Accion a repetir
        this.left.insert(value);
      }

    } else if (value > this.value) {
      // Izquierda
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {

        // Accion a repetir
        this.right.insert(value);
      }
    }
  }

  contains(value) {

    // Si se cumple el primer caso pos gg
    if (this.value === value) {
      return true;
    }

    // Otra vez recursion
    // Este es para el caso de izquierda
    if (value < this.value) {
      // Este es el caso base
      if (this.left === null) {
        return false;
      } else {
        // Este es la funcion de recursion
        // peroooo... se hace con this.right
        return this.left.contains(value);
      }
    }

    if (value > this.value) {
      // Este es el caso base
      if (this.right === null) {
        return false;
      } else {
        // Este es la funcion de recursion
        // peroooo... se hace con this.left
        return this.right.contains(value);
      }
    }
  }

  depthFirstForEach(cb, order) {
    // Esto recibe 2 parametros, un call back y un orden
    if (order === "pre-order") {
      // root - left - right

      // Primero se ejecuta el callback
      cb(this.value);
      // Luego recursion
      // Si left es diferente a null se entra y recoore para ejecutar esta funcion de nuevo
      if (this.left !== null) {
        this.left.depthFirstForEach(cb, order);
      }
      // Luego se recorre a la derecha
      if (this.right !== null) {
        this.right.depthFirstForEach(cb, order);
      }

    } else if (order === "post-order") {
      // left - right - root

      if (this.left !== null) {
        this.left.depthFirstForEach(cb, order);
      }
      if (this.right !== null) {
        this.right.depthFirstForEach(cb, order);
      }

      cb(this.value);
    } else {
      // left - root - right
      if (this.left !== null) {
        this.left.depthFirstForEach(cb, order);
      }
      cb(this.value);
      if (this.right !== null) {
        this.right.depthFirstForEach(cb, order);
      }
    }
  }

  /*
  breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  */
  breadthFirstForEach(cb, array = []) {
    if (this.left !== null) {
      array.push(this.left);
    }

    if (this.right !== null) {
      array.push(this.right);
    }

    cb(this.value);

    if (array.length > 0) {
      array.shift().breadthFirstForEach(cb, array);
    }
  }

  size() {

    // Se utiliza recursion para calcular el size

    // Este es el caos base
    if (this.left === null && this.right === null) {
      return 1;
    }

    // Este se aplica cuando en la derecha hay valores
    if (this.left === null && this.right != null) {
      return 1 + this.right.size();
    }

    // Este se presenta cuando la izquierda hay valores
    if (this.left != null && this.right === null) {
      return 1 + this.left.size();
    }

    // Este hace la suma de todo practicamente
    if (this.left != null && this.right != null) {
      return 1 + this.right.size() + this.left.size();
    }

  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};