import React from 'react';
import './login.css'

export default function Login() {
    return (

        <form className='form-style'>
            <h3 className='header'>Sign In</h3>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password">
                Forgot <a href="#">password?</a>
            </p>
        </form>

    )
}
