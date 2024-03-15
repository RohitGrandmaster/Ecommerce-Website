import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from "../context/MainContext";

function ShoppingCart() {
  const store = useContext(CartContext);

  const totalCartPrice = store.cartItem.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="flex flex-wrap justify-around">
      <div className="border border-black left-1/2 transform -translate-x-1/2 flex justify-center items-center font-extrabold   text-3xl absolute top-3 w-full h-14 bg-green-600">
      <AddShoppingCartIcon /> <span style={{ marginLeft:'20px' }}/>  Shopping Cart 
      </div>
      <Button  onClick={() => store.clearCart()} className="bg-blue-600 absolute top-5 right-96" variant="success">
            Buy now
          </Button>

      <p className="font-extrabold absolute top-7 right-32 text-black">
      <ShoppingCartIcon /> : <span style={{ color: "black" }}>{totalCartPrice}</span>
      </p>

      {store.cartItem.map((item) => (
        <div key={item.id} className="mt-20">
          <img src={item.image} alt={item.name} className="w-52 h-48  border border-black" />
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <button
            onClick={() => store.deleteFromCart(item)}
            style={{ color: "red" }}
          >
            <DeleteIcon />
          </button>{" "}
          <Button className="bg-green-600" variant="success">
            Buy now
          </Button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
