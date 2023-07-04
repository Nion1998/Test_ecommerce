import React, { useContext, useState } from 'react';
import "./Login.css";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import img_google from "../../../images/Google__G__Logo.svg.png"
import img_github from "../../../images/GitHub-Mark.png"
import { AuthContext } from '../../../Contexts/UserContext';


const Login = () => {
  const [error , setErrod]=useState(null);
    const {login , googlesignIn}=useContext(AuthContext)
    const navigate =useNavigate()
    const location =useLocation();
    const from =location.state?.from.pathname || '/';

   
    const handleGoogleSignin =()=>{
      console.log("submit")
      googlesignIn()
      .then (result => {
        const user =result.user;
        
        if(user.email==="admin@gmail.com"){
          navigate('/admin')
        }
        else{
          navigate(from ,{replace :true})
        }
      })
      .catch (e =>{
        
      })
    }
    
    
    const handleSubmit =(event)=>{
      event.preventDefault();
      const form= event.target;
      const email =form.email.value;
      const password =form.password.value;
      console.log(email,password)
    
    
      login (email,password)
      .then (result =>{
          const user =result.user;
          if(user.email==="admin@gmail.com"){
            navigate('/admin')
          }
          else{
            navigate(from ,{replace :true})
          }
            
          
          
      })
      .catch (error =>console.error(error))


  }

    return (



        <div className='container-lg  mt-5'> 
            <div className='form-container m-auto shadow   rounded'>
                <h1 className='d-flex justify-contain-cnters'>Login</h1>
            <form onSubmit={handleSubmit}  className=' form  m-auto'  >
  <div className="form-group  ">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mb-2">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <div className='  d-flex justify-content-end mb-2'><Link to={"/"} >Forgot password ??</Link></div>
  
  
  <button type="submit mt-5 " className="btn btn-primary w-100" >Submit</button>
    
    
    
</form>
    <div className='d-flex justify-content-center my-2'>or</div>
    <div className=' login_logo d-flex  justify-content-center my-2'>
      <button onClick={handleGoogleSignin}><img src={img_google }  alt="" /></button> 
      <button><img src={img_github }alt="" /> </button>
       </div>

             <div className='d-flex  justify-content-center align-items-center my-2 '>if you have no account.  <Link to={"/registration"} >Please register </Link></div> 
    </div>
            </div>
    );
};

export default Login;