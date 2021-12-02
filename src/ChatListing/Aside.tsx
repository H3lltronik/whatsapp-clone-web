import React from 'react'
import { NewMessage } from '../Drawers/NewMessage'
import { Profile } from '../Drawers/Profile'
import { ChatList } from './ChatList'
import { Header } from './Header'

export const Aside = () => {
    return (
        <div className="app__side">
            <Header></Header>
            <ChatList></ChatList>

            {/* Drawers */}
            <Profile/>
            <NewMessage/>
        </div>
    )
}
