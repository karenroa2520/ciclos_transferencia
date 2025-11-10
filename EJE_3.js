let saldo = 100000;

while(true){
  if (saldo <0){
    let opcion = prompt("Desea realizar otro retiro? (1. Si 2. No)");
    if (opcion == "1"){
      let retiro = parseInt(prompt("Ingrese el saldo a retirar: "));

      if (retiro <= saldo){
        saldo -= retiro;
        alert(`Retiro exitoso, su nuevo saldo es ${saldo}`);
      }
    }
          else{
        alert(`Saldo insuficiente, Saldo actual ${saldo}`)
          }

    break;

  }
}
