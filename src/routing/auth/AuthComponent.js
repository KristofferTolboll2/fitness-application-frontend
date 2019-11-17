import React, { useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from '../../components/ui/loaders/LoadingScreen'
import {withRouter} from 'react-router-dom'
import {getJwt} from '../../helpers/jwt';
import {setTrainer} from '../../helpers/trainer'

 function AuthComponent(props) {
    
    const [user, setUser] = React.useState(undefined);

    useEffect(() =>{
        const jwt = getJwt();
        if(!jwt){
            setUser(null)
            return;
        }
      
        axios.get('http://localhost:5000/api/trainer/auth', {headers: {Authorization: `Bearer ${getJwt()}`}})
        .then(res => {
            setUser(res.data.data.id);
            setTrainer(res.data.data.id);
        })
        .catch(err => {
        if(err.response.status === 401 && user === undefined){
            props.history.push('/login')
        }
    })

    }, [])
    
    if(user === null){
        props.history.push('/login')
    }

    if(user === undefined){
        return <LoadingScreen />
    }
    
    return props.children
}

export default withRouter(AuthComponent)