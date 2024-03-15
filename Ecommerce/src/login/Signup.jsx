import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Signup() {
  return (
    <div className="flex justify-center items-center h-screen font-bold">
      <h1 className='text-green-600 font-extrabold absolute top-40 text-2xl'> Welcome! Ecommerce Signup Page </h1>
      
      <Form style={{ width: '30rem' }} className="border border-black rounded-lg shadow-lg p-6">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{ borderWidth: '2px', borderStyle: 'solid', fontWeight: 'bold' }} />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{ borderWidth: '2px', fontWeight: 'bold' }} />
        </Form.Group>

        <Button className='bg-blue-600' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
