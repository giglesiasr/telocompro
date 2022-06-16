const productos = [
  {
    id: 1,
    imagen: "./imagenes/AppleWatch.jpg",
    titulo: "Reloj",
    precio: 300,
  },
  {
    id: 2,
    imagen: "./imagenes/audifonos2.jpg",
    titulo: "Audífonos",
    precio: 200,
  },
  {
    id: 3,
    imagen: "./imagenes/AirPods.jpg",
    titulo: "AirPods",
    precio: 100,
  },
  {
    id: 4,
    imagen: "./imagenes/silla.jpg",
    titulo: "Silla",
    precio: 100,
  },
];


console.log(productos[2]) //ingresar a un objeto.
console.log(productos[2].titulo); //ingresar para a un elemento de un objeto específico.


function tarjetas(){
  document.getElementById("tarjetitas").innerHTML = "";
  productos.map(function(x){
    document.getElementById("tarjetitas").innerHTML += `
       <div class="card col-3 ml-1 mb-3 text-center">
        <img class="card-img-top" src="${x.imagen}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${x.titulo}</h5>
          <p class="precio">$${x.precio}</p>
          <btn class="btn btn-primary" onclick="agregarCarrito(${x.id})" >Comprar</btn>
        </div>
      </div>`;
  })
}
//tarjetas();


/*FILTRAR TARJETAS*/

let ingresaInfo;

function filtrar (){
  document.getElementById("tarjetitas").innerHTML = "";
  ingresaInfo = document.getElementById("buscador").value;
  let infoIngresa = ingresaInfo.toLowerCase();

  let filtro = productos.filter (x=>{
    const tituloFiltro = x.titulo
    const transformarTitulo = tituloFiltro.toLowerCase()
    return transformarTitulo == "" ? tarjetas() : transformarTitulo.includes(infoIngresa)
  });



  filtro.map(function (x) {
    document.getElementById("tarjetitas").innerHTML += `
     <div class="card col-3 ml-1 mb-3 text-center">
      <img class="card-img-top" src="${x.imagen}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${x.titulo}</h5>
        <p class="precio">$${x.precio}</p>
        <btn class="btn btn-primary" onclick="agregarCarrito(${x.id})">Comprar</btn>
      </div>
    </div>`;
  });
}

function resultado() {
  ingresaInfo = document.getElementById("buscador").value;
  console.log(ingresaInfo)
  if (ingresaInfo == "") {
    tarjetas();
    console.log("lorem", ingresaInfo);
  } else {
    filtrar();
    console.log("arggggg", ingresaInfo);
  }
}
resultado();

/*Capturar el ID

declarar un array vacío, y luego llenar con tarjetas.
.push  y luego para plasmar se debe recorrer el array con .map y luego plasmar.
*/

let carrito = []; //el nuevo array para el carrito

function agregarCarrito(search) {
  let card = productos.filter((item) => item.id === search);
  //console.log(card);
  let comparar = carrito.some(compara => compara.id === search)
  //console.log(comparar)
  if (comparar){
  card[0].count = card[0].count + 1;
  card[0].subTotal = card[0].subTotal + card[0].precio;
  mostrarCard()
  } else{
    card[0].count = 1;
    card[0].subTotal = card[0].precio;
    carrito.push(card[0])
    console.log(carrito)
    mostrarCard()
  }
  console.log("nuevo array",carrito);
}

let total = 0;
function mostrarCard(){
  document.getElementById("card").innerHTML= "";
  carrito.map(function(y){
    total= y.subTotal + total;
    document.getElementById("card").innerHTML += `
    <tr>
      <td><img height="40px" src="${y.imagen}" alt="img"> </td>
      <td>${y.titulo}</td>
      <td>$${y.precio}</td>
      <td>${y.count}</td>
      <td>$${y.subTotal}</td>
      <td><btn class="btn btn-primary" onclick="eliminar(${y.id})">X</btn>
      </td>
    </tr>
    `;
    document.getElementById("precioFinal").innerHTML = `
     <p>Total: ${total}</p>
    `
  })
total= 0
}

function eliminar(producto){
  carrito = carrito.filter (x => x.id != producto)
  document.getElementById("precioFinal").innerHTML = ""
  mostrarCard()
}

/*
 const AgregarCard = (id) => {
  //console.log(id);
  const itemProductos = productos.find((item) => item.id == id);
  //  console.log(itemProductos.precio);
};
*/


