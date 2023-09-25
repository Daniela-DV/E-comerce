

const listaProductos = () =>{
    fetch("http://localhost:3000/tipoDeProductos")
    .then(respuesta => respuesta.json())
    .catch(error=> console.log(error))
}

export constr productosServicios={
    listaProductos
};