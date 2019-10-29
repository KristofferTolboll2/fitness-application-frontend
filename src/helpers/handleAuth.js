import React from 'react'
import axios from "axios";
import {setJwt, getJwt} from './jwt'
import {setTrainer} from './trainer'
import history from '../routing/history/history'
import {Redirect} from 'react-router-dom'
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

export const handleLogout = (props) =>{
    const jwt = getJwt();
    setJwt(null)
    setTrainer(null)
    return history.push('/login')
    
}