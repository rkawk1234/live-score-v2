import Navbar from './Navbar';
import {useState} from 'react'
import jwt_decode from 'jwt-decode'
// import { useState } from 'react'
// ...
import { Link } from 'react-router-dom';

const Header = () => {
  // const [curstate, setCurstate] = useState(false)
  const token = localStorage.getItem('token')
  const [bool,setBool] = useState(true)
  var user

  if (token) {
    user = jwt_decode(token)

  }
  else {
    user = {}
  }


  // const [bool, setBool] = useState(token)

  return (

    <header>
      <div className='flex bg-black text-white justify-between'>

        <div>Balance: {user ? user.points:""}</div>
        <div className='border '>
          <button onClick= {()=>{
          localStorage.clear()
          setBool(!bool)
          alert("You just logged out!")
        }
        }>Logout</button> </div>

      </div>

      <div className="nav-area">
        <Link to="/" className="logo">
          Live Score
        </Link>
        
        <Navbar />

      </div>

    </header>
  );
};

export default Header;
