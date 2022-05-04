import React,{useEffect, useState} from "react";
import useForm from "./useForm";
import Login from "./login";
import multifactor from "./Multifactor";
import {Navigate, useNavigate ,useParams} from "react-router-dom";
import Axios from "axios";

const SignupForm=({submitForm})=>{
   const{handleChange,handleFormSubmit,values,errors}=useForm(submitForm);
  return (
  <div className="container">
      <div className="app-wrapper">

            {/*<div className="login">
              <Login />
            </div>*/}
            <div>
                <title>Sign Up</title>
            </div>

          <div>
              <h2 className="title">Create Account</h2>
          </div>



         {/* <div>
          <label className="label">Account Type</label>
              <select className="userType" 
              onChange={handleChange}>
                <option disabled selected value> -- select an option -- </option>
                <option value="Admin">Admin</option>
                <option value="Driver">Driver</option>
                <option value="Customer">Customer</option>
              </select>

              
        </div>*/}
          

          <div className="name">
              <label className="label">Name</label>
              <input 
              className="input" 
              type="text"  
              name="name" 
              value={values.name}
              onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="username">
              <label className="label">Username</label>
              <input 
              className="input" 
              type="text"  
              name="username" 
              value={values.username}
              onChange={handleChange}
              />
              {errors.username && <p className="error">{errors.username}</p>}
          </div>


          <div className="Email">
              <label className="label">Email</label>
              <input 
              className="input" 
              type="email" 
              name="email" 
              value={values.email}
              onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="Phone">
              <label className="label">Phone number</label>
              <input 
              className="input" 
              type="tel" 
              name="phone" 
              value={values.phone}
              onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="Password">
              <label className="label">Password</label>
              <input 
              className="input" 
              type="password" 
              name="password" 
              value={values.password}
              onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="ConfirmPassword">
              <label className="label">Confirm Password</label>
              <input 
              className="input" 
              type="password" 
              name="ConfirmPassword" 
              value={values.ConfirmPassword}
              onChange={handleChange}
              />
              {errors.ConfirmPassword && <p className="error">{errors.ConfirmPassword}</p>}
          </div>

          <div>
              <button 
              className="submit" 
              onClick={handleFormSubmit}>Register</button>
          </div>

      </div>

  </div>
  );
};

export default SignupForm;

