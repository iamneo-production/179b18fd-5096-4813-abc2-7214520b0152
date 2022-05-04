import React,{useState} from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import SignupForm from "./SignupForm";
import Multifactor from "./Multifactor";
import LoginForm from "./LoginForm";
import Home from "./Home";


const Form=()=>{
  const [formIsSubmitted,setFormIsSubmitted]=useState(false);
  const submitForm=()=>{
    setFormIsSubmitted(true);
  };
  return (
    <Router>
      <nav className="navbar">
        <Link className="Link" to="/Home">Home</Link>
        <Link className="Link" to="/Login">Login</Link>
        <Link className="Link" to="/SignUp">SignUp</Link>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<LoginForm/>}/>
        <Route path="/SignUp" element={!formIsSubmitted?(<SignupForm submitForm={submitForm}/>):<Multifactor/>}/>
        <Route path="*" element={<Home/>}/>

      </Routes>
    </Router>
  // <div>
  //     <LoginForm />
  //     {!formIsSubmitted?(<SignupForm submitForm={submitForm}/>):<Multifactor/>}
  // </div>
  );
};


export default Form;

