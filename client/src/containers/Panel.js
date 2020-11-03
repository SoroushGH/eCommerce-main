import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/panel.css'

const Panel = () => {

    return (
        <div className='container px-0 panel'>
            <div className='row'>
                <div className='col-lg-12'>
                    <nav className="panel navbar navbar-dark bg-dark navbar-expand-lg">
                        <Link className="navbar-brand">PANEL</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/create-category" className="nav-link panel-li">Create Category</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create-product" className="nav-link panel-li">Create Product</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create-user" className="nav-link panel-li">Create User</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Panel;