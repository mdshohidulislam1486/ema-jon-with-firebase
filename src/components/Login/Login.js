import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

import './Login.css'

const Login = () => {
    const location = useLocation();
    const history = useHistory()
    console.log("came from", location.state?.from) 
    const redirect_url = location.state?.from || '/shop';
    const {signInUsingGoogle} = useAuth()

    const handelGoogleLogin =()=>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_url)
        })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Lgoin please</h2>
                <form  action="">
                    <input type="email" name="" id=""  placeholder='Enter your email'/>
                    <br /><br />
                    <input type="password" name="" id="" placeholder='Enter your password'/>
                    <br /><br />
                    <input type="submit" value="Submit"/>
                    <p>New to ema-john<Link to='/register'> Create account </Link></p>
                    <div>---------------or------------ </div>
                </form>
                <button 
                onClick={handelGoogleLogin}
                className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;