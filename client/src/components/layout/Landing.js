import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <section className='banner-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              <h4>Caring for better life</h4>
              <h1>Leading the way in medical excellence</h1>
              <p>
                Earth greater grass for good. Place for divide evening yielding
                them that. Creeping beginning over gathered brought.
              </p>
              <Link to='/login' className='btn mt-3 text-light'>
                take appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section class='feature-area section-padding'>
        <div class='container'>
          <div class='row'>
            <div class='feature-card col-lg-3 col-md-6'>
              <div class='single-feature text-center item-padding'>
                <img
                  src='https://preview.colorlib.com/theme/medino/assets/images/feature1.png.webp'
                  alt=''
                />
                <h3>advance technology</h3>
                <p class='pt-3'>
                  Creeping for female light years that lesser can't evening
                  heaven isn't bearing tree appear
                </p>
              </div>
            </div>
            <div class='feature-card col-lg-3 col-md-6'>
              <div class='single-feature text-center item-padding mt-4 mt-md-0'>
                <img
                  src='https://preview.colorlib.com/theme/medino/assets/images/feature2.png'
                  alt=''
                />
                <h3>comfortable place</h3>
                <p class='pt-3'>
                  Creeping for female light years that lesser can't evening
                  heaven isn't bearing tree appear
                </p>
              </div>
            </div>
            <div class='feature-card col-lg-3 col-md-6'>
              <div class='single-feature text-center item-padding mt-4 mt-lg-0'>
                <img
                  src='https://preview.colorlib.com/theme/medino/assets/images/feature3.png'
                  alt=''
                />
                <h3>quality equipment</h3>
                <p class='pt-3'>
                  Creeping for female light years that lesser can't evening
                  heaven isn't bearing tree appear
                </p>
              </div>
            </div>
            <div class='feature-card col-lg-3 col-md-6'>
              <div class='single-feature text-center item-padding mt-4 mt-lg-0'>
                <img
                  src='https://preview.colorlib.com/theme/medino/assets/images/feature4.png'
                  alt=''
                />
                <h3>friendly staff</h3>
                <p class='pt-3'>
                  Creeping for female light years that lesser can't evening
                  heaven isn't bearing tree appear
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
