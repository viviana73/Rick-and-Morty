import React, { useState } from 'react';
import { validation } from '../Validation/validation';
import style from './form.module.css'

export default function Form({login}) {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  }) 
  const [errors, setErrors] = useState({})
  function handleChange(event){
      setErrors(validation({...userData, [event.target.name]:event.target.value}))
      setUserData({...userData, [event.target.name]:event.target.value
    })
  }
  function handleSubmit(event) {
    event.preventDefault()
    login(userData)
  }
  return (
    <div>
        <form className={style.formContainer} 
              onSubmit={handleSubmit}>
            <label htmlFor='email'> Email:
             <input 
                 type='email'
                 id='email'
                 value={userData.email}
                 name='email' 
                 onChange={handleChange}
                 className={errors.email && style.warning} /></label>
              {errors.email && (<p className={style.danger} >{errors.email} </p>)}   
            <label htmlFor="password"> Password:
             <input 
                 type='password'
                 id='password'
                 value={userData.password}
                 name='password'
                 onChange={handleChange}
                 className={errors.password && style.warning} /></label>
              {errors.password && (<p className={style.danger} >{errors.password}</p>)}   
            <button>Submit</button>
        </form>
    </div>
  )
}
