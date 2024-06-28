async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function enviarProducto(nombre, Precio, imagen, id){
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            Precio: `$${Precio}`,
            imagen: imagen,
            id: id
        })
    });

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function eliminarProducto(id){
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

export const conexionAPI = {
    listarProductos,
    enviarProducto,
    eliminarProducto
};
