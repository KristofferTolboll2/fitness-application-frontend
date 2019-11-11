import React, {useEffect} from 'react'
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Whatshot from '@material-ui/icons/Whatshot'
import { Tooltip } from '@material-ui/core';

const Gif = (props) =>{
   //TODO implement loading stuff
    const {id} = props.gif
    const {url} = props.gif.images.fixed_height
   
    return(
            <div key={id}>
            <img src={url} />
            </div>
    )
}

export default function GifPopUp(props) {
    const {open, handleClose, callback, attachments} = props;
    const [gifs, setGifs] = React.useState([]);
    const [gifAmount, setGifAmount] = React.useState(5)

    const setGifRandom = (e) =>{
        e.preventDefault()
        axios.get('https://api.giphy.com/v1/gifs/trending?api_key=f6WEEl2xJi3B4BEIb8ZIY4o3nL0VAfbL&limit=100')
        .then(res =>{
            setGifs(res.data.data)
            setGifAmount(5)
        })
    }

   
    const setGifQuery = (e) =>{
        e.preventDefault()
            axios.get(`https://api.giphy.com/v1/gifs/search?api_key=f6WEEl2xJi3B4BEIb8ZIY4o3nL0VAfbL&q=${e.target.value}&limit=100`)
            .then(res => {
                setGifs(res.data.data)
                setGifAmount(5)
            })
    }
  
    const addGifToAttachments = (gif) =>{ 
        if(attachments.length >= 5){
            return alert("You can select a maximum of 5 Elements")
        }
        const attachmentGif = {
            id: gif.id,
            type: gif.type,
            url: gif.images.fixed_height.url,
            thumbnail: gif.images.fixed_height_small.url            
        }

        const newAttachments = [
            ...attachments, 
            attachmentGif
        ]
       //make elements unique
        callback(newAttachments);
        
    }
    
    const gifComponents = gifs.length > 0 ? gifs.slice(0, gifAmount).map(gif =>{
        return(
            <div onClick={() =>addGifToAttachments(gif)}>
            <Gif gif={gif} />
            </div>
        )
        })
        : <p>No gifs found :(</p>

    const handleScroll = (e) =>{
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if(bottom){
            setGifAmount(gifAmount + 5)
        }
    }
            
    return (
            <Dialog open={open} 
            scroll="paper"
            onClose={handleClose} 
            style={{padding: '10px'}}>
            <DialogTitle id="scroll-dialog-title">Find Gifs</DialogTitle>
            <DialogContent dividers={scroll === 'paper'} onScroll={handleScroll}>
            {gifComponents}
            </DialogContent>
            <DialogActions>
            <TextField
            fullWidth
            onChange={setGifQuery}
          label="Search"
          id="margin-normal"
          margin="normal"
        />
        <Tooltip title="Popular" onClick={setGifRandom}>
        <IconButton>
            <Whatshot />
        </IconButton>
        </Tooltip>
          </DialogActions>
            </Dialog>

    )
}
