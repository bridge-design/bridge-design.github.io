import React from 'react';
import styled from 'styled-components';
import { Button as ButtonAntd } from 'antd';
import 'antd/lib/button/style';

import { colors, fonts } from '../DesignTokens';

const ButtonContainer = styled(ButtonAntd)`
  font-size: 16px;
  font-family: ${fonts.brand};
  font-weight: 500;
  height: 3.125em;
  color: ${colors.white.value};
  background-color: ${(props) => (props.type === 'primary' ? colors.pink500.value : colors.blue700.value)};
  border-radius: 4px;
  border: none;
  padding: 0 16px;

  :hover {
    background-color: ${(props) => (props.type === 'primary' ? colors.pink600.value : colors.blue800.value)};
  }

  :active {
    background-color: ${(props) => (props.type === 'primary' ? colors.pink500.value : colors.blue700.value)};
  }
`;

const Button = (props) => <ButtonContainer {...props} />;

export { Button };
