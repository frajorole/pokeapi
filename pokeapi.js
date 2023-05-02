function busqueda(){
    var idpoke= document.formulario.idpok.value;
    ajaxGet("https://pokeapi.co/api/v2/pokemon/" +idpoke, function(respuesta){
    var pokemon = JSON.parse(respuesta);
    mostrarPokemon(pokemon);
    }); 
};

function mostrarPokemon(pokemon){
    var informacionpoke = document.getElementById("idpokemon")
    informacionpoke.innerHTML="";

    var mensaje1 = document.createElement("p");
    mensaje1.textContent ="Informacion de Pokemon";
    informacionpoke.appendChild(mensaje1);

    var nombrepokemon = document.createElement("p");
    nombrepokemon.textContent="Nombre de pokemon " +pokemon.name;
    console.log(nombrepokemon);
    informacionpoke.appendChild(nombrepokemon);

    var pesopokemon = document.createElement("p");
    pesopokemon.textContent="peso de pokemon " +pokemon.weight;
    informacionpoke.appendChild(pesopokemon);

    var imagenpokemon = document.createElement("img");
    imagenpokemon.src = pokemon.sprites.front_default;
    imagenpokemon.style.weight ="200px";
    imagenpokemon.style.width ="200px";
    informacionpoke.appendChild(imagenpokemon);

    var habilidadprin = document.createElement("p");
    habilidadprin.textContent="Habilidad de pokemon " +pokemon.abilities[0].ability.name;
    informacionpoke.appendChild(habilidadprin);


}

































// var open =indexseddDB.open("pruebaDB,1");

// openRequest.onupfradeneeded = function(e){
// // Actualizar informacion
// console.log("Ejecutando",this.onupfradeneeded);
// var thisDB = e.target.result;
// if(!thisDB.objectStoreNames.contains("TablaPrueba")){
//     thisDB.createObjectStore("TablaPrueba", {keyPath: 'id'});

//     } 

// var transaction= db.transaction('TablaPrueba', "readwrite"); 

// var info={
//     id: '1',
//     nombre: 'Hernan'

// };

//     var request = informacion.add(info);


// }
// openRequest.onsuccess = function(e){
// // en caso de que sea correcta
// console.log("Correcto!!");
// db = e.target.result;
// }

// openRequest.onerror= function(e){
// // en caso de que salga error
// console.log("Error");
// console.dir(e);
// }
// var http = new XMLHttpRequest();

// var url ='https://jsonplaceholder.typicode.com/posts';

// Http.open('GET', url);
// Http.send();

// Http.onreadystatechange= function(e){
//     if(this.readyState==4 && this.status==200){
//         console.log(Http.responseText);
//     }
    
// }