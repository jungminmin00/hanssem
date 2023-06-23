import './Header.css';
import {AiOutlineMenu, AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <div id="header">
                <p><Link to="productList"><AiOutlineMenu /></Link></p>
                <Link to='/'><img src='./images/logo.png' alt='logo'/></Link>
                <p><Link to=""><AiOutlineShoppingCart /></Link></p>
            </div>
        </header>
    );
}