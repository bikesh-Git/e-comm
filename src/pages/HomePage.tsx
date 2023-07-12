import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/productList/components/ProductList'
import LoginPage from './LoginPage'

const Home = () => {
  return (
    <div>
            <Navbar >
                <ProductList />
            </Navbar>

    </div>
  )
}

export default Home