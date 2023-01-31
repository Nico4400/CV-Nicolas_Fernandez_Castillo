
document.getElementById("boton").onclick, required= function() {
    console.log("Enviado!");
    document.getElementById("enviado").innerHTML = "Enviado!";
}
document.getElementById("icono1").addEventListener('mouseover', function(){
    console.log("aparecio");
    document.getElementById("oculto").innerHTML ="+54 221-5651-273";
})
document.getElementById("icono2").addEventListener('mouseover', function(){
    console.log("aparecio");
    document.getElementById("oculto").innerHTML ="nico.fernandezcastillo@gmail.com";
})
document.getElementById("icono3").addEventListener('mouseover', function(){
    console.log("aparecio");
    document.getElementById("oculto").innerHTML ="La Plata, Buenos Aires, Argentina";
})
document.getElementById("barra").addEventListener('mouseover', function(){
    console.log("desaparecio");
    document.getElementById("oculto").innerHTML ="";
});
