import React from 'react'

import productImg from '../../assets/images/arm-chair-01.jpg'
import {motion} from 'framer-motion'

import { LuPlus } from "react-icons/lu";
import './product_card.css'
import {Col} from "reactstrap";
import {Link} from 'react-router-dom'

const ProductCard = () => {
  return (
    <Col lg='3' md='4'>
        <div className="product_item">
        <div className="product_img">
            <motion.img whileHover={{scale: 0.9}} src={productImg} alt="" />
        </div>
        <div className="p-2 product_info">
        <h5 className="product_name"><Link to="/shop/id">Modern ArmChair</Link></h5>
        <span className="text-center">Chair</span>
        </div>        
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">$299</span>
            <motion.span whileHover={{scale: 1.2}} className='icon'><LuPlus /></motion.span>
        </div>
    </div>
    </Col>
    
  )
}

export default ProductCard
