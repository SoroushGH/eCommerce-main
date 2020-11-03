import React from 'react'
import '../styles/slideShow.css'
import Slide1 from '../images/slide_1.jpg'
import Slide2 from '../images/slide_2.jpg'
import Slide3 from '../images/slide_3.jpg'
const slideShow = () => {
    // const tempStyle = {
    //     height: '500px'
    // }

    return (

        <div id="carouselExampleFade" className="carousel slide carousel-fade pt-5 pb-3 container" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Slide1} className="d-block w-100" alt='image 1' />
                </div>
                <div className="carousel-item">
                    <img src={Slide2} className="d-block w-100" alt='image 2' />
                </div>
                <div className="carousel-item">
                    <img src={Slide3} className="d-block w-100" alt='image 3' />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    )
}

export default slideShow;