import React from 'react';
import './Admin_sidebar.css'
import MenuItem from '../MenuItem/MenuItem';
import { Accordion } from 'react-bootstrap';
import {SidebarData} from '../MenuItem/SidebarData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Admin_sidebar = () => {
    
  
    return (
        <div className='admin_sidebar'>
          
          <Accordion defaultActiveKey="0" flush>

        <Accordion.Item className='mt-1 dashboard' eventKey="0">
        <Link to={"/admin"}><Accordion.Header>Dashboard</Accordion.Header></Link>
        </Accordion.Item>

            
          {SidebarData.map((item, index) => (
            <MenuItem
              key={index}
              id={index}
              title={item.title}
              iconClass={item.iconClass}
              submenus={item.submenus || []}
            />
          ))}
      
          </Accordion>
    
        </div>
    );
};

export default Admin_sidebar;