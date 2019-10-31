import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {DialogActions, DialogContent, DialogTitle} from '../ui/modal/ModalUIKit';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment'
import Gif from '@material-ui/icons/Gif'
import Mood from '@material-ui/icons/Mood'
import AttachFile from '@material-ui/icons/AttachFile'

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
}));

export default function ChatModal(props) {
    const classes = useStyles();
    const {open, setClose, name} = props;
    
    const [content, setContent] = React.useState("");
    return (
        <Dialog open={open} onClose={setClose} >
             <DialogTitle id="customized-dialog-title" onClose={setClose}>
          Message - {name}
        </DialogTitle>
        <DialogContent dividers>
          <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          value={name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="https://p7.hiclipart.com/preview/636/702/321/computer-icons-user-profile-avatar-black-man-thumbnail.jpg" style={{height: '20px'}}/>
              </InputAdornment>
            ),
          }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Message"
          multiline
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <span>
            <IconButton><Gif style={{fontSize: '1.7em'}} /></IconButton>
            <IconButton><Mood /></IconButton>
            <IconButton><AttachFile /></IconButton>
            </span>
        <Typography component="p" style={{fontSize: '9px'}}>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={console.log('Sent')} color="primary">
            Send
          </Button>
          <Button onClick={setClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
        </Dialog>
        
    )
}
