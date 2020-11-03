import React from 'react'
import '../styles/hero.css'

const Hero = () => {
    const imgFactory = "https://res.cloudinary.com/img-cloud-repo/image/upload/v1604063049/samples/ecommerce/other/factory_ibvcyt.jpg"
    return (
        <section>
            <div className="row">
                <div className="col-lg-12 hero-image">
                    <div className="hero-text">
                        <h1 className="text-capitalize">Men's Selection</h1>
                        <p>Autumn Winter 2020</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center pt-5">
                <div className="col-lg-12 text-center p-5">
                    <p className="Cormorant-Garamond">FOUNDED IN 1879</p>
                </div>

                <div className="col-lg-4 m-1">
                    <img src={imgFactory} alt="factory" className="w-100"></img>
                </div>
                <div className="col-lg-3 m-1 hero slang-text">
                    <p><br /> <br />
                        “Life should be slower and deeper rather than faster and cheaper”<br /><br />
                        Now in its 5th generation as a family run business, Malibo & Blue continues
                        to produce shoes, accessories and jackets in their original factory,
                        with the same attention to detail as the founders.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero;