document.getElementById(`formContacto`).addEventListener(`submit`, function (event) {
    event.preventDefault(); 

    console.log("Formulario enviado"); 

    const nombre = document.getElementById(`nombre`).value;
    const correo = document.getElementById(`correo`).value;
    const mensaje = document.getElementById(`mensaje`).value;

    Swal.fire({
        icon: `success`,
        title: `Mensaje Enviado`,
        text: `Gracias por contactarnos, ${nombre}. Te responderemos pronto.`,
        confirmButtonColor: `#00ff88`,
    });

    document.getElementById(`formContacto`).reset();
});