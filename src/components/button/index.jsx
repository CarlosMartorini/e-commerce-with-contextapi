import { useContext } from 'react';
import { CartContext } from '../../providers/cart';
import { CatalogueContext } from '../../providers/catalogue';
import { InteractButton } from './styles';

const Button = ({type, item}) => {
    const { addToCart, removeFromCart } = useContext(CartContext);
    const { addToCatalogue, removeFromCatalogue } = useContext(CatalogueContext);

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
        <InteractButton onClick={handleClick}>{text}</InteractButton>
    )
}

export default Button;