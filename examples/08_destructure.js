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
      let {title, year} = Libros[i];
      if (year > 2000) {
        nuevoArray.push(title);
      }
    }
  
  const [uno, dos] = Libros;
  console.log(uno); 
  console.log(dos);
  const [pos0, {title, year}] = Libros;
  console.log(pos0, title, year);

  const twilight = {title:'Twilight', author:'Stephenie Meyer', year: 2005};

  console.log (Object.entries(twilight));

  for (let [key, value] of Object.entries(twilight)){
    console.log(key);
    console.log(value);
  }

  const user = {
    role: 'admin',
    username: 'keepc',
    courses: ['nodejs', 'html'],
    country:{
        code: 'es',
        name:'Spain'
    }
  };
console.log(user);
/*const studentUser = user;

studentUser.role = 'student';
studentUser.username = 'saul';
studentUser3.role = 'student';
studentUser3.username = 'saul';
studentUser3.country.name = 'eu';
console.log (studentUser);
console.log(user);*/
if (user.role ==='admin' && user.username ==='keepc'){
    console.log('Empecemos curso');
}else {
    console.log('No hay admin');
}

const studentUser2 = structuredClone(user); // la mejor manera de clonar un objeto
console.log(user);
///crea un objeto y luego mete una copia
const studentUser3 = {...user};

console.log(studentUser3);
console.log(Libros);
// cuando asignamos un objeto a otro se quedan linkados hay una referencia de uno a otro
const booksNoHunger = Libros;
booksNoHunger.pop();

console.log(Libros);
console.log(booksNoHunger);

const studentUser4 = {
    ...user,
    experiencie:2,
    country:{
        code:'ho',
        name:'holanda'
    }
}
console.log(studentUser4);



const product = {
    name: 'air jordan',
    price: 190
};
const stockInfo = {
    stock:null
};

const finalProduct = { ...product, ...stockInfo};
console.log(finalProduct);
