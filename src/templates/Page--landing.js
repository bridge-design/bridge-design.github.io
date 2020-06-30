import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint'

import { Grid, Cell } from 'styled-css-grid';

import { Site } from '../components/Site';

import { colors } from '../components/DesignTokens';

import { Hero } from '../components/Hero';
import { Logo } from '../components/Logo';

export const LandingGrid = styled(Grid)`
  ${breakpoint('mobile')`
    grid-template-columns: minmax(0, 1fr);
  `}
  ${breakpoint('tablet')`
    grid-template-columns: minmax(0, 1fr);
  `}
  ${breakpoint('desktop')`
    grid-template-columns: minmax(500px, 1fr) minmax(500px, 1fr);
  `}
`;

export const CellLeft = styled(Cell)`
  background-color: ${colors.blue600.value};
  margin-bottom: 30px;
`;

export const CellRight = styled(Cell)`
  ${breakpoint('mobile')`
    margin: 50px 20px;
  `}
  ${breakpoint('tablet')`
    margin: 50px 75px;
  `}
  ${breakpoint('desktop')`
    margin: 85px 125px 30px;
  `}
`;

const Page = ({ children, ...other }) => {
  return (
    <Site header={false} {...other}>
      <LandingGrid  gap={'0'}>
        <CellLeft width={1}>
          <Hero/>
        </CellLeft>

        <CellRight width={1}>
          <Logo align="right"/>
          {children}
        </CellRight>

      </LandingGrid>
    </Site>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;