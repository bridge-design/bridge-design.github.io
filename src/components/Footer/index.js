import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../DesignTokens';

const Wrapper = styled('footer')`
  height: 100px;
  padding: 24px 0;
  background-color: ${colors.blue700.value};
  color: ${colors.white.value};
  font-size: 14px;
  font-family: ${fonts.regular};
  line-height: 24px;

  a {
    color: ${colors.white.value};;
    text-decoration: underline;

    :hover {
      text-decoration: none;
    }
  }
`;

const Base = styled('div')`
  @media (max-width: 648px) {
    margin: 0;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    text-align: center;

    > *:first-child {
      margin-right: 8px;
    }
  }
`;

const Right = styled(Base)`
  text-align: right;
  padding: 0 24px;
`;

const Footer = () => (
  <Wrapper>
    <Right>
      <div>
        ©{' '}
        Bridge Tool, {new Date().getFullYear()}.
      </div>
      <div>
        <a href="https://github.com/bridge-tool/bridge-tool.github.com/blob/develop/LICENSE">CC BY-NC</a> Licensed.
      </div>
      </Right>
  </Wrapper>
);

export { Footer };
