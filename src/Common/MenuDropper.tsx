import React, { FC } from 'react'
import {IconButton, Menu, MenuItem} from '@material-ui/core'

export const MenuDropper : FC<MenuDropper> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{padding: 0, margin: 0,}}>
                {props.children}
            </IconButton>
            <Menu
                id="simple-menu"
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
