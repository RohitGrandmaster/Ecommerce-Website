import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Email: ${inputValue.email}\nPassword: ${inputValue.password}`);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen font-bold relative">
      <div className="border border-black w-full h-36 bg-lime-600 absolute top-0 left-0"></div>
      <div className="font-extrabold text-lg absolute top-20 right-2 text-white">
        MCA Computer Science <br /> CHANDIGARH UNIVERSITY{" "}
      </div>
      <div className="font-extrabold text-5xl absolute top-3 left-1/2 transform -translate-x-1/2 flex justify-center items-center text-rose-600">
        HACKING GRAND MASTER
      </div>
      <div className="font-extrabold text-2xl absolute top-24 left-1/2 transform -translate-x-1/2 flex justify-center items-center text-white">
        SOFTWARE ENGINEER
      </div>

      <h1 className="text-pink-600 font-extrabold absolute top-40 text-2xl">
        Welcome! Ecommerce Login Page
      </h1>
      <Form
        style={{ width: "30rem" }}
        className="border border-black rounded-lg shadow-lg p-6"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={inputValue.email}
            onChange={handleChange}
            style={{
              borderWidth: "2px",
              borderStyle: "solid",
              fontWeight: "bold",
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={inputValue.password}
            onChange={handleChange}
            style={{ borderWidth: "2px", fontWeight: "bold" }}
          />
        </Form.Group>

        <Button className="bg-blue-600" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
