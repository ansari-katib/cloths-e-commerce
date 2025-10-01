import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Carousal from './components/Carousal'
import Cards from './components/Cards'
import Review from './components/Review'
import Footer from './components/Footer'

const Landing_Page = () => {

    const [data, setData] = useState(() => {
        const localData = localStorage.getItem("cartData");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(data));
    },[data]);
    
    return (
        <div>
            <Navbar data={data} />
            <Carousal />
            <Cards data={data} setData={setData} />
            <Review />
            <Footer />
        </div>
    )
}

export default Landing_Page
