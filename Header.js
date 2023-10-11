import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import AuthContext from './Pages/LoginPage/auth-context'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
  const authCtx=useContext(AuthContext);
  const isLoggedIn=authCtx.isLoggedIn;
  console.log(isLoggedIn);
  const navigate=useNavigate();
  const logoutHandler=(event)=>{
    event.preventDefault();
   authCtx.logout();
    navigate('/Login');
  }

  const storeHandler=(event)=>{
    event.preventDefault();
    if(authCtx.isLoggedIn){
      navigate('/Store');
    }
    else{
      navigate('/Login');
    }
  }
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">The Generics</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/Home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/About">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Contact-us">Contact Us</Link>
      </li>

      
     <li class="nav-item">
        <Link class="nav-link" to="/Store" onClick={storeHandler}>Store</Link>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link" to="/Login">Login</Link>
      </li>

      <li class="nav-item">
        <button class="nav-link" onClick={logoutHandler} type='submit' style={{background:'rgb(149, 115, 243)',fontWeight:'bold',fontStyle:'italic',border:'3px solid rgb(149, 115, 243)'}}>Logout</button>
      </li>
     
    </ul>
  </div>
  <Link to='/Cart' className="cart">
    
    <div className='cartHeading'>YOUR CART</div>
    

    <img src="https://e7.pngegg.com/pngimages/600/348/png-clipart-shopping-cart-online-shopping-shopping-cart-text-logo.png" alt="" srcset="" className='logo'/>
    <div className='items'>{props.cart.length}</div>
    </Link>
 
</nav>
    </div>
  )
}

export default Header
