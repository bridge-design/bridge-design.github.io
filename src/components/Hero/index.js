import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../DesignTokens';

import TeamWorkImage from './teamwork.svg';

const TeamWork = styled(TeamWorkImage)`
  margin: 0 50px;
`;

export const Wrapper = styled.div`
  width: 100%;
  color: ${colors.white.value};
  max-width: 750px;
`;

const TextWrapper = styled.div`
  margin: 50px 125px;
`;

export const ValueText = styled.h1`
  font-size: 50px;
  font-family: ${fonts.brand};
  font-weight: 700;
  line-height: 1.25em;
  margin: 50.52px auto;
`;

export const SubText = styled.h2`
  font-size: 16px;
  font-family: ${fonts.regular};
  font-weight: 500;
`;

const Hero = () => (
  <Wrapper>

    <TextWrapper>
      <SubText>Bridge the gap between design and development.</SubText>
      <ValueText>Build your brand and design&nbsp;system together!</ValueText>
    </TextWrapper>

    <TeamWork/>
  </Wrapper>
);

export { Hero };
