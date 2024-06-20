import {conexionAPI} from "./conexionAPI.js";

const lista= document.querySelector("[data-lista]")

function crearCard (nombre , Precio , imagen){
    const producto = document.createElement("li");
    producto.className = "producto__item";
    producto.innerHTML = `<div class="card text-center" style="width: 14rem;">
                                <img src="${imagen}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">${nombre}</p>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <p class="card-text mb-0 me-2">${Precio}</p>
                                        <button class="btn" id="eliminar"><i class="fa-solid fa-trash-can"></i></button>
                                    </div>
                                </div>
                            </div>`;
    
    return producto;

}

async function listarProductos (){
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(producto=> lista.appendChild(crearCard(producto.nombre, producto.Precio, producto.imagen)))  

}
listarProductos();