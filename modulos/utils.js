//es modules / commonjs
//dos formas de exportar export
export const calculadora = ()=>{
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
//con export default solo puedes poner uno
//export default calculadora;
//en node es hace con module.exports = calc
//poner export delatante de variables funciones y demas
export const sumScores = (scores)=>{
    return scores.reduce((sum, course) => sum + course.score, 0);
};

export const INIT_CALCULATOR=0;