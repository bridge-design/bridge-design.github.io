import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint'

import { Container } from '../Container';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Theme } from '../Theme';
import { Seo } from './Seo';

export const Main = styled.div`
  min-height: calc(100vh - 100px - 80px);
`

const Site = ({ header = true, location, pageContext, path, seo, children }) => (
  <Theme>
    { header && <Header/> }
    <Seo location={location} pageContext={pageContext} seo={seo} />
    <Main>{children}</Main>
    <Footer />
  </Theme>
);

Site.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
  path: PropTypes.string.isRequired,
  seo: PropTypes.shape({
    name: PropTypes.string,
    basepath: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
    image: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

Site.defaultProps = {
  pageContext: {},
  seo: {},
};

export { Site };
