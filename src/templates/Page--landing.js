import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

import { Site } from '../components/Site';

import { colors } from '../components/DesignTokens';

import { Hero } from '../components/Hero';

const CellLeft = styled(Cell)`
  background-color: ${colors.blue600.value};
`;

const Page = ({ children, ...other }) => {
  return (
    <Site header={false} {...other}>
      <Grid columns={2} gap={'0'}>
        <CellLeft width={1}>
          <Hero/>
        </CellLeft>

        <Cell width={1} style={{padding: '75px 125px'}}>
          {children}
        </Cell>

      </Grid>
    </Site>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;