import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToApp from '@material-ui/icons/ExitToApp';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import {handleLogout} from '../helpers/handleAuth'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
  
  },
}))(MenuItem);


export default function CustomizedMenus(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(props)
  return (
    <div>
        <span style={{padding: '5px'}}>
      <Button
        onClick={handleClick}
        style={{borderRadius: '10%'}}
      >
       <KeyboardArrowDown />
      </Button>
      </span>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleLogout}>
          <ListItemIcon>
            <ExitToApp fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}