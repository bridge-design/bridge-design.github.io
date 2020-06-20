import React from 'react';
import styled from 'styled-components';

import { Container } from '../components/Container';
import { Site } from '../components/Site';

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
  title: 'Home',
};

const IndexPage = (props) => (
  <Site seo={seo} {...props}>
    <Container>

      <Card>

        <Title>
          Bridge
        </Title>

        <Slogan>
          bridges the gap between design and development
        </Slogan>

      </Card>
  
    </Container>
  </Site>
);

export default IndexPage;
