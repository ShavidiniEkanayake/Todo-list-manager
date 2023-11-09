import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';
import { loginApi } from '..//utils/Api';
import logo from '../assets/logos/LogoFull.svg'
import LoginBg from '../assets/LoginBg.svg'
import ArrowIcon from '../assets/Icons/Arrow---Right-Square.svg'
import Image from 'next/image';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (credentials) => {
    try {
      const user = await loginApi(credentials);
      dispatch(login(user));
      router.push('/Home');
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className="flex h-full w-full">
      <div className="w-1/4">
        <div className="flex justify-center">
          <div className="text-center">
            <Image src={logo} alt="Logo" className='w-32 py-4 mx-auto' />
            <h2 className='font-TTHovesProTrialDemiBold text-darkblue text-sm text-center'>Already you are registered,</h2>
          </div>
        </div>
        <LoginForm onLogin={handleLogin} />
      </div>

      <div className="w-3/4 bg-darkblue relative">
        <div className='absolute pl-10 pt-7'>
          <p className='font-TTHovesProTrialDemiBold text-4xl text-white mb-5'>Welcome Back</p>
          <p className='w-1/3 text-white font-TTHovesProTrialLight mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          <div className='flex flex-row'>
            <p className='text-white font-TTHovesProTrialMedium mb-4'>New to Urban</p>
            <Image src={ArrowIcon} className='ml-2 mb-4' />
          </div>
          <button className='bg-lightblue text-white rounded-full px-5 py-2'>Sign Up</button>
        </div>
        <div className='flex justify-end opacity-70'>
          <Image src={LoginBg} />
        </div>
      </div>
    </div>
  );
};

export default Login;