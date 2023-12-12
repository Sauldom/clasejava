

const calculadora = ()=>{
    let tota =0;

    const sumar = (num)=>{
        return  tota+=num;
    }
    const restar = (num)=>{
        return  tota-=num;
    }
    const multiplicar = (num)=>{
        return tota = tota*num;
    }
    const dividir = (num)=>{
        return tota = tota/num;
    }
    const total= ()=>{
        return tota;
    }
    return {sumar, restar, multiplicar, dividir, total};

};

const miCalculadora = calculadora();
console.log(miCalculadora.sumar(5));
console.log(miCalculadora.restar(2));
console.log(miCalculadora.multiplicar(4));
console.log(miCalculadora.dividir(2));
console.log(miCalculadora.sumar(10));
console.log(miCalculadora.total());