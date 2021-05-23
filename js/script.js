function validar(){
    var form = document.form;

    if(form.nombre.value==0){
        alert("El campo nombre está vacío")
        form.nombre.value="";
        form.nombre.focus(); 
        return false;
    }

    if(form.correo.value==0){
        alert("El campo correo está vacío")
        form.correo.value="";
        form.correo.focus(); 
        return false;
    }

    if(form.telefono.value==0){
        alert("El campo telefono está vacío")
        form.telefono.value="";
        form.telefono.focus(); 
        return false;
    }

    alert("Datos enviados con éxito")
    form.submit();
}