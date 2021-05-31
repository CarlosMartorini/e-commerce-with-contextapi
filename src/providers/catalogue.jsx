import { createContext, useState } from 'react';
import monitor from '../assets/monitor.jpg';
import mouse from '../assets/mouse.jpeg';
import teclado from '../assets/teclado.jpg';
import notebook from '../assets/notebook.jpg';

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({children}) => {
    
    const [ catalogue, setCatalogue ] = useState([
        { name: "Notebook", price: 4999, img: notebook},
        { name: "Mouse", price: 139, img: mouse},
        { name: "Monitor", price: 899, img: monitor},
        { name: "Teclado", price: 199, img: teclado},
    ]);

    const addToCatalogue = (item) => {
        setCatalogue([...catalogue, item]);
    };

    const removeFromCatalogue = (item) => {
        const newCatalogue = catalogue.filter(
            (itemOnCatalogue) => itemOnCatalogue.name !== item.name
        );

        setCatalogue(newCatalogue);
    }

    return(
        <CatalogueContext.Provider
            value={{catalogue, addToCatalogue, removeFromCatalogue}}
        >
            {children}
        </CatalogueContext.Provider>
    )
}