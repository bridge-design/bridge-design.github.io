import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { Input } from '../Input';
import { Button } from '../Button';

import { colors, fonts } from '../DesignTokens';

import TeamWorkImage from './teamwork.svg';

const TeamWork = styled(TeamWorkImage)`
  margin: 0 50px;
`;

export const Wrapper = styled.div`
  ${breakpoint('mobile')`
    width: 100vw;
  `}
  ${breakpoint('tablet')`
    width: 100%;
  `}
  ${breakpoint('desktop')`
    width: 100%;
  `}
  color: ${colors.white.value};
  max-width: 750px;
`;

const TextWrapper = styled.div`
  ${breakpoint('mobile')`
    margin: 50px 20px;
  `}
  ${breakpoint('tablet')`
    margin: 50px 75px;
  `}
  ${breakpoint('desktop')`
    margin: 50px 125px;
  `}
`;

export const ValueText = styled.h1`
  ${breakpoint('mobile')`
    font-size: 32px;
  `}
  ${breakpoint('tablet')`
    font-size: 50px;
  `}
  ${breakpoint('desktop')`
    font-size: 50px;
  `}
  font-family: ${fonts.brand};
  font-weight: 700;
  line-height: 1.25em;
  margin: 50.52px auto;
  color: ${colors.white.value};
`;

export const SubText = styled.h2`
  font-size: 16px;
  font-family: ${fonts.regular};
  font-weight: 500;
  color: ${colors.white.value};
`;

export const SubscribeText = styled.p`
  font-size: 16px;
  font-family: ${fonts.regular};
  font-weight: 400;
`;

export class SubscribeForm extends React.Component {

  handleSubmit() {
    window.open('https://tinyletter.com/bridgetool',
        'popupwindow', 'scrollbars=yes,width=800,height=600');
  }

  render() {
    return (
      <form
        name="subscribe-launch-form"
        action="https://tinyletter.com/bridgetool"
        method="post"
        target="popupwindow"
        onSubmit={this.handleSubmit.bind(this)}>
        <SubscribeText>Be first to learn about Bridge launch!</SubscribeText>
        <Input placeholder="Enter your email" name="email" id="tlemail" />
        <input type="hidden" value="1" name="embed"/>
        <Button
          type="primary"
          htmlType="submit" onSubmit={this.handleSubmit.bind(this)} style={{margin: "16px 0"}}>Subscribe Now</Button>
      </form>
    )
  }
}

const Hero = () => (
  <Wrapper>

    <TextWrapper>
      <SubText>Bridge the gap between design and development.</SubText>
      <ValueText>Build your brand and design&nbsp;system together!</ValueText>
      <SubscribeForm/>
    </TextWrapper>

    <TeamWork/>
  </Wrapper>
);

export { Hero };
