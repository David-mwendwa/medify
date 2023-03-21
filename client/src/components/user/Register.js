import React from 'react';

import useInput from '../../hooks/useInput';

const Register = () => {
  const { values, handleChange } = useInput({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const { name, email, password, passwordConfirm } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, passwordConfirm });
  };

  return (
    <div className='container h-100'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col-lg-12 col-xl-11'>
          <div className='card text-black' style={{ borderRadius: '25px' }}>
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
                          id='form3Example1c'
                          className='form-control'
                          name='name'
                          value={name}
                          onChange={handleChange}
                        />
                        <label className='form-label' for='form3Example1c'>
                          Your Name
                        </label>
                      </div>
                    </div>

                    <div className='d-flex flex-row align-items-center mb-4'>
                      <i className='fa fa-envelope fa-lg me-3 fa-fw'></i>
                      <div className='form-outline flex-fill mb-0'>
                        <input
                          type='email'
                          id='form3Example3c'
                          className='form-control'
                          name='email'
                          value={email}
                          onChange={handleChange}
                        />
                        <label className='form-label' for='form3Example3c'>
                          Your Email
                        </label>
                      </div>
                    </div>

                    <div className='d-flex flex-row align-items-center mb-4'>
                      <i className='fa fa-lock fa-lg me-3 fa-fw'></i>
                      <div className='form-outline flex-fill mb-0'>
                        <input
                          type='password'
                          id='form3Example4c'
                          className='form-control'
                          name='password'
                          value={password}
                          onChange={handleChange}
                        />
                        <label className='form-label' for='form3Example4c'>
                          Password
                        </label>
                      </div>
                    </div>

                    <div className='d-flex flex-row align-items-center mb-4'>
                      <i className='fa fa-key fa-lg me-3 fa-fw'></i>
                      <div className='form-outline flex-fill mb-0'>
                        <input
                          type='password'
                          id='form3Example4cd'
                          className='form-control'
                          name='passwordConfirm'
                          value={passwordConfirm}
                          onChange={handleChange}
                        />
                        <label className='form-label' for='form3Example4cd'>
                          Repeat your password
                        </label>
                      </div>
                    </div>

                    <p className='text-center text-muted mt-5 mb-0'>
                      Have an account already?{' '}
                      <a href='/login' className='fw-bold text-body'>
                        <u>Login here</u>
                      </a>
                    </p>

                    <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                      <button type='submit' className='btn btn-primary btn-lg'>
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
  );
};

export default Register;
