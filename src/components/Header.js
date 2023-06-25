import './Header.css';
import {AiOutlineMenu, AiOutlineShoppingCart} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Header(){
    const {wishProductIds} = useSelector(state => state.wish);
    return(
        <header>
            <div id="header">
                <div><Link to="productList"><AiOutlineMenu /></Link></div>
                <h1><Link to='/'><img src='./images/logo.png' alt='logo'/></Link></h1>
                <div>
                    <Link to="wishList">
                        <span>
                            {wishProductIds.length}    
                        </span>&nbsp;
                        <AiOutlineShoppingCart />
                    </Link>
                </div>
            </div>
        </header>
    );
}