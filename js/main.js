const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const alertValidaciones = document.getElementById("alertValidaciones");
const cuerpoTabla = document.getElementById("tablaListaCompras").getElementsByTagName("tbody").item(0);
const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");
//Numeración de la primera columna de la tabla
let cont = 0;
let costoTotal = 0;
let totalEnProductos = 0;

alertValidaciones.style.height="4rem";
alertValidacionesTexto.style.textAlign="center";

txtName.addEventListener("blur",formearTexto);
txtNumber.addEventListener("blur",formearTexto);

function formearTexto(event){
    event.target.value = event.target.value.trim();
}//formatearTexto

function validadCantidad(){
    let contenido = txtNumber.value;
    //longitud del campo
    if(contenido.length<1)
        return false;
    //es un número
    if(isNaN(contenido))
        return false;
    //es mayor que cero
    if(Number(contenido)<=0)
        return false;
    return true;
};//ValidarCantidad

function getPrecio(){
    return Math.round(10000*Math.random())/100;
};//getPrecio

btnAgregar.addEventListener("click",function(event){
    event.preventDefault();
    //bandera
    let isValid = true;
    
    //Deja los estilos por default del input de producto.
    txtName.style.border="";
    txtNumber.style.border="";
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";


    if(txtName.value.length < 3){
        txtName.style.border="solid medium rgb(224, 0, 0)";
        alertValidacionesTexto.innerHTML+=`<strong>El nombre del producto no es correcto.</strong>`;
        alertValidaciones.style.display="block";
        isValid=false;
    }
    if(! validadCantidad()){
        txtNumber.style.border="solid medium rgb(224, 0, 0)";
        alertValidacionesTexto.innerHTML+="<br /><strong>La cantidad no es correcta.</strong>";
        alertValidaciones.style.display="block";
        isValid=false;
    };//Validar cantidad

    if(isValid){
        cont ++;
        let precio = getPrecio();
        cuerpoTabla.insertAdjacentHTML("beforeend",
            `<tr>
                <td>${cont}</td>
                <td>${txtName.value}</td>
                <td>${txtNumber.value}</td>
                <td>${precio}</td>
            </tr>`
        );
        contadorProductos.innerText = cont;
        costoTotal += precio * Number(txtNumber.value);
        precioTotal.innerText = `$ ${costoTotal.toFixed(2)}`;

        totalEnProductos += Number(txtNumber.value);
        productosTotal.innerText = totalEnProductos;

        txtName.value = '';
        txtNumber.value = '';
        txtName.focus();//Selecciona el campo focus por defecto
        
    };//IsValid


});//btnAgregar