import React from 'react'
import icons from '../utils/icons'

export const ListItem = () => {
    return (
        <div className="app__side__chat app__side__chat--active">
            <div className="app__side__chat-img app__content__avatar app__content__avatar--bigger">
                <img src="https://i.scdn.co/image/ab67706c0000bebbc0a89b3a1d6dee5d71486ded" alt="" />
            </div>

            <div className="app__side__chat-body">
            <div className="app__side__chat-top">
                <span className="app__side__chat-title">Cinefilos sin dinero</span>
                <span className="app__side__chat-hour">8:33 PM</span>
            </div>
            <div className="app__side__chat-bottom">
                <span className="app__side__chat-latest">Bruno: Me gusta la poronga</span>
                <div className="app__side__chat-icon">
                <img src={icons.mute} alt="mute" />
                </div>
            </div>
            </div>
        </div>
    )
}
