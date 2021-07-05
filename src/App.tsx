import React, { useState } from 'react'
import introImg from '../static/images/intro-connection.jpg'
import './App.css'
import { switchTheme } from './utils/lib'

switchTheme ('dark')

function App() {
  return (
    <div className="app">
      <div className="app__side">
        <header className="app__side__header"></header>
        <div className="app__side__search"></div>
        <div className="app__side__list"></div>
      </div>
      <div className="app__content">
        <div className="app__content__startup">
          <div className="app__content__startup__image" style={{backgroundImage: `url(${introImg})`}}></div>

          <h1 className="app__intro_title">Keep your phone connected</h1>

          <p className="app__intro_subtitle">WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</p>

          <div className="app__content__divider"></div>

          <p className="app__intro_subtitle">WhatsApp is available for Windows. <a href="">Get it here</a></p>
        </div>
      </div>
    </div>
  )
}

export default App
