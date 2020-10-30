function validarDatos(form)
 {
    let usuario = form.usuario.value;
    let clave = form.clave.value;

    console.log("email y clave: "+ usuario + clave);

    if (usuario== "" || usuario.indexOf("@", 0) == -1 || clave=="") {
        alert("Los campos no pueden estar vacíos y el email debe contener un @" );
        return (false);
        
    } else {
        alert("Campos correctos");
        return (true);
    }
    
}