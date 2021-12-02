import { IconButton } from '@material-ui/core'
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ListItem } from '../ChatListing/ListItem'
import { useAppSelector } from '../store/hooks'
import icons from '../utils/icons'

export const NewMessage : FC<NewMessageProps> = (props) => {
    const opened = useAppSelector (state => state.ui.newMessageOpened);
    const dispatch = useDispatch();

    function closeDrawer () {
        dispatch({type: "SET_NEW_MESSAGE_DRAWER_OPENED", payload: false})
    }

    return (
        <div className={`drawer drawer-chat ${opened? "drawer--open":''}`}>
            <header>
                <div className="drawer__goback">
                    <IconButton onClick={closeDrawer}>
                        <img src={icons.arrowleft1} alt="arrow left" />
                    </IconButton>
                    <span>New Chat</span>
                </div>
            </header>
            <section>
                <div className="drawer-chat__search common_input-container">
                    <input className="common_input common_input--icon drawer-chat-input" type="text" 
                    placeholder="Search contacts"/>
                    <div className="common_input-icon common_input-icon">
                        <img src={icons.search} alt="search" />
                    </div>
                </div>

                <div className="drawer__list">
                    {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,].map((_, index) => {
                        return <ListItem id={index} key={index}></ListItem>
                    })}
                </div>

            </section>
        </div>
    )
}
