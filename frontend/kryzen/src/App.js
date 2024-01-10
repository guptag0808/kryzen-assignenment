
import React,{useEffect,createContext,useReducer} from 'react'
import Navbar from './Components/Navbar'

import { BrowserRouter, Route ,Routes,useNavigate} from "react-router-dom"

import Home from "./Components/Home"
import Form from "./Components/Form"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Logout from "./Components/Logout"
import Preview from './Components/Preview'
import './App.css';

import {reducer,initialState} from "./reducers/userReducers"
 
export const UserContext = createContext()

//checking user is login or not 
const Routing =() =>{

    const navigate= useNavigate()
    const navigateToHome = () => {
      navigate('/');
    }; const navigateToLogin = () => {
      navigate('/login');
    };

    useEffect(()=>{
      const user= JSON.parse(localStorage.getItem('user'))
       if(user){
         navigateToHome()
       }else{
        navigateToLogin()
       }
    },[])
    return (
      <>
        <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route path="/login" element ={ <Login />} />
            <Route path="/signup" element = {<Signup />} /> 
            <Route path="/Form" element = { <Form />} />
            <Route path="/logout" element = { < Logout />} />
            <Route path="/preview" element = { <Preview />} />
          
          </Routes>
    </>
    )
}

function App() {
  const [state,dispatch] =useReducer(reducer,initialState)
  return (
    <UserContext.Provider value= {{state,dispatch}}>
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
