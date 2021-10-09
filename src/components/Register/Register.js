import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>

            <div>
                <h2>Register: create account</h2>
                <form action="">
                
                    <input type="email" name="" id="" placeholder='Enter email' />
                    <br /><br />
                    <input type="password" name="" id="" placeholder='Your password'/>
                    <br /><br />
                    <input type="password" name="" id="" placeholder='Re-enter password'/>
                    <br />
                    <input type="submit" value="Submit" />
                    

                </form>
                <p>Already have an account <Link to='/login'>Login</Link></p>
                <div>-------------or----------</div>
                <button className="btn-regular">Google Sing In</button>
            </div>
            
        </div>
    );
};

export default Register;