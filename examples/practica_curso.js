

//contar el numero de enteros positivos que hay en una lista


let lista =[1,2,3,4,'hla', 4.2, 'llal', 2, 2];

function contar(list){
    let contador = 0;
    for (let i=0; i<list.length;i++){
       // console.log(list[i]);
        if (list[i]>0 && Number.isInteger(list[i])){
            contador++;
        }
    }

    return contador;
}

console.log(contar(lista));


//contar el numero de enteros que son divisibles /2

function div2(list){
    let contador = 0;
    for (let i=0; i <list.length;i++){
        if (list[i]%2 ===0 && Number.isInteger(list[i])){
            contador++;
        }
    }

    return contador;
}

console.log(div2(lista));

//devolver el primer valor booleano de una lista sino devolver undefined

function bol(list){
    let isbol;
    for (let i=0;i<list.length;i++){
        if (typeof list[i]=== 'boolean'){
            isbol=list[i];
            break;
        }
    }
    return isbol;
}

console.log(bol(lista));

let lista2 =[1,false,3,true,'hla', 4.2, 'llal', false, 2];

console.log(bol(lista2));

function inverse(list){
    let reverse =[];
    for(let i=0; i<list.length; i++){
        reverse.push(list[i] * (-1));
    }

    return reverse;

}
let lista3 = [1, 2, 3, 4, 6];
console.log(inverse(lista3));
