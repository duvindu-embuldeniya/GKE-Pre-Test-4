import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const RegisterComponent = () => {

  const navigate = useNavigate()

  const[username, setUsername] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[errors, setErrors] = useState({})
  const[success, setSuccess] = useState(false)
  const[loading,  setLoading] = useState(false)

  const handleRegistration = async (e) => {
    e.preventDefault()
    const userData = {username, email, password}

    setLoading(true)

    try{
        const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/register/`, userData)
        setSuccess(true)
        setUsername('')
        setEmail('')
        setPassword('')
        setErrors('')
        // navigate('/')
    }

    catch(error){
        setErrors(error.response.data)
    }
    finally{
        setLoading(false)
    }
  }

  return (
    <>
        <div className='container'>

            <div className='row justify-content-center'>

                <div className='col-md-6 bg-light-dark p-5 rounded'>
                    <h3 className='text-light text-center mb-4'>Create an Account</h3>

                    <form onSubmit={handleRegistration}>
                        <div className='mb-3'>
                            <input type="text" required className='form-control' placeholder='Username' onChange={(e) =>{setUsername(e.target.value)}} value={username} />
                            <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                        </div>
                        
                        <div className='mb-3'>
                            <input type="email" required className='form-control' placeholder='Email' onChange={(e) => {setEmail(e.target.value)}} value={email} />
                            <small>{errors.email && <div className='text-danger'>{errors.email}</div>}</small>
                        </div>
                       
                        <div className='mb-3'>
                            <input type="password" required className='form-control' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}} value={password} />
                            <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
                        </div>
                      
                        {success && <div className='alert alert-success text-center'>Account Created!</div>}
                        
                        {loading ? (
                            <button type='submit' className='btn btn-info d-block mx-auto'>Please Wait...</button>
                        ) : (
                            <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
                        )}
                    </form> 
                </div>

            </div>

        </div>
    </>
  )
}

export default RegisterComponent