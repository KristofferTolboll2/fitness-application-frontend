import {Redirect} from 'react-router-dom'

export const makeRedirect = (history, url, param) =>{
    return history.push(`${url}/${param}`)
}