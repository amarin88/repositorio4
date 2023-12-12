import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
  return (
    <div className='producto'>

      <img src={producto.img} alt={producto.nombre} />
      <div>
        <h3 className='producto-nombre'>{producto.nombre}</h3>
        <p className='precio-card'>Precio: ${producto.precio} </p>
        <Link className='ver-mas' to={`/item/${producto.id}`}> Ver Descripción </Link>
      </div>
    </div>
  )
}

export default Item
