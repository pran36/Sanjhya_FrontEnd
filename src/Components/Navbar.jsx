import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar sticky-top">
        <div className='container'>
            <a class="navbar-brand" href="#"><img src='./Images/PNG-Sanjhya-Club.png' alt="image" /></a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Join a Class</a></li>
                {/* <button>Download CV</button> */}
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar