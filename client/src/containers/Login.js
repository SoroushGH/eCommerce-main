import React from 'react';
import '../styles/login.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container'>
            <div className="login-form">
                <form action="" method="post">
                    <h2 className="text-center">Log in</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-info">Log in</button>
                    </div>
                    <div className="clearfix">
                        <label className="float-left form-check-label"><input type="checkbox" /> Remember me</label>
                        <NavLink exact to={''} lassName="float-right">Forgot Password?</NavLink>
                    </div>
                </form>
                <p className="text-center">
                    <NavLink exact to={''}>Create an Account</NavLink>
                </p>
            </div>
        </div>
    )
}

export default Login;