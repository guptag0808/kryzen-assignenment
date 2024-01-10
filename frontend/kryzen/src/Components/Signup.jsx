import React from 'react'
import {Link ,useNavigate} from 'react-router-dom'

import { useState} from 'react'
import M from 'materialize-css'
function Signup() {
  const [username,setusername] =useState("")

  const [password,setPassword] =useState("")
  
  
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  };
  const postFun=()=>{
     if(!passwordRegex.test(password)){
      return M.toast({html: ' Your Password should have Atleast 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character' ,classes:'#b71c1c red darken-4'})
    }
    fetch("http://localhost:8000/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({username,password})
       
    })
    .then((res)=>res.json())
    .then((data)=>{
       if(data.error){
        M.toast({html: data.error ,classes:'#b71c1c red darken-4'})
       }else{
        M.toast({html: data.msg , classes:'#00bfa5 teal accent-4'})
          navigateToLogin()
       }
    })
    .catch(err=>{
       console.log(err.message)
    })

  }
  return (
   <>
  <div className='myCard'>
    <div className="card login-card" >
       <h1>FotoFlick</h1>
       <input type="text"  placeholder='Enter Your Name' value={username} 
         onChange={(e)=>setusername(e.target.value)}/>
       
       <input type="password" placeholder='Enter Your Password'  value={password} 
         onChange={(e)=>setPassword(e.target.value)}/>
       <button className="btn waves-effect waves-light"   onClick={postFun}>
        Login 
      </button>
      <p>Already have an account ?<Link to ="/login" > <span className='login-span'>Login</span></Link></p>
    </div>
     
 </div>
   </>
  )
}

export default Signup