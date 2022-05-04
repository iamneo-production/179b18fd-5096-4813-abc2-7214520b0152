const validation =(values)=>{

    let errors={};

    if(!values.name){
        errors.name="Name is required"
    }
    if(!values.username){
        errors.username="Username is required"
    }
    if(!values.email){
        errors.email="Email is required"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Enter a valid email"
    }
  
    if(!values.phone){
        errors.phone="Phone number is required"
    }
    if(!values.password){
        errors.password="Password is required"
    }
    if((values.password).length<5){
        errors.passowrd="Passowrd must be more than five characters"
    }
    if(values.ConfirmPassword!==values.password){
        errors.ConfirmPassword="Password and Confirm password do not match"
    }

    return errors;
};

export default validation;