import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../DesignTokens';

import BridgeIcon from '../../assets/bridge.svg'

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
`;

export const Logo = styled(BridgeIcon)`
  width: 200px;
  margin: 0 auto;
`;

export const Name = styled.span`
  font-size: 40px;
  font-family: ${fonts.logo};
`;

export const Slogan = styled.span`
  font-size: 30px;
  font-family: ${fonts.regular};
  font-weight: 200;
`;

export const ValueText = styled.p`
  font-size: 20px;
  font-family: ${fonts.regular};
  font-weight: 200;
`;

const Hero = () => (
  <Wrapper>
    <Logo/>
    <p>
      <Name>Bridge </Name>
      <Slogan> a tool to bridge the gap between design and development</Slogan>
    </p>
    <ValueText>Document your brand and design system by all the processionals together.</ValueText>
  </Wrapper>
);

export { Hero };
