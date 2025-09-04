import React, { useState } from 'react'
import axios from 'axios'

import {Form,Input,message} from 'antd'
import { Link,useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

const Register = () => {
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const submitHandler=async(values)=>{
        try {
            setLoading(true)
            await axios.post('/api/v1/user/register',values);
            message.success("Registration successful");
            setLoading(false)
            navigate('/login')
        } catch (error) {
            setLoading(false);
            message.error("Invallid username or password");
            
        }
    }
  return (
   <>
    <div className='register'>
        {loading && <Spinner/>}
       <Form layout='vertical' onFinish={submitHandler}>
        <h1>Register Form</h1>
        <Form.Item label="Name" name="name">
            <Input/>
        </Form.Item>
        <Form.Item label="Email" name="email">
            <Input type='email'/>
        </Form.Item>
        <Form.Item label="Password" name="password">
            <Input type='password'/>
        </Form.Item>
        <div className="d-flex">
            <Link to='/login'>Already Registered ? click here to login</Link>
            <button className='btn btn-primary'>Register</button>
        </div>
       </Form>
    </div></>
  )
}

export default Register
