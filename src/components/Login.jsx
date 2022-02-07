import React from 'react';
const axios = require('axios');
import '../styles/login.css'
import { Navigate, useNavigate } from 'react-router-dom';

export default function  Login() {
  const [input, setInput] = React.useState({
    email: '',
    password: '',
    token: false,
  });
  const [errors, setErrors] = React.useState({});
  
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
  }
  
  const validate = (e) => {
    if (input.email === '') {
      errors.email = "Email is required";
      alert(errors.email);
      return errors;
    }
    if (input.password === '') {
      errors.password = "Password is required";
      alert(errors.password)
      return errors;
    }
    else {
      console.log("Haciendo POST")
      axios.post('http://challenge-react.alkemy.org/', JSON.stringify({"email":input.email,"password":input.password}),
      {headers: {'Content-Type':'application/json'}})
      .then(response => {
        input.token = response.data.token
        console.log(input)
        const navigate = useNavigate();
        navigate("/home");
      })
      .catch(error => {
         alert(`Ha ocurrido un error: ${error}`);
      })
      
    }
  }

  return (

  <main className="form-signin">
  <form onSubmit={handleLogin}>
    <img className="mb-4" src="https://spoonacular.com/application/frontend/images/logo-simple-framed-green-gradient.svg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Please log in</h1>

    <div className="form-floating">
      <input type="email" name="email" value={input.email} onChange={handleInputChange} className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" name="password" value={input.password} onChange={handleInputChange} className="form-control" id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-success" onClick={validate} type="submit">Log in</button>
  </form>
</main>
  );
};