import { io } from 'socket.io-client'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chat.css';
// import profile from './profile.jpg'
// import {io} from 'socket.io-client';
//
// import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
function Chat(props) {



    const navigation = useNavigate()
    const username = props.username
    const socket = io.connect("http://localhost:8080")

    if (username == '' || undefined || null) {
        navigation('/')
    }

    const [joined, set] = useState('')
    // chat functionality

    // getting message from input fields
    const [chat, setChat] = useState('')
    const [messages, setMessage] = useState([])
    // sending to backend
    useEffect(() => {
        socket.emit('join', username)
        // receiving message joined from backend
        // useEffect(() => {

    }, [])

    socket.on('join', payload => {
        console.log(payload)
        set(payload + ' ,has join the chat')
    })

    useEffect(() => {
        socket.on('chat', (payload) => {
            setMessage([...messages, payload])
        })
    }, [socket])


    const sendMessage = (e) => {
        socket.emit('chat', { username: props.username, message: chat })
    }

    // 

    return (
        <div className="main">

            <div className="chatsection">
                <div className="title">
                    <h2>YOU CAN CHAT NOW {props.username}</h2>
                    <div className="messages">

                        {messages.map((it) => {
                            return <div className="receiver">
                                <span> {it.message}</span>
                                <span> :{it.username}</span>
                                <img src="https://images-platform.99static.com//syUUBXWPuntRp-CG7bhwjByZIMg=/0x0:1080x1080/fit-in/500x500/99designs-contests-attachments/127/127807/attachment_127807231" alt="" />

                            </div>
                        })}
                        {joined}

                    </div>
                    <div className="sendfield">
                        <input type="text"


                            onChange={(e) => setChat(e.target.value)}
                            onClick={sendMessage}
                            value={chat || ''}
                            placeholder='Type a message' />
                        <input type="submit" value='Send Message' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
