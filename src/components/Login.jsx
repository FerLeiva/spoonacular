import React from 'react';

export default function  Login() {
    const [input, setInput] = React.useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = React.useState({});
    
    const handleInputChange = (e) => {
        setInput({
        ...input,
        [e.target.name]: e.target.value,
        })
    }

    const handleError = (e) => {
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
            }))
    };  
    
    const handleSubmit = (e) => {
        e.preventDefault()
    };  


  return (
      <form onSubmit={handleSubmit}>
      <h2>
          Login
      </h2>
      <div>
       <div>
         <label>Email</label>
         <input className={`${errors.email && 'danger'}`}
         type="text" name="email" onChange={handleInputChange} value={input.email} />
         {errors.email && (
         <p className="danger">{errors.email}</p>
         )}
       </div>
       <div>
         <label>Password:</label>
         <input className={`${errors.password && 'danger'}`}
         type="text" name="password" onChange={handleInputChange} value={input.password} />
         {errors.password && (
         <p className="danger">{errors.password}</p>
         )}
       </div>
        <button onClick={handleError}>Submit</button>
      </div>
    </form>
  )
}

export function validate(input){
    let errors = {};
    if (!input.email) {
      errors.email = "Username is required";
    }
    if (!input.password) {
      errors.password = "Password is required";
    }
    return errors;
}