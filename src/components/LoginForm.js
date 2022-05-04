import React,{useState,useEffect} from "react";
//import useForm from "./useForm";
import {Navigate, useNavigate ,useParams} from "react-router-dom";
import Home from "./Home";
import cprofile from "./cprofile";
import Axios from "axios";
import validationlogin from "./validationlogin";

const LoginForm=(submitForm)=>{
   let navigate=useNavigate();
   //let {username}=useParams();
// const [values,setValues]=useState({
//     lusername:"",
//     lpassword:"",
// });

const[lusername,setlusername]=useState("");
const[lpassword,setlpassword]=useState("");

const[loginstatus,setloginstatus]=useState("");

const [lerrors,setlErrors]=useState({});
const [dataIsCorrect,setDataIsCorrect]=useState(false);

const handleFormSubmit=(event)=>{
    event.preventDefault();
    setlErrors(validationlogin(lusername,lpassword));
    setDataIsCorrect(true);
    Axios.post("http://localhost:3001/login",{
        username:lusername,
        password:lpassword,
    }).then((response)=>{
        if(response.data.message){
            setloginstatus(response.data.message)
        }
        else{
            setloginstatus(response.data[0].username)
            //alert("Login success")
        }
    });
    //navigate("/cprofile");
};

// const handleChange=(event)=>{
//     setValues({
//         ...values,
//         [event.target.name]: event.target.value,
//     });
// };
useEffect(()=>{
    if(Object.keys(lerrors).length===0 && dataIsCorrect){
        submitForm(true);
    }

},[lerrors]);
return(
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Login</h2>
                </div>

                <div className="username">
                <label className="label">Username</label>
                    <input 
                    className="input" 
                    type="text"  
                    name="lusername" 
                    onChange={(e)=>{
                        setlusername(e.target.value);
                    }}
                    
                />
                {lerrors.lusername && <p className="error">{lerrors.lusername}</p>}
                </div>

                <div className="Password">
                    <label className="label">Password</label>
                    <input 
                    className="input" 
                    type="password" 
                    name="lpassword" 
                    onChange={(e)=>{
                        setlpassword(e.target.value);
                    }}
                    
                />
                {lerrors.lpassword && <p className="error">{lerrors.lpassword}</p>}
                </div>

                <div>
                    <button
                    className="submit"
                    onClick={handleFormSubmit}>Login</button>
                </div>

                <h2>{loginstatus}</h2>
            </div>
            
        </div>
    );
    
};



export default LoginForm;

