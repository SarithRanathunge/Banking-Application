import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon_Image from './assets/bank-image-icon.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Error message state
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'user' && password === 'pass') {
            navigate('/main');
            setErrorMessage('');
        } else {
            setErrorMessage('Username or password is invalid, Please try again.');
        }
    };


    const clearErrorMessage = () => {
        setErrorMessage('');
    };

    return (
        <div className='w-full h-screen flex items-center justify-center'>

            {/* image box */}
            <div className='relative w-1/2 h-full flex flex-col bg-orange-500 items-center justify-center'>
                <img src={Icon_Image} className='w-2/4 h-2/4' alt=''/>
            </div>

            {/* login access giving box */}
            <div className='w-1/2 h-full flex flex-col items-center justify-center font-sans antialiased'>
                <form className='flex flex-col justify-center items-center' onSubmit={handleLogin}>

                    <h1 className='text-[24pt] font-bold tracking-wider mb-9'>LOGIN</h1>

                    <div className='w-auto flex flex-col items-start my-5'>
                        <label className='text-[14pt] font-medium ml-2 mb-2'>Username</label>
                        <input 
                            className='w-[450px] h-[50px] bg-transparent text-[14pt] border-2 pl-4  rounded-full border-orange-500 bg-none outline-transparent hover:border-4'
                            type="text"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            onClick={clearErrorMessage}
                        />
                    </div>

                    <div className='w-auto flex flex-col items-start my-5'>
                        <label className='text-[14pt] font-medium ml-2 mb-2'>Password</label>
                        <input 
                            className='w-[450px] h-[50px] bg-transparent text-[14pt] border-2 pl-4 rounded-full border-orange-500 bg-none outline-transparent hover:border-4'
                            type="password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            onClick={clearErrorMessage}
                        />
                    </div>

                    {/* Conditionally render the error message */}
                    {errorMessage && (
                        <p id='error_message' className='text-lg text-orange-500 font-medium ml-3'>
                            {errorMessage}
                        </p>
                    )}

                    <button className='w-[450px] h-[50px] border-2 bg-orange-500 border-orange-500 font-medium text-[16pt] rounded text-white mt-16 outline-none hover:border-2 hover:font-medium  hover:border-orange-500 hover:text-orange-500 hover:bg-transparent' 
                       type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
