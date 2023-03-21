import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer className='py-1 fixed-bottom'>
        <p className='text-center mt-1'>
          &copy;{new Date().getFullYear()} Medify. All Rights Reserved
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
