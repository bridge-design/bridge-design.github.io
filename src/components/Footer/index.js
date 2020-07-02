import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../DesignTokens';

const Wrapper = styled('footer')`
  width: 100%;
  height: 100px;
  padding: 24px 0;
  background-color: ${colors.blue700.value};
  color: ${colors.white.value};
  font-size: 14px;
  font-family: ${fonts.regular};
  line-height: 24px;

  display: flex;
  justify-content: space-between;

  a {
    color: ${colors.white.value};
    text-decoration: underline;

    :hover {
      text-decoration: none;
    }
  }
`;

const Base = styled('div')`
  padding: 0 24px;
  display: flex;

  @media (max-width: 648px) {
    padding: 0 12px;
  }
`;

const Left = styled(Base)`
  text-align: left;

  flex-direction: column;
  justify-content: center;

`;

const Right = styled(Base)`
  text-align: right;

  align-items: center;
  justify-content: space-between;

  a {
    padding-left: 24px;
  }
`;

const Footer = () => (
  <Wrapper>
      <Left>
      <div>
        ©{' '}
        Bridge Tool, {new Date().getFullYear()}.
      </div>
      <div>
        <a href="https://github.com/bridge-tool/bridge-tool.github.com/blob/develop/LICENSE">CC BY-NC</a> Licensed.
      </div>
      </Left>
    <Right>
      <a target="_blank" rel="noopener noreferrer" href="#">Email</a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/bridge_tool">Twitter</a>
      </Right>
  </Wrapper>
);

export { Footer };
