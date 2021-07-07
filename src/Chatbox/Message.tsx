import React, { FC } from 'react'
import moment from 'moment'
import icons from '../utils/icons'

// chatbox__message-container--mine
export const Message : FC<ChatboxProps> = (props) => {
    const {mine, message} = props.message
    return (
        <div className={`chatbox__message-container 
        ${ mine? 'chatbox__message-container--mine':''}`}>
            <div className="chatbox__message">
                <span className="chatbox__message-text">{message}</span>
                <div className="chatbox__message-flags">
                    <span>{ moment(props.message.date).format("hh:mm A") }</span>
                    { mine? <img className="chatbox__message-status" src={icons.checktwo} alt="check" /> : null}
                </div>
            </div>

            <div className="chatbox__message-tail"></div>
        </div>
    )
}
