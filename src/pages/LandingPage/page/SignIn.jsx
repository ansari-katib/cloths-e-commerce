import React, { useState } from 'react'
import { Link } from 'react-router';

const SignIn = () => {

    const [signInData, setSignInData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleOnChnage = (e) => {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signInData);
    }

    return (
        <div className='w-full h-screen'>
            <div className='max-w-7xl flex items-center justify-center mx-auto h-screen '>
                <div className='border-2 border-gray-400 p-8 lg:p-10  rounded-3xl'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-3xl font-bold text-gray-800 my-10'>Sign in</h1>
                    </div>
                    <form
                        className='flex flex-col gap-5'
                        onSubmit={handleSubmit}
                    >
                        <div className='flex flex-col'>
                            <label
                                className='text-lg text-gray-700 font-semibold'
                                htmlFor='name'>Enter your Name</label>
                            <input
                                type='name'
                                name='name'
                                placeholder='ansari katib'
                                value={signInData.name}
                                onChange={handleOnChnage}
                                required
                                className='p-2 border rounded-xl my-1 text-lg font-semibold text-gray-800'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label
                                className='text-lg text-gray-700 font-semibold'
                                htmlFor='email'>Enter your email</label>
                            <input
                                type='email'
                                name='email'
                                placeholder='ansari@gmail.com'
                                value={signInData.email}
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
                                value={signInData.password}
                                onChange={handleOnChnage}
                                required
                                className='p-2 pr-20 md:pr-30 lg:pr-40 border rounded-xl my-1 text-lg font-semibold text-gray-800 '
                            />
                        </div>
                        <button
                            className='text-xl font-semibold bg-gray-300 rounded-full py-2 cursor-pointer hover:bg-gray-500 hover:text-white'
                            type='submit'>Sign in</button>
                    </form>
                    <p className='mt-2'>already have an account ? <Link to={'/login'} className='hover:text-blue-800 hover:underline font-semibold'>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn
