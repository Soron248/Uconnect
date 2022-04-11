import React from 'react'
import RegCss from './register.module.css';
import RegBgImg from './academia-1293362_960_720.png';
import {Link} from 'react-router-dom';

const register = () => {  
    return (
        <div className={RegCss.main}>
            <div className={RegCss.container}>
                {/* <img src={RegBgImg} alt="bg-img" /> */}
                <div className={RegCss.left}>
                <h1><span>U</span>CONNECT</h1>
                <p>create your identity</p>
                <img src={RegBgImg} alt="Login_svg" />
            </div>

            <div className={RegCss.right}>
                <h1>Sign Up</h1>
                <form action="">
                    <input type="text" name="name" id="name" placeholder='Enter full name'/>
                    <br />
                    <input type="email" placeholder='Campus email adress' name='email' required />
                    <br />
                    <input type="text" name="idNmae" id="idname" placeholder='Student Id'/>
                    <br />
                    <input type="password" placeholder='password' name='password' required/>
                    <br />
                    <input type="password" placeholder='Confurm password' name='password' required/>
                    <button type='submit'>Register</button><br />
                </form>
                <p>Already have an Account?</p>
                <Link to="/">Please Login</Link>
            </div>
            </div>
        </div>
    );
};

export default register;