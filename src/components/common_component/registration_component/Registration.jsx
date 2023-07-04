import React, { useContext, useState } from 'react';
import "./Registration.css";
import { Link, useNavigate } from 'react-router-dom';
import img_google from "../../../images/Google__G__Logo.svg.png"
import img_github from "../../../images/GitHub-Mark.png"
import { AuthContext } from '../../../Contexts/UserContext';

const Registration = () => {
    const [error , setErrod]=useState(null);
    const {createUser}=useContext(AuthContext)
    const navigate =useNavigate()
    
    const handleSubmit =(event)=>{

        event.preventDefault();
        const form= event.target;
        const email =form.email.value;
        const password =form.password.value;
        const confrim =form.confrim.value;
        console.log(email,password,confrim)
      

        if(password !== confrim){
            setErrod("Your password did not match")
            return;
        }
      
        createUser (email,password)
        .then (result =>{
            const user =result.user;
            console.log(user)
            form.reset();
            navigate('/')
        })
        .catch (e =>{
            
                console.log(e);
        })


    }



    return (
        <div className='container-lg  mt-5'> 
        <div className='form-container m-auto shadow   rounded'>
            <h1 className='d-flex justify-contain-cnters'>Ragistration</h1>
        <form onSubmit={handleSubmit} className=' form  m-auto'  >
<div className="form-group  ">
<label for="exampleInputEmail1">Email address</label>
<input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div className="form-group mb-2">
<label for="exampleInputPassword1">Password</label>
<input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password"/>
</div>
<div className="form-group mb-2">
<label for="exampleInputPassword1">Password</label>
<input type="password" name='confrim' className="form-control" id="exampleInputconfrim" placeholder="Password"/>
</div>
<p className='text-danger'>{error}</p>


<button type="submit mt-5 " className="btn btn-primary w-100" >Submit</button>

<div className='d-flex justify-content-center my-2'>or</div>
<div className=' login_logo d-flex  justify-content-center my-2'><img src={img_google }alt="" /> <img src={img_github }alt="" />  </div>

</form>
        </div>
    </div >
    );
};

export default Registration;