import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../DesignTokens';

import LogoImage from './logo.svg';

export const LogoContainer = styled(LogoImage)`
  width: 26px;
  display: block;
  margin: ${props => props.align === "right" ? "0 0 0 auto" : "0 auto 0 0"};
`;

const Logo = ({align = "left"}) => (
    <LogoContainer align={align} />
);

export { Logo };
