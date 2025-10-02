import React, { useState } from 'react'
import { Link } from 'react-router';

const Login = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleOnChnage = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginData);
    }

    return (
        <div className='w-full h-screen'>
            <div className='max-w-7xl flex items-center justify-center mx-auto h-screen '>
                <div className='border-2 border-gray-400 p-5 lg:p-10 rounded-3xl'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-3xl font-bold text-gray-800 my-10'>Login</h1>
                    </div>
                    <form
                        className='flex flex-col gap-5'
                        onSubmit={handleSubmit}
                    >
                        <div className='flex flex-col'>
                            <label
                                className='text-lg text-gray-700 font-semibold'
                                htmlFor='email'>Enter your email</label>
                            <input
                                type='email'
                                name='email'
                                placeholder='ansari@gmail.com'
                                value={loginData.email}
                                onChange={handleOnChnage}
                                required
                                className='p-2 border rounded-xl my-1 text-lg font-semibold text-gray-800'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label
                                className='text-lg text-gray-700 font-semibold'
                                htmlFor='password'>Enter your password</label>
                            <input
                                type='password'
                                name='password'
                                placeholder='ansari@gmail.com'
                                value={loginData.password}
                                onChange={handleOnChnage}
                                required
                                className='p-2 pr-20 md:pr-30 lg:pr-40 border rounded-xl my-1 text-lg font-semibold text-gray-800 '
                            />
                        </div>
                        <button
                            className='text-xl font-semibold bg-gray-300 rounded-full py-2 cursor-pointer hover:bg-gray-500 hover:text-white'
                            type='submit'>Login</button>
                    </form>
                    <p className='mt-2'>dont have an account ? <Link to={'/sign-in'} className='hover:text-blue-800 hover:underline font-semibold'>Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
