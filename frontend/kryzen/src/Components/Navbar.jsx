import React,{useContext} from 'react'
import {Link,} from "react-router-dom"
import { UserContext } from '../App'
function Navbar() {
  const {state,dispatch} =useContext(UserContext)
   
  const renderList = ()=>{
    if(state){
      return[
        <li><Link to="/form">Form</Link></li>,
         <li><Link to= "/logout">Logout</Link></li>
        
      ]
    }else{
      return[
        <li><Link to="/form">Form</Link></li>,
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">Signup</Link></li>,

      ]
    }
  }

  return (
	<nav>
    <div className="nav-wrapper">
      <Link to={state?"/" : "/login"} className="brand-logo left">InstaFlick</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {renderList()}
      </ul>
    </div>
  </nav>
  )
}

export default Navbar