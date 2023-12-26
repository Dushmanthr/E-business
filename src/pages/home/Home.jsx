import React from 'react'

import Home_div from '../../components/Home_Div/Home_div'
import Services from '../.././services/Services'
import TreProducts from '../../components/Tre_products/Tre_products'
import ProductList from '../../components/ProductList/ProductList'
import { Row } from 'reactstrap'

const Home = () => {
  return (
    <div> 
        <Home_div/> 

        <div>
          <Services/>
        </div>
        <TreProducts/>
        <Row>
          <ProductList/>
        </Row>
    </div>
    
  )
}

export default Home
