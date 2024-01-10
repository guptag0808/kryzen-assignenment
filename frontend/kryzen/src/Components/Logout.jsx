import React from 'react'
import {useNavigate} from 'react-router-dom'

import M from 'materialize-css'
function Logout() {

  
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  };
  
   const logoutFun= ()=>{
	fetch("http://localhost:8000/logout")
    .then((res)=>{
       
        M.toast({html: res.msg , classes:'#00bfa5 teal accent-4'})
        
		localStorage.removeItem("Token");
         
          navigateToLogin()
       
    })
    .catch(err=>{
       console.log(err.message)
    })
   } 
   return (
	<>
	 {logoutFun}
	</>
  )
   
  }
  
  


export default Logout