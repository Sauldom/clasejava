/*codigo asincrono, se ejecuta en un momento x


*/



const cargarDatosCB = (cb)=>{
    //recibe una funcion y un tiempo en milisegundos
    setTimeout(() =>{
        console.log('Datos cargados');
        cb(null,['dato1', 'dato2']);
        //return ['dato1', 'dato2'];
    }, 5000);
};

/*const cargarDatosdetalle = (cb)=>{
    //recibe una funcion y un tiempo en milisegundos
    setTimeout(() =>{
        console.log('Datos cargados');
        cb(null,['dato1', 'dato2']);
        //return ['dato1', 'dato2'];
    }, 5000);
};
*/
console.log('Hola');

//geenera un error poque los datos no se han podido cargado

///3 formas controlar el problem

//1 callbacks funciones dentro del parametro

cargarDatosCB((error, datos)=> {
    console.log(datos);
    console.log('Final');
});


//2 promessas
//se añade una funciondentro de la promesa
const dowloadUserData = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('downloadUserData');
            resolve('user1');
        }, 2000);

    });
};
const proccessUserData = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('proccessUserData');
            resolve();
        }, 2000);
        
    });
};
const displayUserDashBoard = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('displayUserDataUserData');
            resolve();
        }, 2000);
        
    });
};

dowloadUserData()
    .then((datos)=>{
        console.log('Finalizado download user data', datos);
        return proccessUserData();
    })
    .then(()=>{
        console.log('Finish proccess user data');
        return displayUserDashBoard();
    })
    .then (()=>{
        console.log('mostramos');
    }).catch ((error)=>{
        console.log(error);
    });
//3 async/await
//podriamos usar async function main (){}
const main = async () => {
    const datos = await dowloadUserData();
    console.log('Finish download user data asyn/await', datos);
    await proccessUserData();
    await displayUserDashBoard();
};
//const datos = cargarDatos();
main();