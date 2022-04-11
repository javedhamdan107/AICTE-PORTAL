import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import './login.css';
import { signin } from '../../features/user/userSlice';
import { isValidEmail } from '../../helpers/utils';
import { UNKNOWN_ERROR_MSG } from '../../app/constants';

const validateSignin = ({ email, password }) => {
    const validateError = {};
  
    if (email === '') {
      validateError.email = 'Email is missing';
    } else {
      const validEmail = isValidEmail(email);
      if (!validEmail) {
        validateError.email = 'You have entered an invalid email address!';
      }
    }
  
    if (password === '') {
      validateError.password = 'Password is missing';
    }
    return validateError;
  };

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const validatedErrors = validateSignin({ email, password });
    setError(validatedErrors);

    if (Object.keys(validatedErrors).length !== 0) {
      return;
    }

    dispatch(signin({ email, password })).then(({ meta, payload }) => {
      if (meta.requestStatus === 'rejected') {
        setError({ responseError: (payload && payload.message) || UNKNOWN_ERROR_MSG });
      } else if (payload.userType === 'seeker') {
        dispatch(push('/seeker/dashboard'));
      } else {
        dispatch(push('/provider/dashboard'));
      }
    });
  };

    return (

        <form className='form-style'>
            <h3 className='header'>Sign In</h3>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} isInvalid={error.email} />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} isInvalid={error.password} />
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
        </form>

    )
}

export default Login