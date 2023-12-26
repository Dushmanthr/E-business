import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './tre_products.css'

const tre_products = () => {
  return (
    <section className="trending_products">
        <Container>
           <Row>
            <Col lg='12' className="text-center">
                <h2 className="section_title">Trending Products</h2>
            </Col>
           </Row> 
        </Container>
    </section>
  )
}

export default tre_products
