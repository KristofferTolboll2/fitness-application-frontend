import openSocket from 'socket.io-client';
import { stringify } from 'querystring';
const socket = openSocket('http://localhost:5000');


export const sendMessage = (user, content, attachments) =>{
    const data = {
        sender: user,
        content: content, 
        attachments: attachments,
        timeStamp: Date.now()
    }
    try{
        const res = socket.emit('test', data)
        return stringify(res)
    }catch(exception){
        return exception
    }

}


export const connected = (user) =>{
    const data = {
        user: user
    }
    try {socket.emit('test', data)
    return "Client connected"
    }catch(exception){
        return exception
    }
}