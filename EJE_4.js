for (let i = 1; i <=5; i++ ){
  let cant_nota = parseInt(prompt(`Ingrese cuantas notas tiene el estudiante ${i}`))
  let total_nota = 0;
  promedio_nota = 0;
  for (let j = 1; j <= cant_nota; j++){
    let nota = parseInt(prompt(`Ingrese la nota ${j} del estudiante ${i}`))
    total_nota += nota;
  }
  promedio_nota = total_nota / cant_nota;
  if (promedio_nota >= 3.0){
    alert(`El estudiante ${i} aprobo, FELICIDADES`)
  }
  else{
    alert(`El esttudiante ${i} no aprobo`)
  }
}