import React from 'react';
import styled from 'styled-components';

import { colors } from '../DesignTokens';

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
  font-family: 'Seaweed Script', cursive;
`;

export const Slogan = styled.span`
  font-size: 30px;
`;

const Hero = () => (
  <Wrapper>
    <Logo/><br/>
    <Name>Bridge </Name>
    <Slogan> a tool to bridge the gap between design and development</Slogan>
  </Wrapper>
);

export { Hero };