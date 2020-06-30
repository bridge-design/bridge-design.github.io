import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../DesignTokens';

export const Wrapper = styled.div`
  margin: 0 0 3em;
`;

export const Title = styled.h4`
  font-size: 18px;
  font-family: ${fonts.brand};
  font-weight: 500;
  line-height: 1.15em;
  color: ${colors.blue600.value};
`;

export const SubTitle = styled.p`
  font-family: ${fonts.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.65em;
  color: ${colors.black.value};
`;

const FeatureCard = ({ title, subtitle }) => (
  <Wrapper>
    <Title>{title}</Title>
    <SubTitle>{subtitle}</SubTitle>
  </Wrapper>
);

export { FeatureCard };
