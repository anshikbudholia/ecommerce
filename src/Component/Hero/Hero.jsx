import React from 'react'
import './Hero.css'
import hand_pic from '../Assets/hand_pic.jpg'
import arrow from '../Assets/arrow.png'
import hero from '../Assets/hero_img.jpg'
 
function Hero() {
  return (
    <div className='hero'>
<div className="hero-left">
<h2>NEW ARRIVAL ONLY </h2>
<div>
<div className="hand-hand-icon">
    <p>new</p>
   <img src={hand_pic} alt="" />
</div>
<p>Collections</p>
<p>For Everyone</p>
</div>
<div className="hero-latest-btn">
<div>Latest Collection </div>
    <img src={arrow} alt="" />
   
</div>
</div>
<div className="hero-right">
<img src={hero} alt="" width={400}/>
</div>
    </div>
  )
}

export default Hero
