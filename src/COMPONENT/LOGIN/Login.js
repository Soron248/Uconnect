import React, { useState } from 'react'
import LogCss from './login.module.css';
import LoginPic from './login.jpg'
import LoginBg from './loginbg.png'


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allData, setAllData] = useState([]);
  

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {email:email, password:password};
    setAllData([...allData,newData]);
  }
  
  
  return (
    <div className={LogCss.main}>
        <div className={LogCss.container}>

          <img src={LoginBg} alt="Login_bg" />

            <div className={LogCss.left}>
                <h1><span>U</span>CONNECT</h1>
                <p>create your identity</p>
                <img src={LoginPic} alt="Login_svg" />
            </div>

            <div className={LogCss.right}>
                <h1>Log in</h1>
                <form action="" onSubmit={handleSubmit}>
                <input type="email" placeholder='email' name='email' required onChange={handleEmail} value={email} /><br />
                <input type="password" placeholder='password' name='password' required onChange={handlePassword} value={password} /><br />
                <button type='submit'>Log in</button><br />
                </form>
                <a href="#">Create new Account</a>
            </div>

        </div>
    </div>
  )
}
