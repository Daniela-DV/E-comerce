

function pantallaProducto () {
    if (window.innerWidth <=960) {
        document.addEventListener('DOMContentLoaded', function() {
            var productosListas = document.querySelectorAll('.productos-lista');
        
            productosListas.forEach(function(productosLista) {
                var productoItems = productosLista.querySelectorAll('.producto-item');
        
                for (var i = 0; i < productoItems.length; i++) {
                    if (i < 4) {
                        productoItems[i].style.display = 'block'; // Mostrar los primeros 4 elementos
                    } else {
                        productoItems[i].style.display = 'none'; // Ocultar los elementos restantes
                    }
                }
            });
        });
    }
} pantallaProducto ()