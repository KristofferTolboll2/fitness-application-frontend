//should use redux at some point
import axios from 'axios';


export const getJwt = () =>{
    return localStorage.getItem('jwt')
}

export const setJwt = (jwt) =>{
    try {
        return localStorage.setItem('jwt', jwt);
    }catch(error){
        return `Error occured ${error}`
    }
}

export const isLoggedIn = () =>{
    axios.post('http://localhost:4000/api/trainer/auth')
    .then(res =>{
        console.log(res.data.response)
        return res.data.response
    }).catch(err =>{
        //should be logged
    })
}
