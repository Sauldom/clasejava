

let age= parseInt(prompt('Añadir edad'));

if (age>=18){
    let age =20;
    console.log('Eres mayor de edad');
}else if(age>=14){
    console.log('Eres un adolescente');
}else{
    console.log('No eres ni mayor ni adolescente')
}

console.log(age);


//operadores ternarios

const message = age ===30 ? 'Tienes mi edad':'No tienes mi edad';
console.log(message)