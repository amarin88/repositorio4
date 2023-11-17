import React from 'react'
import { Badge } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div>
        <img className="img_carrito" src="../src/assets/shop-svgrepo-com.svg"/>
        <Badge colorScheme='blue'>3</Badge>
    </div>
  )
}

export default CartWidget