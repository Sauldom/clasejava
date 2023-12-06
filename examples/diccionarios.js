

let diccionario = {
    clave : 1,
    clave_2: 2
};

console.log(diccionario);

let dic_2 = {};

dic_2['clave1'] =1;
dic_2['clave2'] = 2;
console.log(dic_2);
dic_2.clave_3 = 3;
console.log(dic_2);

//devolver las claves
for (let key in dic_2){
    console.log(key);
}
//devolver los valores
for (let key in dic_2){
    console.log(dic_2[key]);
}

//devolver con objecxt
console.log(Object.keys(dic_2));

function getKeys(dic){
    let aux = [];
    for (let key in dic){
        aux.push(key);
    }
    return aux;
}
console.log('Mi metodo --- ', getKeys(dic_2));

//metodo for each es un  bucle for

Object.keys(dic_2).forEach(function (item){
    console.log(item);
})
Object.keys(dic_2).forEach(function (item){
    console.log(dic_2[item]);
})

console.log(dic_2['clave2']);
console.log(dic_2['clave2']);
console.log(dic_2.clave1);
diccionario['clave3'] =3;
diccionario['clave4'] =4;

//hacemos efor each con una arrow function
Object.keys(diccionario).forEach(item => console.log(diccionario[item]));

//for each tambien se puede aplicar
let list = [1, 2,3, 4, 5];

list.forEach(item =>console.log(item*2));