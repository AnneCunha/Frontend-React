import './Header.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <h1>Pet Care</h1>
        
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/QuemSomos">Quem Somos</NavLink></li>
                <li><NavLink to="/Contatos">Contatos</NavLink></li>
                <li><NavLink to="/Feedback">Feedback</NavLink></li>
            </ul>    
        </nav>
    </header>
  )
}

export default Header