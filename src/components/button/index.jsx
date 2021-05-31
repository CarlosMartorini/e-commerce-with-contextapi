import { useContext } from 'react';
import { CartContext } from '../../providers';
import { CatalogueContext } from '../../providers';

const Button = ({type, item}) => {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    const { catalogue, addToCatalogue, removeFromCatalogue } = useContext(CatalogueContext);

    const text = type === 'catalogue' 
    ? (
        'Add to Cart'
    ) : (
        'Remove from Cart'
    );

    const handleClick = () => {
        if (type === 'catalogue') {
            removeFromCatalogue(item);
            addToCart(item);
        } else {
            removeFromCart(item);
            addToCatalogue(item);
        }
    };

    return (
        <button onClick={handleClick}>{text}</button>
    )
}

export default Button;