import React from 'react';
import styled from 'styled-components';

import { colors } from '../DesignTokens';

import BridgeIcon from '../../assets/bridge.svg'

const Logo = styled(BridgeIcon)`
  width: 200px;
`;

export const Wrapper = styled.div``;

const Hero = () => (
  <Wrapper>
    <Logo/>
  </Wrapper>
);

export { Hero };
