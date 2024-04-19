import { useContext } from 'react';
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems,items)=> {
        return totalNumberOfItems + items.quantity;
    },0);
    
    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return <header id='main-header'>
        <div id='title'>
            <img src={logoImg} alt="A resturant" />
            <h1>FLAVOR JUNCTION</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
        </nav>
    </header>
}