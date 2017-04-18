var imagenes=[
        'panda-arbol',
        'panda-bambu',
        'panda-piedra',
        'panda'
    ];

for (var i = 0; i < imagenes.length; i++) {
  var contenedor= document.getElementById("imagenes");
  var divImage=document.createElement("div");
  divImage.setAttribute("class","panda");
  var img= document.createElement("img");
  var divCerrar= document.createElement("div");
  divCerrar.setAttribute("class","cerrar");

  img.setAttribute("src","assets/image/"+imagenes[i]+".jpg");
  img.setAttribute("alt",imagenes[i]);
  divCerrar.innerHTML="X";
  divImage.appendChild(img);
  divImage.appendChild(divCerrar);
  contenedor.appendChild(divImage);
}


// var contenedor=document.getElementById("imagenes");//contenedor de imagenes
//
// var cerrar=document.getElementsByClassName("cerrar");
// var divImage=document.getElementsByClassName("panda");
// for (var i = 0; i < cerrar.length; i++) {
//   cerrar[i].addEventListener('click',function (e) {
//     if (e.target.tagName =="DIV"){
//       for (var a = 0; a < cerrar.length; i++) {
//         divImage[a].style.display="none";
//       }
//    }
//     });
// }
var contenedor=document.getElementById("imagenes");
var panda=document.getElementsByClassName("panda");
var cerrar= document.getElementsByClassName("cerrar");
var menu= document.getElementById("menu");


contenedor.addEventListener("click",function(e){

    if (e.target.tagName =="DIV"){
      for (var i = 0; i < panda.length; i++) {
         panda[i].style.display="none";
         contenedor.style.display="none";

       }
  }

});






















// ---------------------------------------------------------------------------------
/*para contenido*/
