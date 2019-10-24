import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {


  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);



  useEffect(() =>{
    if(Object.keys(errors).length === 0 && isSubmitting){
      callback();
    }
  }, [errors])

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values))
      callback()
    setIsSubmitting(false)
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
};

export default useForm;