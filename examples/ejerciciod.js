

//[1,2,3,4]   seria la solucion de de range (1,4,1)

function range (start, end, step){
    if (step===undefined){
        step=1;};
    let array = [];

    if (step >0){
        for (start;start<= end; start =start+step){
            array.push(start);
    }
    }else{
        for(let i = start; i>= end; i+=step)
            array.push(i)
    }

    return array;
}

console.log(range(1,4,1));

console.log(range(1,5));

console.log(range(10,2,-2));

// funcion que suma todos los valores de un array



function suma (lista){
    let suma = 0;

    for(let i=0;i<lista.length;i++){
        suma +=lista[i];
    }
    return suma;
}

function suma2(lista){
    let suma =0;
    lista.forEach(function(item){

        suma+=item;
    });
    return suma;
}

console.log(suma(range(1,4,1)));
console.log(suma2(range(1,4,1)));

//devuelve un array solo con los numeros
//[1,2,3]   [1,2,3]
//[1,2, 'a', NaN,3] = [1,2,3]


function filtroNum(lista){
    let filter = [];
    for (i=0;i<lista.length;i++){
        if (typeof lista[i] === 'number' && !isNaN(lista[i]) ){
            filter.push(lista[i]);
        }
    }

    return filter;
}
console.log(filtroNum(range(1,4)));
console.log(filtroNum([1,2, 'a', NaN,3]));
/// array de numeros que pueden estar repetidos nos devuelve cada aparicion de cada numero
///[1,2,2,3,4,1] => 1:2, 2:2, 3:1, 4:1

function repeat(lista){
    let dic={};
    lista.forEach(function(item){
        if(!dic.hasOwnProperty(item)){
            dic[item]=1;
        }else{
            dic[item]+=1;
        }

        
    });

    return dic;
}

console.log(repeat([1,4,1,2,3,3,4,4]));
