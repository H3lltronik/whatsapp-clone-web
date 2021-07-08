import React, { FC } from 'react'
import {IconButton, Menu, MenuItem} from '@material-ui/core'

export const MenuDropper : FC<MenuDropperProps> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        if (props.onOpen) props.onOpen()
    };

    const handleClose = () => {
        setAnchorEl(null);
        if (props.onClose) props.onClose()
    };

    return (
        <>
            <IconButton aria-controls={props.id? props.id:'simple-menu'} aria-haspopup="true" onClick={handleClick} style={{padding: 0, margin: 0,}}>
                {props.children}
            </IconButton>
            <Menu
                id={props.id? props.id:'simple-menu'}
                anchorEl={anchorEl}
                
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    )
}
