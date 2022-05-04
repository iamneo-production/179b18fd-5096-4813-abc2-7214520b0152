import React,{useState,useEffect} from "react";
import validation from "./validation";
import Axios from 'axios';

const useForm=(submitForm)=>{

const [values,setValues]=useState({
    username:"",
    name:"",
    email:"",
    type:"",
    phone:"",
    password:"",
    ConfirmPassword:"",
});


const [errors,setErrors]=useState({});
const [dataIsCorrect,setDataIsCorrect]=useState(false);
const handleChange=(event)=>{
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
};
const handleFormSubmit=(event)=>{
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
    Axios.post("http://localhost:3001/register",{
        Name:values.name,
        Username:values.username,
        Password:values.password,
        Email:values.email,
    }).then((response)=>{
        console.log(response);
    });
};

useEffect(()=>{
    if(Object.keys(errors).length===0 && dataIsCorrect){
        submitForm(true);
    }

},[errors]);
return {handleChange,handleFormSubmit,errors,values};
};
export default useForm;
