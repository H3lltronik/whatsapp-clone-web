import { IconButton } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { MenuDropper } from '../Common/MenuDropper'
import icons from '../utils/icons'

export const Header = () => {
    const dispatch = useDispatch();

    function openProfileDrawer () {
        dispatch({type: "SET_PROFILE_DRAWER_OPENED", payload: true})
    }

    return (
        <>
            <header className="app__side__header">
                <IconButton onClick={openProfileDrawer}>
                    <div className="app__content__avatar">
                        <img src="https://i.scdn.co/image/ab67706c0000bebbc0a89b3a1d6dee5d71486ded" alt="" />
                    </div>
                </IconButton>
                <div className="common__spacer"></div>
                <div className="app__side__header-icons">
                    <IconButton>
                    <div className="common__cursor-pointer"><img src={icons.status2} alt="status" /></div>
                    </IconButton>
                    <IconButton>
                        <div className="common__cursor-pointer"><img src={icons.message} alt="status" /></div>
                    </IconButton>
                    <MenuDropper>
                        <div className="common__cursor-pointer"><img src={icons.menu} alt="status" /></div>
                    </MenuDropper>
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
        </>
    )
}
