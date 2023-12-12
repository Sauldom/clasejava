let numeros = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false];
const evenodd = (numbers) => {
    let impares = []
    let pares = []
    for (let index = 0; index < numbers.length; index++) {

        const numero = numbers[index];

        if (typeof numero === 'number') {
            if (numero % 2 != 0) {
                impares.push(numero)
            } else {
                pares.push(numero)


            }
        }

    }

    return {
        pares,
        impares
    }
}
console.log(evenodd(numeros));