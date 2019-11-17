import io from 'socket.io-client';
import { stringify } from 'querystring';
const socket = io('http://localhost:5000');
import { getTrainer } from '../helpers/trainer'


export const sendMessage = (user, content, attachments) =>{
    const data = {
        receiver: user,
        sender: getTrainer(),
        content: content, 
        attachments: attachments,
        timeStamp: Date.now()
    }
    try{
        socket.emit('send_message_user_to_trainer', data,(response) =>{
            response = JSON.parse(response)
            console.log(response.status)
            alert(response.message)
        })
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