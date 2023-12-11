/*Ejercicio: Filtrar y transformar un array de objetos

Enunciado: Dado un array de objetos que representan libros
Filtrar los libros cuyo año de publicación sea posterior a 2000 y luego  crear un nuevo array con los títulos de esos libros.

titulo: El gran Gatsby | autor: F. Scott Fitzgerald | año: 1925
titulo: 1984 | autor: George Orwell | año: 1949
titulo: Cien años de soledad | autor: Gabriel García Márquez | año: 1967
titulo: Harry Potter y la piedra filosofal | autor: J.K. Rowling | año: 1997
titulo: El código Da Vinci | autor: Dan Brown | año: 2003
titulo: Crepúsculo | autor: Stephenie Meyer | año: 2005
titulo: Los juegos del hambre | autor: Suzanne Collins | año: 2008*/

const Libros = [
    {
      title: "El gran Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925  
    },
    {
      title: "1984",
      author: "George Orwell", 
      year: 1949
    },
    {
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      year: 1967
    },
    {
      title: "Harry Potter y la piedra filosofal",
      author: "J.K. Rowling",
      year: 1997
    },
    {
      title: "El código Da Vinci",
      author: "Dan Brown",
      year: 2003
    },
    {
      title: "Crepúsculo",
      author: "Stephenie Meyer", 
      year: 2005
    },
    {
      title: "Los juegos del hambre",
      author: "Suzanne Collins",
      year: 2008
    }
  ];

let nuevoArray = []
for (let i = 0; i < Libros.length; i++) {
    let libro = Libros[i];
    if (libro.year > 2000) {
      nuevoArray.push(libro.title);
    }
  }
  let nuevoArray2 = []
for (x in Libros){
    if (Libros[x].year >2000){
        nuevoArray2.push(Libros[x].title);
    }
}
console.log(nuevoArray);
console.log(nuevoArray2);