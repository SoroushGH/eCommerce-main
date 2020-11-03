import React from 'react';
import '../styles/home.css'
import SlideShow from './SlideShow'
import SearchBox from '../components/SearchBox'
import Shoes from '../components/Shoes'
import Accessories from '../components/Accessories'
import Jackets from '../components/Jackets'
import Hero from '../containers/Hero'

const Home = () => {
    return (
        <div /* className='container-fluid' */>
            <div className='home'>
                <Hero />
                {/* <SearchBox /> */}
                {/* <SlideShow /> */}
                <Shoes />
                <Accessories />
                <Jackets />
            </div>
        </div>
    )


}

export default Home;