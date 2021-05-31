import Button from '../button';
import { useContext } from 'react';
import{ CatalogueContext } from '../../providers/catalogue';
import { CartContext } from '../../providers/cart';
import { Container, List } from './styles';

const ProductList = ({type}) => {
    const { catalogue } = useContext(CatalogueContext);
    const { cart } = useContext(CartContext);

    return (
        <List>
            {
                type === 'catalogue' &&
                catalogue.map((item, index) => (
                    <Container key={index}>
                        {item.name}
                        <img src={item.img} alt={item.name}/>
                        <p>${item.price}</p>
                        <Button type={type} item={item}/>
                    </Container>
                ))
            }
            {
                type === 'cart' &&
                cart.map((item, index) => (
                    <Container key={index}>
                        {item.name} 
                        <img src={item.img} alt={item.name}/>
                        <Button type={type} item={item}/>
                    </Container>
                ))
            }
        </List>
    )
}

export default ProductList;