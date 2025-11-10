let total_compra = 0;
while(true)
{
    let opc = parseInt(prompt("¿Desea comprar otro producto? (1.Si - 2.No)"));
    if (opc == 1)
    {
        let precio = parseInt(prompt("Ingrese el precio del producto: "));
        let cant = parseInt(prompt("Ingrese la cantidad del producto: "));

        total_compra += (cant * precio);
    }
    else
    {
        break;
    }
}

if (total_compra > 100000)
{
    total_compra = total_compra - (total_compra * 0.10);
    alert(`Precio total de la compra con descuento del 10%: ${total_compra}`);
}
else
{
    alert(`Precio total de la compra: ${total_compra}`);
}