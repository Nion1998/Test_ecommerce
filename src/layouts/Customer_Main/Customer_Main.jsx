import React from 'react';
import Customer_Nav from '../../components/customer_components/customer_nav/Customer_Nav';
import { Outlet } from 'react-router-dom';

const Customer_Main = () => {
    return (
        <div>
            <Customer_Nav></Customer_Nav>
            <div className="mt-5 pt-5">
            <Outlet ></Outlet>
            </div>
            
        </div>
    );
};

export default Customer_Main;