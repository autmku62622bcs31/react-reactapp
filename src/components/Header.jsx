import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../assets/react.svg'
function Header() {
    const Navgate  = useNavigate();
  return (
   <div className="pk">
            <nav>
                <ul>
                    <li onClick={()=>{Navgate("/")}}>Home</li>
                    {/* <li onClick={()=>{Navgate("/about")}}>About</li> */}
                    <img src={img} onClick={()=>{Navgate("/about")}} alt="" />
                </ul>
            </nav>
    </div>
  )
}

export default Header;
