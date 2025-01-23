import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./ProductList.css"; 
const FakeAPI = () => {
  return Promise.resolve([
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Alpha Product" },
    { id: 5, name: "Beta Product" },
  ]);
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
