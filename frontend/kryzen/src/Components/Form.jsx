import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import M from 'materialize-css'
function Form() {
  const [age, setAge] = useState("")
  const [address, setAddress] = useState("")
  const [name, setName] = useState("")
  const [photo,setPhoto] = useState('')
  const [url,setUrl] = useState("")

   useEffect(()=>{
      if(url){
		  fetch("http://localhost:8000/data",{
		  method:"post",
		  headers:{
			"Content-Type":"application/json",
			"Authorization":localStorage.getItem("Token")
		  },
		  body:JSON.stringify({
			name,
			age,
			address,
			photo:url})
			 
		})
		.then(res=>res.json())
		.then(data=>{
		   if(data.error){
			M.toast({html: data.error ,classes:'#b71c1c red darken-4'})
		   }else{
			M.toast({html: data.msg , classes:'#00bfa5 teal accent-4'})
			console.log(data)
			  navigate("/preview",{state:data.newData})
		   }
		})
		.catch(err=>{
		   console.log(err.message)
		})
	 }
   },[url]) ;
  //redirect to Home page
  
  const navigate= useNavigate()
  
  //this is for cloudaniry
    const cloudFun= ()=>{
		const data = new FormData()
		data.append("file",photo)
		data.append("upload_preset","FotoFlick")
		data.append("cloud_name","dlhjyckpv")

		fetch('https://api.cloudinary.com/v1_1/dlhjyckpv/image/upload',{
			method:"post",
			body:data
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data)
			setUrl(data.url)
			
		})
		.catch(err=>{
			console.log(err)
		})
	}

	//calling createPost routes
	
  return (
	<div className='card input-field' style={{
		maxWidth:"500px",
		margin:"20px auto",
		padding:"20px",
		textAlign:"center"
	}}>
		 <input type="text" placeholder='Name' 
		  value={name}
		  onChange={(e)=>setName(e.target.value)}
		 />
		 <input type="text" placeholder='Age' 
		  value={age}
		  onChange={(e)=>setAge(e.target.value)} 
		 />
		  <input type="text" placeholder='Address' 
		  value={address}
		  onChange={(e)=>setAddress(e.target.value)} 
		 />
		<div className="file-field input-field">
			<div className="btn">
				<span>Upload Image</span>
				<input type="file" 
				 
				onChange={(e)=>setPhoto(e.target.files[0])}
				 />
			</div>
			<div className="file-path-wrapper">
				<input className="file-path validate" type="text" />
			</div>
       </div>
	   <button className="btn waves-effect waves-light" 
	   onClick={()=>cloudFun()}
	    >
         Submit Post
      </button>
	</div>
  )
}

export default Form