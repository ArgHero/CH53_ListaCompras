let txtName = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let btnAgregar = document.getElementById("btnAgregar");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

txtName.addEventListener("blur",formearTexto);
txtNumber.addEventListener("blur",formearTexto);

function formearTexto(event){
    event.target.value = event.target.value.trim();
}//formatearTexto

btnAgregar.addEventListener("click",function(event){
    event.preventDefault();
    if(txtName.value.length < 3){
        txtName.style.border="solid 2px rgb(224, 0, 0)";
        alertValidacionesTexto.innerHTML=`<strong>El nombre del producto no es correcto.</strong>`;
        alertValidaciones.style.display="inline-block";
    }
});//btnAgregar