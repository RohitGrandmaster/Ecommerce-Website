import React, { useState, createContext } from "react";

const CartContext = createContext();

function MainContext({ children }) {
  const [cartItem, setCartItem] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);

  const [searchItem ,setSearchItem] = useState("")

  const addToCart = (item) => {
    setCartItem((prevCartItem) => [...prevCartItem, item]);

    setCartNumber(cartNumber + 1);
  };

  // const filteredProducts = products.filter(product =>
  //   product.code.toLowerCase().includes(searchItem.toLowerCase())
  // );

  // const handleSearch = (e) => {
  //   setSearchItem(e.target.value);
  // };

  const deleteFromCart = (item) => {
    setCartItem(cartItem.filter((cartItem) => cartItem.id !== item.id));
    setCartNumber(cartNumber - 1);
  };

  const clearCart = () => {
    alert("Thanks for purchasing!");
    setCartItem([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItem, addToCart, cartNumber, deleteFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, MainContext };
