import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/MainContext";

function Home({ product }) {
  const productstore = useContext(CartContext);


  


  const products = [
    {
      id: 1,
      name: "Blue Butterfly Diamond Ring 1",
      price: 1286.99,
      image: " src/Image/Blue Butterfly Diamond Ring 1.png",
      url: "https://www.google.com ",
    },
    {
      id: 2,
      name: "Blue Butterfly Diamond Ring 2",
      price: 1462.99,
      image: "src/Image/Blue Butterfly Diamond Ring 5.png",
      url: "https://www.google.com/search?q=ring&rlz=1C1ONGR_enIN1099IN1099&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzMjU2MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 3,
      name: "Blue Butterfly Diamond Ring 3",
      price: 1372.99,
      image: "src/Image/Blue Butterfly Diamond Ring 2.png",
      url: "https://www.google.com/search?q=ring&rlz=1C1ONGR_enIN1099IN1099&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzMjU2MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 4,
      name: "Blue Butterfly Diamond Ring 4",
      price: 1623.99,
      image: "src/Image/Blue Butterfly Diamond Ring 3.png",
      url: "https://www.google.com/search?q=ring&rlz=1C1ONGR_enIN1099IN1099&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzMjU2MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 5,
      name: "Blue Butterfly Diamond Ring 5",
      price: 1234.99,
      image: "src/Image/Blue Butterfly Diamond Ring 4.png",
      url: "https://www.google.com/search?q=ring&rlz=1C1ONGR_enIN1099IN1099&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzMjU2MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 6,
      name: "Blue Butterfly Diamond Ring 6",
      price: 1524.99,
      image: "src/Image/Blue Butterfly Diamond Ring 6.png",
      url: "https://www.google.com/search?q=ring&rlz=1C1ONGR_enIN1099IN1099&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzMjU2MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 7,
      name: "Blue Butterfly Diamond Ring 7",
      price: 1887.99,
      image: " src/Image/Blue Butterfly Diamond Ring 7.png",
      url: "https://www.google.com/search?q=ring&rlz=1C1ONGR_enIN1099IN1099&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzMjU2MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 8,
      name: "Pearl Ring Jewellery 8",
      price: 1958.99,
      image: "src/Image/Pearl Ring Jewellery 8.png",
      url: "https://www.google.com/search?q=ring&rlz=1C1ONGR_enIN1099IN1099&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzMjU2MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 9,
      name: "Pearl Ring Jewellery 9",
      price: 1767.99,
      image: "src/Image/Pearl Ring Jewellery 9.png",
      url: "https://www.google.com/search?q=ring&rlz=1C1ONGR_enIN1099IN1099&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzMjU2MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 10,
      name: "Pearl Ring Jewellery 10",
      price: 1576.99,
      image: "src/Image/Pearl Ring Jewellery 10.png",
      url: "https://www.google.com/search?q=ring&rlz=1C1ONGR_enIN1099IN1099&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzMjU2MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 11,
      name: "Pearl Ring Jewellery 11",
      price: 1678.99,
      image: "src/Image/Pearl Ring Jewellery 11.png",
      url: "https://www.google.com/search?q=ring&rlz=1C1ONGR_enIN1099IN1099&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzMjU2MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 12,
      name: "Pearl Ring Jewellery 12",
      price: 1844.99,
      image: "src/Image/Pearl Ring Jewellery 12.png",
      url: "https://www.google.com/search?q=ring&rlz=1C1ONGR_enIN1099IN1099&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzMjU2MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
    },
  ];

 
  return (
    <div className="flex flex-wrap justify-around">
      <h1 className="w-full text-center mt-3 mb-14 text-3xl font-extrabold text-green-500">
        RING PRODUCT
      </h1>
      {products.map((product) => (
        <div key={product.id} className="w-1/4 p-4">
          <a href={product.url}>
            <img
              src={product.image}
              alt={product.name}
              className="w-70 h-60  border border-black"
            />
          </a>
          <h2 className="text-lg">{product.name}</h2>
          <p className="text-gray-600">price: {product.price}</p>
          <Button
            className="bg-blue-600"
            variant="primary"
            onClick={() => productstore.addToCart(product)}
          >
            Add Cart
          </Button>{" "}
          <Button className="bg-green-600" variant="success">
            Buy now
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Home;

 