
let nombre = prompt('Ingresa tu nombre.');

 while(nombre.length == 0){
nombre= prompt ('Ingresa tu nombre');
  }
  let apellido = prompt ('Ingresa  tu apellido');
  while(apellido.length == 0){
    apellido= prompt ('Ingresa tu apellido');
          }

 let datos= document.getElementById('holacliente');

datos.innerHTML = `${nombre} ${apellido}`;


