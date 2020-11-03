import React from 'react';
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import { Context } from "../context";

class Navbar extends React.Component {

    render() {
        return (
            <div className="row">
                <div className='col-lg-12'>
                    <nav className="fixed-top nav navbar navbar-expand-lg text-uppercase">
                        <span class="navbar-brand" href="#">
                            <img src="https://res.cloudinary.com/img-cloud-repo/image/upload/v1604176811/samples/ecommerce/other/logo_yirpxx.png" width="30" height="30" alt="" />
                        </span>
                        <NavLink exact to={'/'} className="navbar-brand "> M & B </NavLink>
                        <button
                            className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white "
                            type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                        <i className="fas fa-bars icon"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mx-0 mx-lg-1 active">
                                    <NavLink exact to={'/'} className="nav-link py-3 px-lg-3"> Home </NavLink>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <NavLink exact to={'/about'} className="nav-link py-3 px-lg-3"> About </NavLink>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <NavLink exact to={'/services'} className="nav-link py-3 px-lg-3"> Services </NavLink>
                                </li>
                                <li className="nav-item dropdown mx-0 mx-lg-1">
                                    <NavLink exact to={''} className="nav-link dropdown-toggle py-3 px-lg-3" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        COLLECTIONS
                                    </NavLink>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NavLink exact to={'/all-shoes'} className="dropdown-item"> Shoes </NavLink>
                                        <div className="dropdown-divider"></div>
                                        <NavLink exact to={'/all-accessories'} className="dropdown-item"> Accessories </NavLink>
                                        <div className="dropdown-divider"></div>
                                        <NavLink exact to={'/all-jackets'} className="dropdown-item"> Jackets </NavLink>
                                    </div>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <NavLink exact to={'/contact'} className="nav-link py-3 px-lg-3"> Contact US </NavLink>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <NavLink exact to={'/login'} className="nav-link py-3 px-lg-3"> Login </NavLink>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <NavLink exact to={'/create-category'} className="nav-link py-3 px-lg-3"> Panel </NavLink>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <NavLink exact to={'/payment'} className="nav-link py-3 px-lg-3"> Cart
                                        <Context.Consumer>{context => <span class="cart-counter"> {context.cartContext}</span>}</Context.Consumer>
                                    </NavLink>
                                    {/*   <span className="cart" >0</span> */}
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>


        )
    }



}

export default Navbar;

