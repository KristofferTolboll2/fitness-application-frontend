import { useState, useEffect } from "react";
import {sendMessage} from '../service/SocketChatManager'



function useSendMessage(user, attachments, content) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    async function sendMessage() {
        if(content === null || content === undefined || content.length >= 3){
            setData("Please enter a valid message")
            setLoading(false)
            return [response, loading];
        }
      
    const response = await sendMessage(user, attachments, content);
      setData(response);
      setLoading(false);
  
    }
    useEffect(() => {
      sendMessage();
    }, []);
    return [data, loading];
  
  }
  export { useSendMessage };


function createAttachments(attachments, type) {
    const [attachment, setAttachment] = useState({})

}


export {sendMessage}