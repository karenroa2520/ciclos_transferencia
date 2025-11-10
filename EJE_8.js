
adivinada = false;

for (let i = 1; i <= 3; i++) {

    let contraseña= "losfrijolesconarroz", usuario = "bandejapaisa";
    let intento_usuario = prompt("Ingrese el usuario:");
    let intento_contraseña = prompt("Ingrese la contraseña:");
    if (intento_usuario === usuario && intento_contra === contra) {

        adivinada = true;
        break;
    }

    else {
        alert("Usuario o contraseña incorrectos.");
    }
}

if (adivinada) {
    alert("Bienvenido.");
}

else {
    alert("Acceso denegado.");
}
