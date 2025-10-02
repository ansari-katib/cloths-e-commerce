import React, { useEffect, useState } from 'react'
import Carousal from '../components/Carousal'
import Cards from '../components/Cards'
import Review from '../components/Review'
import { useCart } from '../context/CartContext'
import Stats from '../components/Stats'
import NumberOfUser from '../components/NumberOfUser'

const Landing_Page = () => {

    const { data, setData } = useCart();

    return (
        <div>
            <NumberOfUser />
            <Carousal />
            <Stats />
            <Cards data={data} setData={setData} />
            <Review />
        </div>
    )
}

export default Landing_Page
