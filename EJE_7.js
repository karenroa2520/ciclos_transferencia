let num_par= 0;
let num_impar= 0;
for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt(`Ingrese el numero ${i}:`));
    if (numero % 2 == 0) {
        num_par++;
    } 
    else {
        num_impar++;
    }
}

alert(`Cantidad de numeros pares: ${num_par}\nCantidad de numeros impares: ${num_impar}`);