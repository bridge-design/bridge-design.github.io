import React from 'react';
import styled from 'styled-components';
import { Button as ButtonAntd } from 'antd';
import "antd/lib/button/style";

import { colors, fonts } from '../DesignTokens';

const ButtonContainer = styled(ButtonAntd)`
  font-size: 14x;
  font-family: ${fonts.brand};
  font-weight: 500;
  height: 3em;
  color: ${colors.white.value};
  background-color: ${props => props.type === "primary" ? colors.pink.value : colors.blue700.value};
  border-radius: 4px;
  border: none;
  padding: 0 16px;
`;

const Button = (props) => (
  <ButtonContainer {...props} />
);

export { Button };
