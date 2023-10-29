import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import {motion} from "framer-motion"

import {Container, Row} from 'reactstrap'
import Logo from "../../assets/images/eco-logo.png"
import userIcon from "../../assets/images/user-icon.png"

import { BsBag } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";

const nav_links = [
  {
  path:'home',
  display: 'Home'
},
{
  path: 'shop',
  display: 'Shop'
},
{
  path: 'cart',
  display: 'Cart'
}
]


const Navbar = () => {
  return (
    <navbar className="navbar">
      <Container>
      <Row>
        <div className="nav_wrapper">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <div>
              <h1>GiftGalaxy</h1>
              {/* <p>Since 2023</p> */}
            </div>
          </div>
          
          <div className="navigation">
            <ul className="menu">
              {
                nav_links.map((item, index)=>(
                  <li className="nav_item" key={index}>
                    <NavLink to={item.path} className={(navClass)=>
                    navClass.isActive ? 'nav_active' : ''}>{item.display}</NavLink>
                  </li>
                ))
              }
               
            </ul>
          </div>

          <div className="nav_icons">
            <span className="fav_icon">
              <FiHeart/>
              <span className="badge">1</span>
            </span>

            <span className="cart_icon">
            <BsBag/>
            <span className="badge">1</span>
            </span>

            <span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="" /></span>
          </div>
          <div className="mobile_menu">
            <span><BiMenu/></span>
          </div>
        </div>
      </Row>
    </Container>
    </navbar>
    
  )
}

export default Navbar
