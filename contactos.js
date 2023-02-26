// Paginas para DocumentTimeline
// https://codepen.io/ritz078/pen/LGRWjE?editors=1100
// https://codepen.io/cjl750/pen/mXbMyo?editors=0110
// https://codepen.io/kentchangdesign/pen/jadgvx?editors=0010
// https://codepen.io/cenda/pen/YZQVLG
// https://codepen.io/xander1820/pen/pbJRba
// https://codepen.io/eltonmesquita/pen/ExpgXz?editors=0010
// Para traducir a otros idiomas
// https://codepen.io/sergiomachado/pen/qmWvjd?editors=0010


// document.getElementById("boton").onclick, required= function() {
//     console.log("Enviado!");
//     document.getElementById("enviado").innerHTML = "Enviado!";
//     alert("Enviado!");
// }
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

let boton = document.getElementById("boton")
boton.onclick= () => {
    alert("Enviado!")
}

// let ingles = document.getElementById("ingles")
// ingles.onclick=()=> {
//     let nivel = document.getElementById("nivel")
//     let contenedor = document.createElement("p")
//     nivel.append(contenedor)
//     contenedor.innerHTML = "<p>Nivel: Acá va el nivel de ingles</p>"
    
// }
document.getElementById("ingles").onclick = function() {    
    document.getElementById("nivel").innerHTML = "Nivel: Acá va el nivel de ingles";
    // document.getElementById("nivel").classList.add("niveljs");
    document.getElementById("experiencia").innerHTML = "Experiencia: Acá va el nivel de ingles";
    document.getElementById("detalle").innerHTML = "Detalle: Acá va el nivel de ingles";
}
document.getElementById("italiano").onclick = function() {    
    document.getElementById("nivel").innerHTML = "Nivel: Acá va el nivel de italiano";
    // document.getElementById("nivel").classList.add("niveljs");
    document.getElementById("experiencia").innerHTML = "Experiencia: Acá va el nivel de italiano";
    document.getElementById("detalle").innerHTML = "Detalle: Acá va el nivel de italiano";
}
document.getElementById("español").onclick = function() {    
    document.getElementById("nivel").innerHTML = "Nivel: Acá va el nivel de español";
    // document.getElementById("nivel").classList.add("niveljs");
    document.getElementById("experiencia").innerHTML = "Experiencia: Acá va el nivel de español";
    document.getElementById("detalle").innerHTML = "Detalle: Acá va el nivel de español";
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

$(".text-block").hover(function(){
  $(".bar").each(function(){
    $(this).find(".bar-inner").animate({
      width: $(this).attr("data-width")
    },2000)
  });
});

// $(".text-block").hover(function(){
//   $(".bar").each(function(){
//     $(this).find(".bar-inner").animate({
//       width: "0%"
//     },2000)
//   });
// });


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activo");
    current[0].className = current[0].className.replace(" activo", "");
    this.className += " activo";
  });
}