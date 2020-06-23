import PropTypes from 'prop-types';
import React from 'react';
import { Container } from '../components/Container';
import { Site } from '../components/Site';

const Page = ({ children, ...other }) => {
  return (
    <Site header={false} {...other}>
      <Container>{children}</Container>
    </Site>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;