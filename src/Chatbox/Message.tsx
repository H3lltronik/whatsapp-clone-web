import React, { FC, useState } from 'react'
import moment from 'moment'
import icons from '../utils/icons'
import { MenuDropper } from '../Common/MenuDropper'

// chatbox__message-container--mine
export const Message : FC<ChatboxProps> = (props) => {
    const [hover, setHover] = useState(false)
    const {mine, message} = props.message
    return (
        <div className={`chatbox__message-container 
        ${ mine? 'chatbox__message-container--mine':''}`}>
            <div className="chatbox__message"
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}>
                <span className="chatbox__message-text">{message}</span>
                <div className="chatbox__message-flags">
                    <span>{ moment(props.message.date).format("hh:mm A") }</span>
                    { mine? <img className="chatbox__message-status" src={icons.checktwo} alt="check" /> : null}
                </div>

                <div className={`chatbox__message-options ${hover? 'chatbox__message-options--open':''}`} >
                    <MenuDropper>
                        <img src={icons.arrowdown} alt="arrow down" />
                    </MenuDropper>
                </div>
            </div>

            <div className="chatbox__message-tail"></div>
        </div>
    )
}
