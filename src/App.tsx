import React, { useState } from 'react'
import introImg from '../static/images/intro-connection.jpg'
import './App.css'
import { switchTheme } from './utils/lib'
import { Chatbox } from './Chatbox/Chatbox'
import { Aside } from './ChatListing/Aside'

switchTheme ('dark')

function App() {
  return (
    <div className="app">
      <Aside></Aside>

      <Chatbox></Chatbox>
    </div>
  )
}

export default App;
