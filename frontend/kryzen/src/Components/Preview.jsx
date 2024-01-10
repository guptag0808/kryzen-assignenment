import React from 'react'
import {useLocation} from 'react-router-dom'

function Preview() {
	const location = useLocation()
	let {name,age,address,photo} = location.state;

	const renderFun=()=>{
		window.open('http://localhost:8000/pdfGenerater')
		
    }
  return (
	<>
	 
      <div className="card" style={{width:"60% " }}>
        <div className="card-image" style={{width:"50%"}}>
          <img src={photo} style={{width:"50%"}}/>
         </div>
        <div className="card-content">
			<h4>{name}</h4>
          <p>{address}</p>
		  <p>{age}</p>
        </div>
      
  </div>
      <button onClick={()=> renderFun()}>Download PDF</button>
	</>
  )
}

export default Preview