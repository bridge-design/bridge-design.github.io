import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

const Wrapper = styled('footer')`
  padding: 24px 0;
  background-color: #222;
  border-top: 1px solid rgba(0, 0, 0, 0.38);
  color: rgba(255, 255, 255, 0.54);
  font-size: 14px;
  line-height: 24px;

  a {
    color: #fff;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

const Inner = styled('div')`
  display: flex;
  flex-flow: nowrap row;

  @media (max-width: 648px) {
    flex-flow: nowrap column;
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
  margin-left: auto;
  text-align: right;
`;

const Footer = () => (
  <Wrapper>
    <Container maxWidth={1200}>
      <Inner>
        <Right>
          <div>
            Copyright ©{' '}
            Bridge Tool, 2020.
          </div>
          <div>
            <a href="https://github.com/bridge-tool/bridge-tool.github.com/blob/develop/LICENSE">CC BY-NC</a> Licensed.
          </div>
        </Right>
      </Inner>
    </Container>
  </Wrapper>
);

export { Footer };
