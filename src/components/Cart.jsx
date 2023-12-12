import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const limpiarCarrito = () => {
        vaciarCarrito();
    }

    return (
        <div className='container'>
            <h1 className='main-title'>Mi carrito</h1>
            <div>
            {carrito.map((prod) => (
                    <div className='producto-detalle' key={prod.id}>
                        <img className='img-cart' src={prod.img} />
                        <div>
                        <h3 className='producto-nombre-cart'>{prod.nombre}</h3>
                        <p className='detalle-cart'>Precio unidad: ${prod.precio}</p>
                        <p className='detalle-cart'>Cantidad seleccionada: {prod.cantidad}</p>
                        <p className='detalle-cart'>Precio total: ${prod.precio * prod.cantidad}</p>
                        </div>
                    </div>
                ))
            }

            {carrito.length > 0 ?
                    <div>
                        <div>
                        <h3 className='total-carrito'>Total carrito: ${precioTotal()}</h3>
                        </div>
                        <div>
                        <button className='boton-cart' onClick={limpiarCarrito}> Vaciar Carrito </button>
                        <button className='boton-cart'><Link to="/checkout"> Finalizar Compra </Link></button>
                        </div>
                    </div> :
                    <h2 className='mensaje-vacio'>Lo sentimos, tu carrito está vacío.</h2>
            }
            </div>
        </div>
    )
}

export default Cart