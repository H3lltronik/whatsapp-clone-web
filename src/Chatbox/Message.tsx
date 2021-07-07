import React from 'react'
// chatbox__message-container--mine
export const Message = () => {
    return (
        <div className={`chatbox__message-container ${null}`}>
            <div className="chatbox__message">
                <span className="chatbox__message-text">Me gusta la poronga</span>
                <div className="chatbox__message-flags">
                <span>8:33 PM</span>
                </div>
            </div>

            <div className="chatbox__message-tail"></div>
        </div>
    )
}
