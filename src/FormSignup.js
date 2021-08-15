import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import Button from '@material-ui/core/Button';

import './Form.css';
import { makeStyles } from '@material-ui/core/styles';

import Search from './search_bar';
  



const useStyles = makeStyles((theme) => ({
 
  input: {
    display: 'none',
  },
}));


  


const FormSignup = ({ submitForm }) => {
 
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  
  
  

  const classes = useStyles();


  

  return (
    
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
      
        <div className='form-inputs'>
          
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your fullname'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className='form-inputs'>
         
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
          <div class="lable">
          <span class="prefix">+44</span>
          <input
           className='snehainput'
            type='number'
            name='number'
            placeholder='Enter your phone no'
            value={values.number}
            onChange={handleChange}
            
          />
          
          {errors.number && <p>{errors.number}</p>}
        </div>
        
        <div className='form-inputs'>
        <div className='form-spacing'>
        <Search />
        </div>
        {errors.number && <p>{errors.number}</p>}
        </div>
        <div>
        <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        className={classes.input}
      />
      
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
        </label>
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        
       
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
}
export default FormSignup;
