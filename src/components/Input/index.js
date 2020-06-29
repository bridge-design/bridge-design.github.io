import React from 'react';
import styled from 'styled-components';
import { Input as InputAntd } from 'antd';

import { colors, fonts } from '../DesignTokens';

const InputContainer = styled(InputAntd)`
  color: ${colors.black.value};
  font-size: 16px;
  font-family: ${fonts.regular};
  font-weight: 400;
  line-height: 2em;
  padding-left: 0.5em;

  &::placeholder {
    font-size: 16px;
    font-family: ${fonts.regular};
    font-weight: 400;
    color: ${colors.blue300.value};
  }

  &:focus {
    outline-color: ${colors.pink.value};
  }
`;

const Input = (props) => (
  <InputContainer {...props} />
);

export { Input };