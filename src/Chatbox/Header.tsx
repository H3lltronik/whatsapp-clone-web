import { IconButton } from '@material-ui/core'
import React from 'react'
import { MenuDropper } from '../Common/MenuDropper'
import icons from '../utils/icons'

export const Header = () => {
    return (
        <header className="app__content__header">
            <div className="app__content__header-user">
                <div className="app__content__avatar">
                <img src="https://i.scdn.co/image/ab67706c0000bebbc0a89b3a1d6dee5d71486ded" alt="" />
                </div>
                <div className="app__content__header-username">Evelyn Ojos</div>
            </div>
            <div className="common__spacer"></div>
            <div className="app__side__header-icons">
                <IconButton>
                    <div className="common__cursor-pointer"><img className="app__content__search-icon" src={icons.search} alt="status" /></div>
                </IconButton>
                <MenuDropper>
                    <div className="common__cursor-pointer"><img src={icons.menu} alt="status" /></div>
                </MenuDropper>
            </div>
        </header>
    )
}
