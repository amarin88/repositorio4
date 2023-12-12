import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const [pedidoId, setPedidoId] = useState("");

    const { register, handleSubmit } = useForm();

    const finalizarCompra = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const refPedidos = collection(db, "pedidos");

        addDoc(refPedidos, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if (pedidoId) {
        return (
            <div className='container'>
                <h1 className='main-title'> Felicitaciones, tu compra ha sido exitosa!</h1>
                <p className='mensaje-checkout' >Tu código de confirmación de compra es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1 className='main-title'> Formulario de Finalización de Compra </h1>
            
            <form className='formulario' onSubmit={handleSubmit(finalizarCompra)}>
            <input type="text" placeholder="Ingresá tu Nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu Email" {...register("email")} />
            <input type="phone" placeholder="Ingresá un Telefono de Contacto" {...register("telefono")} />
            <button className='enviar' type="submit"> Comprar </button>
            </form>
        
        </div>

    )
}

export default Checkout