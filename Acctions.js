var boton = document.getElementById("btnLogin");
boton.addEventListener("click", redirect);

function redirect(){
    if(txt.value === ''){
        alert("El campo Usuario esta vacío");
       return false;
       }
       else if(txtpass.value === '')
       {
        alert("No puso contraseña, vuelva a intentarlo");
       return false;
       }else if(cbox.checked){
        location.href = "E:/programacion/css/Proyecto-Pagina/MainMenu.html";
       }
       else{
        alert("No acepto los terminos y condiciones");
       return false;
       }
}
