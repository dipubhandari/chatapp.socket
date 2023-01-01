import React, { useEffect, useState } from 'react'
import logo from '../../logo.svg';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
const Home = (props) => {
    const [username, setUsername] = useState('')
    const [msg, note] = useState('')

    const nav = useNavigate()
    // handling the username

    const handleUserInput = function () {
        console.log(username)
        if (username == '') {
            note('Enter the name')
        }
        else if (username.length < 5) {
            note('More than five letter')
        }
        else {
            props.username(username)
            nav('/chat')
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {msg}  <p>
                    <input
                        placeholder='Enter Your Name'
                        onChange={(e) => setUsername(e.target.value)}
                        className='username'
                    />
                </p>
                <button
                    onClick={handleUserInput}
                    type='submit'
                    className="App-link">
                    Chat
                </button>
            </header>
        </div>
    )
}

export default Home