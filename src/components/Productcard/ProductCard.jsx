import React from 'react'

import productImg from '../../assets/images/arm-chair-01.jpg'
import {motion} from 'framer-motion'

import { LuPlus } from "react-icons/lu";
import './product_card.css'
import {Col} from "reactstrap";

const ProductCard = () => {
  return (
    <Col lg='3' md='4'>
        <div className="product_item">
        <div className="product_img">
            <img src={productImg} alt="" />
        </div>
        <h3 className="product_name">modern ArmChair</h3>
        <span>Chair</span>
        <div className="product_card-bottom">
            <span className="price">$299</span>
            <span><LuPlus /></span>
        </div>
    </div>
    </Col>
    
  )
}

export default ProductCard
