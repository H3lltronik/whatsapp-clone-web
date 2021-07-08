import { IconButton } from '@material-ui/core'
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../store/hooks'
import icons from '../utils/icons'

export const Profile : FC<ProfileProps> = (props) => {
    const opened = useAppSelector (state => state.ui.profileDrawerOpened);
    const dispatch = useDispatch();

    function closeDrawer () {
        dispatch({type: "SET_PROFILE_DRAWER_OPENED", payload: false})
    }

    return (
        <div className={`drawer drawer-profile ${opened? "drawer--open":''}`}>
            <header>
                <div className="drawer__goback">
                    <IconButton onClick={closeDrawer}>
                        <img src={icons.arrowleft1} alt="arrow left" />
                    </IconButton>
                    <span>Profile</span>
                </div>
            </header>
            <section>
                <div className="drawer-profile-image">
                    <div className="">
                        <img src="https://i.scdn.co/image/ab67706c0000bebbc0a89b3a1d6dee5d71486ded" alt="profile image" />
                    </div>
                </div>

                <div className="drawer-profile__edition">
                    <h2>Your Name</h2>
                    
                    <h2>About</h2>
                </div>
            </section>
        </div>
    )
}
