import {AiOutlineMenu} from 'react-icons/ai';

export default function Header(){
    return(
        <header>
            <div id="header">
                <p>{AiOutlineMenu}</p>
                <a href='#'><img src='./images/logo.j' alt='logo'/></a>
            </div>
        </header>
    );
}