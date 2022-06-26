import React,{ useState} from "react";
import {Link} from "react-router-dom";

const Signup =() =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          var res = await fetch("http://localhost:3000/api/user/register", {
            method: "POST",
            headers:{ 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: name,
              email: email,
              password: password,
            }),
          });
          const data = await res.json();
          console.log(data.user)
          if (res.status === 200) {
            setName("");
            setEmail("");
            setPassword("");
            console.log(res)
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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <br/>
                <input 
                className="input-name"
                type={'text'}
                placeholder={'your name'}
                onChange={ (e) => setName(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <label>Email</label>
                <br/>
                <input 
                className="input-emai"
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
                className="input-password"
                type={'text'}
                placeholder={'your password'}
                onChange={ (e) => setPassword(e.target.value)}
                />
            </div>
            <div className="btn-signup">
                <br />
                <input className="btn-submit" type="submit" value="Signup" />
                <br />
            </div>
            <div className="link-signin">
            <Link className="link-login" to="../">
              Login
            </Link>
          </div>
        </form>
    </div>
    </>
)}

export default Signup;