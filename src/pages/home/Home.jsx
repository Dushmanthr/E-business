import React from 'react'

import Home_div from '../../components/Home_Div/Home_div'
import Services from '../.././services/Services'
import TreProducts from '../../components/Tre_products/Tre_products'
import Timer from '../../components/Timer/Timer'
import NewArrival from '../../components/New_Arrival/NewArrival'


const Home = () => {
  return (
    <div> 
        <Home_div/> 

        <div>
          <Services/>
        </div>
        <TreProducts/>

        <div>
          <Timer/>
        </div>
        <div>
          <NewArrival/>
        </div>
        
    </div>
    
  )
}

export default Home
