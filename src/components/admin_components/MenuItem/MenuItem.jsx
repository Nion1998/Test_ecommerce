import React from 'react';
import"./MenuItem.css"
import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';



const MenuItem = (item) => {
   
    const {id, title, iconClass, submenus } = item;
   console.log(submenus)
    
    return (
        <div>
        <Accordion.Item className='mt-1' eventKey={id}>
        <Accordion.Header> {title}</Accordion.Header>
        <Accordion.Body>
        {submenus.map((item) => (
             <NavLink to={item.link}><li> {item.title}  </li></NavLink>
          ))}
        </Accordion.Body>
      </Accordion.Item>
        </div>
    );
};

export default MenuItem;