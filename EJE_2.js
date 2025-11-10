while (true){
  let num = prompt("Ingree el numero para ver su tabla");
  for (let i =1; i <=12; i++){
    let multi = i * num;

    alert(`${num} * ${i} = ${multi}`)

    }

    let opc = prompt("Desea consultar otra tabla (1. si 2. no)")
    if (opc == 2){
      break;
  }
}