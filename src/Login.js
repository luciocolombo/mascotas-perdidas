import { React, useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  let history = useHistory();

  const instance = axios.create({
    withCredentials: true,
  });

  function onClick(e) {
    e.preventDefault();
    instance
      .post('http://localhost:4000/login', { email: email, password: password })
      .then((res) =>
        res.data.logged === 'incorrect login'
          ? alert('Acceso incorrecto')
          : loginNow(res)
      );
  }

  function loginNow(res) {
    localStorage.setItem('state', 'logged');
    localStorage.setItem('user', email);
    localStorage.setItem('userid', res.data.userId);
    /*   console.log(res); */
    history.push('/reportar');
  }

  function goRegister() {
    history.push('/register');
  }
  return (
    <div>
      <Container className="loginregister background login container col-3 border shadow bg-white">
        <Form>
          <h2>Login</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div>
            <Button
              variant="btn btn-primary w-25"
              type="submit"
              onClick={onClick}
            >
              Login
            </Button>
            <Button variant="outline-secondary ml-2" onClick={goRegister}>
              Register instead
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
