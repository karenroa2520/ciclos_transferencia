alert("Números primos entre 1 y 50:");

for (let num = 2; num <= 50; num++) {
  let esPrimo = true;

  if (num < 2) {
    esPrimo = false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        esPrimo = false;
        break; // Si ya encontramos un divisor, no seguimos buscando
      }
    }
  }

  if (esPrimo) {
    alert(num);
  }
}