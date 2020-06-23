import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-top: -100px;
`;

const Title = styled.h1`
  font-size: 80px;
`

const Slogan = styled.main`
  display: block;
  margin-top: 2em;
  font-size: 40px;
  line-height: 1.2em;
`;

const seo = {
  title: 'Bridge',
};

const Welcome = ({ path }) => {

  return (
    <Card>

      <Title>
        Bridge
      </Title>

      <Slogan>
        the tool to bridge the gap between design and development
      </Slogan>

    </Card>
  );
};

export { Welcome };
