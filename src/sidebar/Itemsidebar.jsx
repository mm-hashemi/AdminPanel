import React from 'react'
import { NavLink } from 'react-router-dom'

function Itemsidebar({icon,title,routOf}) {
  console.log(routOf);
  
  return (
    <>
    <NavLink to={routOf} className={({isActive})=>{return isActive ? 'activeItem' : ''}}>
       <li className='itemsMenu'>
                    <i className={icon}></i>
                  <span className='itemTitle'>
                  {title}
                    </span>  
        </li>
    </NavLink>
  
    </>
  )
}

export default Itemsidebar
