const express=require("express");
const mysql=require("mysql");
const cors=require("cors");

const app=express();

app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    port: 3306,
    password:"root",
    database:"users",
});

app.post("/register",(req,res)=>{

const Username=req.body.Username;
const Customer_name=req.body.Name;
const Password=req.body.Password;
const Email=req.body.Email;
    db.query(
        "INSERT INTO users (Customer_name,Username,Password,Email) VALUES (?,?,?,?)", 
    [Customer_name,Username,Password,Email],
    (err,result)=>{
        console.log(err);
        
    });
});


app.post("/login",(req,res)=>{

    const username=req.body.username;
    const password=req.body.password;    
        db.query(
            "SELECT * FROM users WHERE username=? AND password=?", 
        [username,password],
        (err,result)=>{
            if(err){
            res.send({err:err})    ;
            }
            
            if(result.length>0){
                res.send(result);
            }
            else{
                res.send({message:"Wrong creditianls"});
            }
                   
        });
    });

app.listen(3001,()=>{
    console.log("running server");
});