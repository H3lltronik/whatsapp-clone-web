import React, { useState } from 'react'
import introImg from '../static/images/intro-connection.jpg'
import './App.css'
import { switchTheme } from './utils/lib'
import icons from './utils/icons'

switchTheme ('dark')

function App() {
  return (
    <div className="app">
      <div className="app__side">
        <header className="app__side__header">
          <div className="app__content__avatar">
            <img src="https://i.scdn.co/image/ab67706c0000bebbc0a89b3a1d6dee5d71486ded" alt="" />
          </div>
          <div className="common__spacer"></div>
          <div className="app__side__header-icons">
            <div className="common__cursor-pointer"><img src={icons.status2} alt="status" /></div>
            <div className="common__cursor-pointer"><img src={icons.message} alt="status" /></div>
            <div className="common__cursor-pointer"><img src={icons.menu} alt="status" /></div>
          </div>
        </header>
        <div className="app__side__search">
          <div className="app__side__search-input">
            <div className="app__side__search-icon">
              <img src={icons.search} alt="search" />
            </div>
            <input className="common_input" type="text" placeholder="Search or start a new chat"/>
          </div>
        </div>
        <div className="app__side__list">
          {
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(() => {
              return <div className="app__side__chat app__side__chat--active">
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
            })
          }
          
        </div>
      </div>

      <div className="app__content">
        <div className="app__content__startup">
          <div className="app__content__startup__image" style={{backgroundImage: `url(${introImg})`}}></div>

          <h1 className="app__intro-title">Keep your phone connected</h1>

          <p className="app__intro-subtitle">WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</p>

          <div className="app__content__divider"></div>

          <p className="app__intro-subtitle">WhatsApp is available for Windows. <a href="https://www.whatsapp.com/download" target="_blank">Get it here</a></p>
        </div>
      </div>
    </div>
  )
}

export default App;
