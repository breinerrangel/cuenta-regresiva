let boton=document.getElementById("boton")
let dispaly=document.getElementById("display")
let dato=document.getElementById("dato")
let para=document.getElementById("parar")



function ejecutar(ingresado){
    if(ingresado==0){
        dispaly.innerHTML='FINISH'
    }else{
        dispaly.innerHTML=ingresado
        dato.value=''
        setTimeout(ejecutar,1000,ingresado-1)
    }
}
boton.addEventListener("click",function(){
    ejecutar(dato.value)
})
