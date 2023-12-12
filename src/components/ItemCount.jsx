const ItemCount = ({ sumarCarrito, restarCarrito, cantidad, agregarCarrito }) => {

    return (
        <div className="producto-contador">
            <div className='item-count'>
            <button onClick={sumarCarrito}> + </button>
            <p>{cantidad}</p>
            <button onClick={restarCarrito}> - </button>
            </div>
            <button className='agregar-al-carrito' onClick={agregarCarrito}> Agregar al Carrito </button>

            
            
        </div>

    )
}

export default ItemCount