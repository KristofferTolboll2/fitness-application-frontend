import axios from "axios";
import {setJwt} from '../helpers/jwt'
import {setTrainer} from '../helpers/trainer'
export const handleLogin = (token, trainer, history) =>{
   //Optional error   setUser(res.data)handling if(validateJwt(token)){
    console.log(token)
   setJwt(token)
    setTrainer(trainer)
    //}else{
    //}
}


export const handleLoginError = (err) =>{
    if(err.response.status === 401){
        return "Wrong credentials"
    }
}