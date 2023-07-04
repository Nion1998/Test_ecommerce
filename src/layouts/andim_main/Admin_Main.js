import React, {useState} from "react";
import Customer_Nav from "../../components/customer_components/customer_nav/Customer_Nav";
import {Outlet} from "react-router-dom";
import Admin_sidebar from "../../components/admin_components/admin_sidebar/Admin_sidebar";
import "./Admin_Main.css";

const Admin_Main = () => {
  const [toggle, setToggle] = useState("false");
  function SwapMenu() {
    // setToggle((prevState) => !prevState);
    setToggle(!toggle);
  }

  return (
    <div>
      <Customer_Nav onToggle={SwapMenu}></Customer_Nav>
      <div className="d-flex ">
        <div className={`sidebar-area ${toggle ? "" : "sBar-toggle"}`}>
          <Admin_sidebar toggle={toggle}></Admin_sidebar>
        </div>
        <div
          className={` mt-5 pt-5 px-3 w-100 ${
            toggle ? "outlet_navOn" : "outlet_navOff"
          }`}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Admin_Main;
