
/*if (typeof temp === "number" && !Number.isNaN(temp)) {
    if (escala.toUpperCase() === "C") {
        temp = temp - 273.15;
        esc = "Celsius"
    } else {
        temp = temp + 273.15;
        esc = "Kelvin"
    }
    console.log(`La temperatura en ${esc} es: ${temp}º${escala.toUpperCase()}`)
} else{
    console.log("La temperatura ha de ser un número.")
}
*/
const temperatura = (escala, temp)=>{
    if (escala.toUpperCase() === "C") {
        temp = temp - 273.15;
        esc = "Celsius"
    } else {
        temp = temp + 273.15;
        esc = "Kelvin"
    }
    return temp;
};





let temp = parseFloat(prompt("Ingresa la temperatura:"));
let escala = prompt("Ingresa la escala a la que quieras cambiar tu temperatura (C o K)").trim();


console.log(temperatura('C', 10));

    

    


