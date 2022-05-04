const validationlogin =(lusername,lpassword)=>{

    let lerrors={};

    
    if(!lusername){
        lerrors.lusername="Username is required"
    }
   
    if(!lpassword){
        lerrors.lpassword="Password is required"
    }
    

    return lerrors;
};

export default validationlogin;