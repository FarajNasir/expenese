import React, { useState } from 'react'
import { Form, Input ,message} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Password from 'antd/es/input/Password'
import Spinner from '../components/Spinner'

const Login = () => {
    const [loading,setLoading]=useState(false)
    const navigate = useNavigate()
    const submitHandler = async(values) => {
        try {
            setLoading(true)
           const {data}= await axios.post('/api/v1/user/login', values)
           
           message.success("Login success");
           setLoading(false);
           navigate('/');
           localStorage.setItem('user',JSON.stringify({...data,Password:""}))
        } catch (error) {
            setLoading(false)
           message.error(error.response?.data?.message || "Something went wrong");
        }
    }
    return (
        <>
            <div className='register'>
                {loading && <Spinner/>}
                <Form layout='vertical' onFinish={submitHandler}>
                    <h1>Login Form</h1>
                    <Form.Item label="Email" name="email">
                        <Input type='email' />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type='password' />
                    </Form.Item>
                    <div className="d-flex">
                        <Link to='/register'>Not a user ? Click Here to register</Link>
                        <button className='btn btn-primary'>Login</button>
                    </div>
                </Form>
            </div></>
    )
}

export default Login
