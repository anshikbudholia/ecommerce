import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import logo_cart from '../Assets/logo_cart.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [menu,setMenu] = useState("shop")
  return (
    <>
    <div className='navbar'>
<div className="nav-logo">
  <img src={logo} alt="" width={100}/>
  <p>SHOPPER</p>
  <ul className="nav-menu">
    <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("mens")}}><Link  style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("womens")}}><Link  style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("kids")}}><Link   style={{textDecoration:'none'}}to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
  </ul>
  <div className="nav-login-cart">
  <Link to='/login'><button>Login</button></Link>
  <Link to='/cart'><img src={logo_cart} alt="" width={40} /></Link>
 <div className="nav-cart-count">0</div>
</div>
</div>
    </div>
    </>
  )
}

export default Navbar