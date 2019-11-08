import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

export const sendMessage = (user, content, attachments) =>{
    const data = {
        sender: user,
        content: content, 
        attachments: attachments,
        timeStamp: Date.now()
    }

    try{
        socket.emit('SEND_MESSAGE', data)
        return "Message sent!"
    }catch(exception){
        return exception
    }

}