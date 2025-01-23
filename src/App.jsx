import React, { useState, useEffect, useMemo, useCallback, createContext, useContext } from "react";
import "./App.css"; // Import the CSS file

const FakeAPI = () => {
  return Promise.resolve([
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Alpha Product" },
    { id: 5, name: "Beta Product" },
  ]);
};

// Create a Cart Context
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    FakeAPI().then((data) => setProducts(data));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  return (
    <div className="container">
      <h1 className="header">Filterable Product List</h1>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
        <button onClick={clearSearch} className="button">
          Clear Search
        </button>
      </div>
      <p className="count">Products Found: {filteredProducts.length}</p>
      <ul className="list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="listItem">
            {product.name}
            <button
              onClick={() => addToCart(product)}
              className="addToCartButton"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div className="cartContainer">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul className="cartList">
            {cart.map((item, index) => (
              <li key={index} className="cartItem">
                {item.name}
              </li>
            ))}
          </ul>
          <button onClick={clearCart} className="button">
            Clear Cart
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;