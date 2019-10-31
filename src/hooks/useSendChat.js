import { useState, useEffect } from "react";



   
    function sendMessage(sender, recipient, content) {
        const[response, setResponse ] = useState("")
        const[loading, setLoading] = useState(false);
        if(content === null || content === undefined || content.length >= 3){
            setResponse("Please enter a valid message")
            setLoading(false)
            return [response, loading];
        }
        const response = await socket.emit("SEND_MESSAGE", {
            sender: sender, 
            recipient: recipient,
            content: content
        })
    
      useEffect(() => {
        sendMessage();
      }, []);
      return [data, loading];   
}


export {sendMEssage}