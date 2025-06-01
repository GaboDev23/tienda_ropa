let elementoPadre = '';
let nombreProducto = '';
let precioProducto = '';
const btn = document.querySelectorAll('.btn');

const agregarCarrito = (nombre, precio) => {
    alert(`Agregaste "${nombre}" al carrito. Precio: ${precio}`);
}

for (let i of btn) {
    i.addEventListener('click', e => {
        elementoPadre = e.target.parentElement;
        nombreProducto = elementoPadre.querySelector('.nombre').textContent;
        precioProducto = elementoPadre.querySelector('.precio').textContent;

        agregarCarrito(nombreProducto, precioProducto);
    })
}