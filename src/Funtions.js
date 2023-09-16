async function GenerateNumber () {
    
    const data = require("./tables.json");


    var cliente = document.getElementById ("cliente").value // Obtener el valor del campo cliente
    var unidad = document.getElementById ("unidad").value // Obtener el valor del campo unidad
    var proyecto = document.getElementById ("proyecto").value // Obtener el valor del campo proyecto

    if (cliente == undefined || unidad == undefined || proyecto == undefined) {

        return(alert(`complete los campos faltantes`))

    } else {
        var result1 = data.clientes.find(item => item.nombre === cliente); // Obtener el primer elemento del array clientes que coincida con el valor del campo cliente
        var result2 = data.UnidadNegocio.find(item => item.nombre === unidad); // Obtener el primer elemento del array UnidadNegocio que coincida con el valor del campo unidad
        var result3 = data.Proyectos.find(item => item.nombre === proyecto); // Obtener el primer elemento del array Proyectos que coincida con el valor del campo proyecto
        var number1 = result1.numero; // Acceder al valor del objeto result1
        var number2 = result2.numero; // Acceder al valor del objeto result2
        var number3 = result3.letra; // Acceder al valor del objeto result3
        var PNumber = number3 + "." + 23 + number1 + "XX" + "." + number2
        console.log(number1);
        console.log(number2);
        console.log(number3);
        console.log(PNumber); // Mostrar el número en la consola
        document.getElementById("resultado").innerHTML = PNumber; // Mostrar el número en la página
        // Aquí puedes hacer lo que quieras con el número, por ejemplo guardarlo en un estado o enviarlo a otra función
    }
    

   
}



export default GenerateNumber;

