import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Dynamically set document's title on head section
 * @param {*} title string to be parsed as a title
 * @returns react component with updated head title
 * @example <Metadata title='About page' />
 */
const Metadata = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} | MEDIFY`}</title>
    </Helmet>
  );
};

export default Metadata;
