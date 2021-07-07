import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleKeyEnter } from '../utils/dom';
import icons from '../utils/icons'

export const Footer = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState<string>("")

    const sendMessage = () => {
        dispatch ({type: 'TEST', payload: {
            message,
            id: 3,
            status: 'DELIVERED',
            mine: true,
            date: new Date(),
        }})
        setMessage ("");
    }

    return (
        <footer className="chatbox__footer">
            <div className="chatbox-right-icon">
                <img src={icons.smiley} alt="" />
            </div>
            <div className="chatbox-right-icon">
                <img src={icons.clip} alt="" />
            </div>
            <input className="chatbox__input common_input" type="text" placeholder="Type a message" value={message}
            onChange={e => setMessage(e.target.value)} onKeyDown={e => handleKeyEnter(e, sendMessage)}/>
            <div className="chatbox-record">
                <img src={icons.microphone} alt="" />
            </div>
        </footer>
    )
}
