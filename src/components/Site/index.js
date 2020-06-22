import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint'

import { Footer } from '../Footer';
import { Navigation } from '../Navigation';
import { Theme } from '../Theme';
import { Seo } from './Seo';

export const Main = styled.div`
  ${breakpoint('desktop') `
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto -100px auto;
  `}
`

const Site = ({ location, pageContext, path, seo, children }) => (
  <Theme>
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
