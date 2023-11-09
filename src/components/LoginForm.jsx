import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLogin({ username, password });
    };

    return (
        <div className='flex flex-row w-full justify-center'>
            <div className='flex w-3/4'>
                <div className="bg-white md:mt-7 sm:max-w-md xl:p-0 text-white w-full max-w-screen-md">
                    <div className='mb-5'>
                        <label className='font-TTHovesProTrialDemiBold text-darkblue'>
                            Username
                            <input type="text" className='border border-[#898989] rounded-md py-2 mt-2 w-full placeholder:p-2 placeholder:font-TTHovesProTrialRegular' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                        </label>
                    </div>
                    <div className='mb-5'>
                        <label className='font-TTHovesProTrialDemiBold text-darkblue'>
                            Password
                            <input type="password" className='border border-[#898989] rounded-md py-2 mt-2 w-full placeholder:p-2 placeholder:font-TTHovesProTrialRegular' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                        </label>
                    </div>
                    <div className='mt-7 bg-darkblue rounded-md text-white font-TTHovesProTrialDemiBold py-3 flex justify-center'>
                        <button onClick={handleLogin} className=''>Login</button>
                    </div>
                    <div className='text-darkblue mt-3'>
                        <p>Forgot Password?Reset</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;