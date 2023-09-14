import './Header.css'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'

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
                <li><Button variant={primary}>login</Button></li>
                <li><Button variant={secondary}>cadastrar</Button></li>

            </ul>    
        </nav>
    </header>
  )
}

export default Header