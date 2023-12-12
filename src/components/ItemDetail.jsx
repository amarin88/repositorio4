import ItemCount from './ItemCount'
import { aMayus } from '../helpers/aMayus'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ item }) => {


  const { agregarCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const sumarCarrito = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  const restarCarrito = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  return (
    <div className='container'>
        <h1 className='main-title'>Descripción</h1>
        <div className='producto-detalle'>
        <img src={item.img} />
        <div>
          <h3 className='titulo'> {item.nombre} </h3>
          <p className='descripcion'> {item.descripcion} </p>
          <p className='categoria'> {aMayus(item.categoria)} </p>
          <p className='precio'> ${item.precio} </p>
          <ItemCount
            cantidad={cantidad}
            sumarCarrito={sumarCarrito}
            restarCarrito={restarCarrito}
            agregarCarrito={() => { agregarCarrito(item, cantidad) }} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail