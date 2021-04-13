window.addEventListener("load",init);

function ID (nev) {
    return document.getElementById(nev);
}

function $(nev){
    return document.querySelectorAll(nev);
}

function init () {

    for (var i=0; i <3; i++) {
        $("#bal img")[i].addEventListener("click", megjelenit,/* KepKozep*/);
    }
}
function megjelenit() {
    this.style.display="none";
    var kepsrc=this.src;
    document.querySelector('#csonak').innerHTML+=" <img src="+kepsrc+" alt='kecske'>"; 
    
}

/* function KepKozep () {

    /*if (display=="none"){

    document.querySelector('#article').insertAdjacentHTML(
      `<div class="kepek">
      <img src="kepek/kecske2.png" alt="kecske">
      <img src="kepek/kaposzta.png" alt="kaposzta">
      <img src="kepek/farkas.png" alt="farkas">
      </div>`      
    )
    this.style.display="block";
    this.style.margin-left == auto;
    this.style.margin-right==auto;
  }
}

var  kecske=kepek/kecske2.png;
var kaposzta =kepek/kaposzta.png;
var farkas= kepek/farkas.png; 

function Alertablak() {
    if (kecske.style.display=="block" &&  kaposzta.style.display=="block") {
        alert("Helytelen választás!");
    }else if (farkas.style.display=="block" &&  kecske.style.display=="block"){
        alert("Helytelen választás!");
    }
} */


function init() {
    let kepek = document.querySelectorAll("#bal img");

    console.log(kepek);
    for (var i = 0; i < 3; i++) {
        kepek[i].addEventListener("mouseenter", function (event) {

        event.target.style.border = "5px solid red";

    });
    kepek[i].addEventListener("mouseout", function( event ) {

  event.target.style.border = "5px solid white";


});
        
    }
    
}