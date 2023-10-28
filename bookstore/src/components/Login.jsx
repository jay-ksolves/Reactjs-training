import React from 'react'
import Sidecontent from './Sidecontent'

function Login() {
    return (
        <>
        <div className="fullcontent">
            <Sidecontent />
            <div className="formbox ">
                <h3>Log In</h3>
                <form id="form" action="" method="post" className='form'>
                    <label for="">Username</label>
                    <input type="text" name="username" className="asd form-control" placeholder='Username' />
                    <label for="">Password</label>
                    <input type="password" id="" name="password" className="asd form-control" placeholder='Password'/>
                    <input id="btn" type="submit" name="submit" value="Log In" className="mainbox form-control" />
                    <label for="">New customer?</label>
                    <a href="register.html" className="mainbox form-control">Register Now</a>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login