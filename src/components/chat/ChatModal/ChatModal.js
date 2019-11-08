import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {DialogActions, DialogContent, DialogTitle} from '../../ui/modal/ModalUIKit';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment'
import Gif from '@material-ui/icons/Gif'
import Mood from '@material-ui/icons/Mood'
import AttachFile from '@material-ui/icons/AttachFile'
import GifPopUp from './GifPopUp';
import EmojiSlider from './EmojiSlider' 
import Attachments from './Attachments'
import SocketContext from '../../../socket-context';
import { useSendMessage, sendMessage } from '../../../hooks/useSendChat';

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
    const [showGiphy, setGiphy] = React.useState(false);
    const [showEmoji, setEmoji] = React.useState(false);
    const [attachments, setAttachments] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    console.log(props)

    const sendChatMessage = async() =>{
      setLoading(true)
      try{
      const response = await sendMessage(props.id, content, attachments)
      console.log(response)
      }catch(e){
        console.log(e)
      }finally{
        setLoading(false)
      }
    }

    const addFileAttachment = (event) =>{
      console.log(event.target.files)

    }
    console.log(props)

    const toggleEmoji = () =>{
      showEmoji ? setEmoji(false) : setEmoji(true)
    }
    
    const toggleGiphy = () =>{
      showGiphy ? setGiphy(false) : setGiphy(true);
    }

 
    const addEmoji = (e) =>{
      const withEmoji = content.concat(e.native)
      setContent(withEmoji)
    }

    const deleteAttachment = (id) =>{
      const newAttachments = attachments.filter(attachment => attachment.id !== id);
      setAttachments(newAttachments)
    }

    console.log(attachments)

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
                <img src="https://p7.hiclipart.com/preview/636/702/321/computer-icons-user-profile-avatar-black-man-thumbnail.jpg" alt="thumbnail" style={{height: '20px'}}/>
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
         
         {/* dialogs */}
         <GifPopUp open={showGiphy} handleClose={toggleGiphy} callback={setAttachments} attachments={attachments}/>
         {/* */}

         {attachments &&
            <Attachments attachments={attachments} deleteAttachment={deleteAttachment} />
            }
          
            
        <span>
            <IconButton onClick={toggleGiphy}><GifPopUp show={showGiphy} /><Gif style={{fontSize: '1.7em'}} /></IconButton>
            <IconButton onClick={toggleEmoji}><Mood /></IconButton>
            <IconButton >
                <AttachFile />
              </IconButton>
            </span>
            {showEmoji &&
            <EmojiSlider addEmoji={addEmoji}/>
            }
            
        <Typography component="p" style={{fontSize: '9px'}}>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={sendChatMessage} color="primary">
            Send
          </Button>
          <Button onClick={setClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
        </Dialog>
        
    )
}
