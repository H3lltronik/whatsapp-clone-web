import React from 'react'
import { Footer } from './Footer'
import { Message } from './Message'
import { Header } from './Header'
import { useAppSelector } from '../store/hooks'

export const Chatbox = () => {
    const messages = useAppSelector(state => state.test.messages);

    return (
        <div className="app__content">
            <Header></Header>

            {/* <div className="app__content__startup">
            <div className="app__content__startup__image" style={{backgroundImage: `url(${introImg})`}}></div>

            <h1 className="app__intro-title">Keep your phone connected</h1>

            <p className="app__intro-subtitle">WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</p>

            <div className="app__content__divider"></div>

            <p className="app__intro-subtitle">WhatsApp is available for Windows. <a href="https://www.whatsapp.com/download" target="_blank">Get it here</a></p>
            </div> */}

            <div className="app__content__chat-container">
                <div className="chatbox">
                    <div className="chatbox__viewport">
                        <div className="chatbox__viewport-container">
                            {
                                messages.map(() => {
                                    return <Message></Message>
                                })
                            }
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>


        </div>
    )
}
