const nuevoProducto = (categoria, productos,name,imgeUrl,price,id,descripcion)=>{
 const div = document.createElement("div")
 const contenido =

  `
 <div class="productos-item">
 <img class="productos-img" src="${imgeUrl}">
 <h1 class="productos-name">${name}</h1>
 <p class="producto-precio">${price}</p>
 <p class="producto_ver-producto">Ver producto ${id}</p>
</div>
 `

 div.innerHTML=contenido
 div.dataset.id=id

 return div
}

const producto = document.querySelector("[data-producto]")

async function mostrarProductos() {

    const productosApi = [{

        name:"name", imageUrl:"imageUrl",Price:"price",id:"id"
    }];

    const contenedorProductos = document.querySelector("[data-producto]");

    productos.forEach(productosApi => {
        const productoElemento = nuevoProducto(producto.name, producto.imageUrl, producto.price, producto.id, producto.descripcion);
        contenedorProductos.appendChild(productoElemento);
    });
}