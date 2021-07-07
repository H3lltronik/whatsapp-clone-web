import React from 'react'
import { ListItem } from './ListItem'

export const ChatList = () => {
    return (
        <div className="app__side__list">
        {
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((_, index) => {
                return <ListItem key={index}></ListItem>
            })
        }
        
        </div>
    )
}
