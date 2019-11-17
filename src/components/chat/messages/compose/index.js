import React from 'react';
import './Compose.css';
import IconButton from '@material-ui/core/IconButton';
import Gif from '@material-ui/icons/Gif';
import Mood from '@material-ui/icons/Mood';
import AttachFile from '@material-ui/icons/AttachFile'
import GifPopUp from '../../chatmodal/GifPopUp';
import EmojiSlider from '../../chatmodal/EmojiSlider';
import ToolTip from 'react-portal-tooltip'
import { Picker } from 'emoji-mart'


export default function Compose(props) {
  const {setAttachments, attachments} = props;
  const [content, setContent] = React.useState("");
  const [showGiphy, setGiphy] = React.useState(false);
  const [showEmoji, setEmoji] = React.useState(false);

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


    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div id="tooltip-start">
          
        </div>
              <GifPopUp open={showGiphy} handleClose={toggleGiphy} callback={setAttachments} attachments={attachments}/>
           <IconButton onClick={toggleGiphy}><GifPopUp show={showGiphy} /><Gif size="large" /></IconButton>
            <IconButton onClick={toggleEmoji} id="emoji-button"><Mood /></IconButton>
            <ToolTip active={showEmoji} position="top" arrow="center" parent="#emoji-button">
            <Picker 
            onSelect={addEmoji}
            autoFocus={false}
            title="Emoji picker" />
            </ToolTip>
            <IconButton >
                <AttachFile />
              </IconButton>
      </div>
    );
}