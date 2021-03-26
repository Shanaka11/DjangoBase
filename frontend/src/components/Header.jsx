// React Imports
import React from 'react'
// 3rd Party Imports
import { useDispatch, useSelector } from 'react-redux'
// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// Local Imports
import { logout } from '../actions/userActions'

// Style
const useStyles = makeStyles({
    title: {
        flexGrow: 1
    },
  });

const Header = () => {

    // Style
    const classes = useStyles()
    // States
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    // Redux
    const dispatch = useDispatch()

    const userLogin = useSelector( state => state.userLogin )
    const { userInfo } = userLogin

    // Handlers
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (event) => {
      setAnchorEl(null);
      console.log(event.target.id)
      if(event.target.id === 'logout'){
        console.log("here")
        dispatch(logout())
      }
    };    


    if (!userInfo) {
        return (
            <></>
        )
    }else{
        return (
            <AppBar position="static">
            <Toolbar>
              {/* <IconButton edge="start" color="inherit">
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h6" className={classes.title}>
                Expense Tracker
              </Typography>
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem id='logout' onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
            </Toolbar>
          </AppBar>
        )
    }
}

export default Header
