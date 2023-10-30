import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom';
function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout()
        navigate('/login')
    }
    return (
        <div className='card bg-dark text -center container text-light p-4 mt-5'>
            <h1>Profile</h1>
            <h2 >hello ,{auth.user}</h2><br />

            <button onClick={handleLogout} className='btn btn-info float-shadow'> Log out</button>
        </div>
    )
}

export default Profile