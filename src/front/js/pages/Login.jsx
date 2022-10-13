import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let initialState = {
    email: "",
    password: "",
  };

  const { actions } = useContext(Context);
  const [userLogin, setUserLogin] = useState(initialState);

  let navigate = useNavigate();

  const handleChange = ({ target }) => {
    setUserLogin({
      ...userLogin,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => { ///para quitar el burbujeo 
    event.preventDefault();

    if (userLogin.email.trim() != "" && userLogin.password.trim() != "") {
      let response = await actions.login(userLogin);
      if (response) {
        navigate("/images");
        setUserLogin(initialState)
      } else {
        alert("todo mal");
      }
    } else {
      console.log("todos los campos  son obligatorios");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          onChange={handleChange}
          value={userLogin.email}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          onChange={handleChange}
          value={userLogin.password}
        />
      </div>
   
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
