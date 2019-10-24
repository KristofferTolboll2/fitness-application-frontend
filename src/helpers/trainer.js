export const setTrainer = (user) =>{
    try{
        return localStorage.setItem('user', user)
    }catch(error){
        return `Error occured ${error}`
    }
}


export const getTrainer = () =>{
    return localStorage.getItem('user');
}