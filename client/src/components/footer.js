import React from 'react';
import '../styles/footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (

        <footer className="footer">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-lg-4">
                        <h3>FURTHER INFO</h3>
                        <ul>
                            <li><NavLink exact to={'#'}>Sitemap</NavLink></li>
                            <li><NavLink exact to={'/contact'}> Find Our Store </NavLink></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h3 className="text-uppercase ">Customer Service</h3>
                        <ul>
                            <li><NavLink exact to={'/contact'}> Contact US </NavLink></li>
                            <li><NavLink exact to={'/services'}> Privacy Policy </NavLink></li>
                            <li><NavLink exact to={'/services'}> Returns </NavLink></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h3>SIGN UP FOR OUR NEWS LETTER</h3>
                        <p>Receive our latest updates</p>
                        <input className="form-input" id="" name="" type="text"  placeholder="Enter your email address" />
                    </div>
                </div>
                <div className="copyright col-lg-12 pb-3 text-center">
                    <p>© 2020 Malibo & Blue. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
