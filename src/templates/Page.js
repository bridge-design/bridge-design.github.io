import PropTypes from 'prop-types';
import React from 'react';
import { Container } from '../components/Container';
import { Site } from '../components/Site';

const Page = ({ children, ...other }) => {
  return (
    <Site {...other}>
      {children}
    </Site>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
