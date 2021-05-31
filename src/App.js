import ProductList from "./components/product-list";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
       <CartProvider>
         <h3>Catalogue</h3>
        <ProductList type="catalogue" />
        <h3>Cart</h3>
        <ProductList type="cart" />
      </CartProvider>
     </CatalogueProvider>
    </div>
  );
}

export default App;