import React from 'react'
import icons from '../utils/icons'

export const Footer = () => {
    return (
        <footer className="chatbox__footer">
            <div className="chatbox-right-icon">
                <img src={icons.smiley} alt="" />
            </div>
            <div className="chatbox-right-icon">
                <img src={icons.clip} alt="" />
            </div>
            <input className="chatbox__input common_input" type="text" placeholder="Type a message"/>
            <div className="chatbox-record">
                <img src={icons.microphone} alt="" />
            </div>
        </footer>
    )
}
