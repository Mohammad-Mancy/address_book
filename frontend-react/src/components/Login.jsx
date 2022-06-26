import React from "react";
import { useState } from "react";
import {Link,useNavigate} from "react-router-dom";

const Login = () => {
    const navigation = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:3000/api/user/login", {
            method: "POST",
            headers:{ 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
          const data = await res.json();
          console.log(data)
          if (res.status === 200) {
            setEmail("");
            setPassword("");
            localStorage.setItem('tokenKey',data.tokenkey)
            localStorage.setItem('userId',data.userId)
            console.log(res)
            navigation('./main')
          } else {
            alert("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };
    
    return (
    <>
    <div className="login-div">
        <form 
        onSubmit={handleSubmit}
        >
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