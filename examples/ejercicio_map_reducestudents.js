const students = [
    {
      name: "Juan",
      age: 20,
      courses: [
        {
          name: "Mates",
          score: 95
        },
        {
          name: "History",
          score: 85
        }
      ]
    },
    {
      name: "María",
      age: 22,
      courses: [
        {
          name: "Mates",
          score: 100
        },
        {
          name: "History",
          score: 70
        }
      ]
    }
  ];

 /* Nombre - edad
Total

[
  { ???:  Nombre - edad, ???:  Total },  { ???:  Nombre - edad, ???:  Total },
]*/


const redu = students.map((item)=>{
    let stu= `${item.name} - ${item.age}`;
    const notaTotal = item.courses.reduce((acum, nota) =>{ //se podria omitir el return y ponerlo en una sola fila como el de abajo
        return acum+nota.score;
    },0);
    return {
        estudiante: stu,
        notaTotal: notaTotal       
    }
},{});

console.log(redu);
//solucion de otro compañero
const mappedStudents = students.map((item)=>{
    return{
        student:`${item.name} - ${item.age}`;
        total: item.courses.reduce((accum, item)=>acum+item.score, 0)
    }
});