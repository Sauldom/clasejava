//importamos con import from si esta en default no ahce falta poner el mismo nombre
import calculadora,{sumScores, INIT_CALCULATOR} from './utils.js';

const students =[];

const total = students.map(student => ({
    nameAge: `${student.name}-${student.age}`,
    nota: sumScores(student.courses)
}));


const miCalculadora = calculadora();
console.log(miCalculadora.sumar(5));
console.log(miCalculadora.restar(2));
console.log(miCalculadora.multiplicar(4));
console.log(miCalculadora.dividir(2));
console.log(miCalculadora.sumar(10));
console.log(miCalculadora.total());

