import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { register, resetUser } from '../../redux/actions/userActions';
import Metadata from '../layout/Metadata';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, authenticated } = useSelector((state) => state.auth);
  const { values, handleChange, resetValues } = useInput({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const { name, email, password, passwordConfirm } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password, passwordConfirm }));
    resetValues();
  };

  useEffect(() => {
    if (authenticated) {
      toast.success('Registered successfully');
      setTimeout(() => {
        navigate('/');
        // dispatch(resetUser()); // causes inconsistency
      }, 2000);
    }
    if (error) {
      toast.error(error);
    }
  }, [authenticated, dispatch, error, navigate]);

  return (
    <>
      <Metadata title='Register' />
      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-lg-12 col-xl-11'>
            <div className='card text-black' style={{ borderRadius: '5px' }}>
              <div className='card-body p-md-5'>
                <div className='row justify-content-center'>
                  <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                    <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                      Sign up
                    </p>

                    <form className='mx-1 mx-md-4' onSubmit={handleSubmit}>
                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fa fa-user fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='text'
                            className='form-control'
                            name='name'
                            value={name}
                            onChange={handleChange}
                            placeholder='Your name'
                          />
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fa fa-envelope fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='email'
                            className='form-control'
                            name='email'
                            value={email}
                            onChange={handleChange}
                            placeholder='Your email'
                          />
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fa fa-lock fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='password'
                            className='form-control'
                            name='password'
                            value={password}
                            onChange={handleChange}
                            placeholder='Password'
                          />
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fa fa-key fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='password'
                            className='form-control'
                            name='passwordConfirm'
                            value={passwordConfirm}
                            onChange={handleChange}
                            placeholder='Repeat your password'
                          />
                        </div>
                      </div>

                      <p className='text-center text-muted mt-5 mb-0'>
                        Have an account already?{' '}
                        <Link to='/login' className='fw-bold text-body'>
                          <u>Login here</u>
                        </Link>
                      </p>

                      <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                        <button type='submit' className='btn btn-danger btn-lg'>
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                      className='img-fluid'
                      alt='auth-img'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
