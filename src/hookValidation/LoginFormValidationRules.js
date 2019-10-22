export const validate = (values) =>{
    const emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errors = {};
 
    if(!values.email){
        errors.email = 'Email address is required';
    }
    else if(!emailRegex.test(values.email.toLowerCase())){
        errors.email = 'You must enter a valid email address'
    }
    if(!values.password){
        errors.password = 'Password is required'
    }
    return errors;
}