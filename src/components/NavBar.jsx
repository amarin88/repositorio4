import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to={"/"} className='logo'> <img src="..\src\assets\logo.png" alt="" /> </Link>

                <ul className='menu'>
                    <li> <Link to="/productos" className='menu-link'> Productos </Link> </li>
                    <li> <Link to="/productos/calzado" className='menu-link'> Calzado </Link> </li>
                    <li> <Link to="/productos/indumentaria" className='menu-link'> Indumentaria </Link> </li>
                    <li> <Link to="/productos/accesorios" className='menu-link'> Accesorios </Link> </li>
                    <li> <CartWidget /> </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar