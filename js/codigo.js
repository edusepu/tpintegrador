
function resumen()
{
    let cantidad = document.getElementById("cantidad").value;
    const precio = 200;
    let categoria = document.getElementById("categoria").value;
    let descuento=0;
    let total=0;
    total = cantidad * precio;
    switch (categoria) {
        case "Estudiante":
            descuento = total*0.8;
          console.log(descuento);
          break;
        case "Trainee":
            descuento = total*0.5;
            console.log(descuento);

          break;
        case "Junior":
            descuento = total*0.15;
            console.log(descuento);

          break;
      }


    total = total -descuento;
    document.querySelector('#tot').innerText = total;


 //alert(total);
}
