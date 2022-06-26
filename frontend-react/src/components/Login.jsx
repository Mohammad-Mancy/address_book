import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
    <>
    <div className="login-div">
        <form>
            <div>
                <label>Email</label>
                <br/>
                <input 
                className="input-email-login"
                type={'text'}
                placeholder={'your email'}
                onChange={ (e) => setEmail(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <label>Password</label>
                <br/>
                <input 
                className="input-password-login"
                type={'text'}
                placeholder={'your password'}
                onChange={ (e) => setPassword(e.target.value)}
                />
            </div>
            <div className="btn-login">
                <br />
                <input className="btn-submit" type="submit" value="login" />
                <br />
            </div>
            <div className="link-signup">
            <Link className="link-register" to="./signup">
              sign up
            </Link>
          </div>
        </form>
    </div>
    </>
)}

export default Login;