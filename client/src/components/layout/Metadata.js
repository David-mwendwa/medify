import React from 'react';
import { Helmet } from 'react-helmet';

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} | MEDIFY`}</title>
    </Helmet>
  );
};

export default MetaData;
