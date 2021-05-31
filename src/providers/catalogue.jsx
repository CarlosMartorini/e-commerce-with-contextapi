import { createContext, useState } from 'react';

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({children}) => {
    
    const [ catalogue, setCatalogue ] = useState([
        { name: "Notebook", price: 4999 },
        { name: "Mouse", price: 139 },
        { name: "Monitor", price: 899 },
        { name: "Teclado", price: 199 },
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