import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import { useCart } from './context/CartContext'

const Layout = () => {

    const {data , setData} = useCart()

    return (
        <div>
            <Navbar data={data} />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
