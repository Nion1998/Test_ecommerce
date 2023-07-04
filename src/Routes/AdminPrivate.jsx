import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
const AdminPrivate = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation();
    if(loading){
        return <div className=' m-5 p-5'><div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div></div>
    }
    if(user &&user.email==="admin@gmail.com"){
        return children;
    }
    return <Navigate to='/login'  state={{ from: location }} replace></Navigate>
};

export default AdminPrivate;