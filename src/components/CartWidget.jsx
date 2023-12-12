import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const { cantidadCarrito } = useContext(CartContext)

  return (
    <div className='carrito'>
      <Link to="/cart"><img className="icono-carrito" src="..\src\assets\icons8-bag-50.png" alt="carrito"/></Link>
      <span className='numero-icono-carrito'>{cantidadCarrito()}</span>
    </div>
  )
}

export default CartWidget