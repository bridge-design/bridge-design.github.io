import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../DesignTokens';

export const Wrapper = styled.div`
  min-width: 100px;
  // border: 3px solid ${colors.secondary.value};
  border-radius: 15px;
  padding: 10px;
  background: ${colors.shadow.value};
`;

export const Title = styled.h4`
  font-size: 30px;
  font-family: ${fonts.regular};
  font-weight: 100;
`;

export const SubTitle = styled.p`
  font-family: ${fonts.regular};
  font-size: 20px;
  font-weight: 200;
`;

const FeatureCard = ({ title, subtitle }) => (
  <Wrapper>
    <Title>{title}</Title>
    <SubTitle>
      {subtitle}
    </SubTitle>
  </Wrapper>
);

export { FeatureCard };