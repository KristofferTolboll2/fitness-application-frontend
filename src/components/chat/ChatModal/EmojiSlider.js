import React from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

export default function EmojiSlider(props) {

    const {addEmoji} = props;
    const addEmojiHandler = (e) =>{
        console.log('Emoji added', e)
        addEmoji(e)
    }
    return (
        <div>
        <Picker 
        style={{width: '100%'}}
        onSelect={addEmojiHandler}
         autoFocus={true}
         title="" />
        </div>
    )
}
