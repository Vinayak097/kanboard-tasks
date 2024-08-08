import React, { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


import { userSchema } from '../utils/authValide';
import { backend_url } from '../cofige';

interface AuthformProps {
  type: 'login' | 'signup';
}

function Authform({ type }: AuthformProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameerror, setUsernameError] = useState<string>('');
  const [formerror, setFormError] = useState<string>('');
  const [passworderror, setPasswordError] = useState<string>('');
  const [spinner, setSpinner] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUsernameError('');
    setPasswordError('');
  }, [username, password]);

  const formHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validInput = userSchema.safeParse({ username, password });
    if (validInput.error) {
        for (const error of validInput.error.errors as { path: any; message: any }[]) {
          if (error.path === 'username') {
            setUsernameError(error.message);
          }
          if (error.path === 'password') {
            setPasswordError(error.message);
          }
        }
      }
      
      
    if (!validInput.error) {
      const data = { username, password };
      const url = `${backend_url}/auth/${type}`;

      setSpinner(true);
      try {
        const response = await axios.post(url, data);
        if (response.status === (type === 'login' ? 200 : 201)) {
            toast.success(`${type === 'login' ? 'Login' : 'Signup'} success`);
            const token = response.data.token;
            localStorage.setItem('Ttoken', token);
            navigate('/kanban');  // Updated line
          }
      } catch (error: any) {
        toast.error(error.message);
        if (error.response?.status === 411) {
          toast.error('Username/password incorrect');
          setUsernameError('User not found / incorrect password');
        } else if (error.response?.status === 400) {
          setUsernameError('Username already exists');

        } else if (error.response?.status === 404) {
          setUsernameError('Incorrect inputs');
        } else {
          setFormError('Failed to signup, retry');
        }
      } finally {
        setSpinner(false);
      }
    }
  };

  return (
    <div className='flex'>
      <Toaster />

      <div className='border bg-yellow-100 flex flex-1 justify-center h-screen items-center'>
        <p className='text-3xl px-5 fs-1 font-light text-primary mx-4'>
          Supercharge Your Day with todo! Your tasks, your way – Effortless, Efficient, Exceptional. Let's Get Things Done!
        </p>
      </div>

      <div className='border bg-blue-100 flex flex-col gap-4 flex-1 justify-center items-center'>
        <div className='text-3xl text-center mb-4'>
          {type === 'login' ? 'Login' : 'Create an Account'}
        </div>
        <form onSubmit={formHandler}>
          <div className='flex flex-col gap-2 h-20'>
            <div>
              <input
                className='p-2 bg-blue-50'
                type="text"
                placeholder='username'
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameerror && (
                <p className='text-red-500 error mt-2 mb-n1'>
                  {usernameerror}
                </p>
              )}
            </div>
            <div>
              <input
                className='p-2 bg-blue-50'
                type="password"
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              {passworderror && (
                <p className='text-red-500 error mt-2 mb-n1'>
                  {passworderror}
                </p>
              )}
              {formerror && (
                <p>{formerror}</p>
              )}
            </div>
            <div>
              <button className='text-xl p-2 bg-blue-500 border w-full rounded-md'>
                {spinner ? 'Loading..' : <div>{type === 'login' ? 'Login' : 'Signup'}</div>}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Authform;
