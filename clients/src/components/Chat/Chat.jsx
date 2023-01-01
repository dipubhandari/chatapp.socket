import io from 'socket.io-client'
import React, { useEffect, useState } from 'react';
import './Chat.css';
// import profile from './profile.jpg'
// import { io } from 'socket.io-client';
// 
// import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

function Chat(props) {

    const username = props.username

    console.log(username)

    // chat functionality

    // const socket = new Server()


 return (
        <div className="main">

            <div className="chatsection">
                <div className="title">
                    <h2>YOU MATCHED WITH ELLEN ON 10/20/</h2>
                    <div className="messages">
                        <div className="firstdata">
                            <img src="{profile}" alt="" />
                            <span>message here</span>
                        </div>
                        <div className="receiver">

                            <span>message here</span>
                            <img src="{profile}" alt="" />

                        </div>
                    </div>
                    <div className="sendfield">
                        <input type="text"


                            placeholder='Type a message' />
                        <input type="submit" value='Send Message' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
