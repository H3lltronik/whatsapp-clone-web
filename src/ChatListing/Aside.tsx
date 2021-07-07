import React from 'react'
import { ChatList } from './ChatList'
import { Header } from './Header'

export const Aside = () => {
    return (
        <div className="app__side">
            <Header></Header>
            <ChatList></ChatList>
        </div>
    )
}
